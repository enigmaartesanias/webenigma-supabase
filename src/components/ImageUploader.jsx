import React, { useState } from 'react';
import { supabase } from '../supabaseClient';
import { v4 as uuidv4 } from 'uuid';
import imageCompression from 'browser-image-compression'; // Importa la librería de compresión

const ImageUploader = ({ onUploadSuccess, bucketName = 'carousel-images' }) => {
    const [uploading, setUploading] = useState(false);
    const [imageFile, setImageFile] = useState(null); // Archivo original seleccionado
    const [compressedFile, setCompressedFile] = useState(null); // Archivo después de la compresión y canvas processing
    const [uploadError, setUploadError] = useState(null);
    const [processing, setProcessing] = useState(false); // Estado para indicar que se está procesando (compresión + canvas)

    // Opciones de compresión inicial (solo por tamaño, las dimensiones las maneja Canvas)
    const compressionOptions = {
        maxSizeMB: 0.3, // Máximo 300 KB (0.3 MB)
        useWebWorker: true, // Usa Web Workers para no bloquear la UI
        maxIteration: 10,
    };

    // Dimensiones de salida deseadas
    const TARGET_WIDTH = 800;
    const TARGET_HEIGHT = 600;

    const handleFileChange = async (event) => {
        const file = event.target.files[0];
        if (!file) {
            setImageFile(null);
            setCompressedFile(null);
            setUploadError(null);
            return;
        }

        setImageFile(file);
        setUploadError(null);
        setCompressedFile(null);
        setProcessing(true); // Indicar que el procesamiento ha comenzado

        try {
            // Paso 1: Comprimir la imagen para reducir su tamaño
            const compressedBlob = await imageCompression(file, compressionOptions);

            // Paso 2: Procesar la imagen con Canvas para asegurar 800x600 y recortar
            const processedFile = await processImageWithCanvas(compressedBlob, TARGET_WIDTH, TARGET_HEIGHT);

            setCompressedFile(processedFile);
            console.log('Imagen original:', (file.size / 1024).toFixed(2), 'KB');
            console.log('Imagen procesada (final):', (processedFile.size / 1024).toFixed(2), 'KB');

        } catch (err) {
            console.error('Error durante el procesamiento de la imagen:', err.message);
            setUploadError(`Error al procesar la imagen: ${err.message}`);
            setCompressedFile(null);
        } finally {
            setProcessing(false); // Indicar que el procesamiento ha terminado
        }
    };

    // Función para procesar la imagen con Canvas (redimensiona y recorta)
    const processImageWithCanvas = (imageBlob, targetWidth, targetHeight) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = (e) => {
                const img = new Image();
                img.onload = () => {
                    const canvas = document.createElement('canvas');
                    const ctx = canvas.getContext('2d');

                    canvas.width = targetWidth;
                    canvas.height = targetHeight;

                    // Calcular las dimensiones de origen y destino para el recorte
                    const imgAspectRatio = img.width / img.height;
                    const canvasAspectRatio = targetWidth / targetHeight;

                    let sx, sy, sWidth, sHeight; // Source (recorte de la imagen original)
                    let dx, dy, dWidth, dHeight; // Destination (dibujo en el canvas)

                    if (imgAspectRatio > canvasAspectRatio) {
                        // La imagen original es más ancha que el canvas (ej. 16:9 en 4:3)
                        // Recortar los lados izquierdo/derecho de la imagen original
                        sHeight = img.height;
                        sWidth = sHeight * canvasAspectRatio;
                        sx = (img.width - sWidth) / 2;
                        sy = 0;
                    } else {
                        // La imagen original es más alta que el canvas (ej. 3:4 en 4:3)
                        // Recortar la parte superior/inferior de la imagen original
                        sWidth = img.width;
                        sHeight = sWidth / canvasAspectRatio;
                        sx = 0;
                        sy = (img.height - sHeight) / 2;
                    }

                    // Dibujar la parte recortada de la imagen original en todo el canvas
                    ctx.drawImage(img, sx, sy, sWidth, sHeight, 0, 0, targetWidth, targetHeight);

                    // Convertir el canvas a un Blob y luego a un File
                    canvas.toBlob((blob) => {
                        if (blob) {
                            const processedFile = new File([blob], imageBlob.name, {
                                type: blob.type,
                                lastModified: Date.now(),
                            });
                            resolve(processedFile);
                        } else {
                            reject(new Error('No se pudo convertir el canvas a Blob.'));
                        }
                    }, 'image/jpeg', 0.9); // Formato JPEG, calidad 0.9 (ajustable)
                };
                img.onerror = () => {
                    reject(new Error('No se pudo cargar la imagen para procesamiento Canvas.'));
                };
                img.src = e.target.result;
            };
            reader.readAsDataURL(imageBlob);
        });
    };

    const uploadImage = async () => {
        if (!compressedFile) {
            setUploadError('Por favor, selecciona y procesa una imagen válida para subir.');
            return;
        }
        if (uploadError) {
            return;
        }

        setUploading(true);
        setUploadError(null);

        const fileExtension = imageFile.name.split('.').pop();
        const filePath = `${uuidv4()}.${fileExtension}`;

        try {
            const { data, error } = await supabase.storage
                .from(bucketName) // Usa el bucket recibido por props
                .upload(filePath, compressedFile, {
                    cacheControl: '3600',
                    upsert: false,
                });

            if (error) {
                throw error;
            }

            const { data: publicUrlData } = supabase.storage
                .from(bucketName)
                .getPublicUrl(filePath);

            if (publicUrlData.publicUrl) {
                console.log('Imagen subida exitosamente:', publicUrlData.publicUrl);
                if (onUploadSuccess) {
                    onUploadSuccess(publicUrlData.publicUrl);
                }
                setImageFile(null);
                setCompressedFile(null);
            } else {
                throw new Error('No se pudo obtener la URL pública de la imagen.');
            }

        } catch (err) {
            console.error('Error al subir la imagen:', err.message);
            setUploadError(`Error al subir la imagen: ${err.message}`);
        } finally {
            setUploading(false);
        }
    };

    return (
        <div className="border p-4 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold mb-3">Subir Nueva Imagen</h3>
            <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="mb-3 block w-full text-sm text-gray-500
                file:mr-4 file:py-2 file:px-4
                file:rounded-full file:border-0
                file:text-sm file:font-semibold
                file:bg-violet-50 file:text-violet-700
                hover:file:bg-violet-100"
            />
            {imageFile && (
                <p className="text-sm text-gray-600 mb-2">Archivo seleccionado: {imageFile.name}</p>
            )}
            {processing && (
                <p className="text-blue-500 text-sm mb-2">Procesando imagen (redimensionando y recortando)...</p>
            )}
            {compressedFile && !processing && (
                <p className="text-green-600 text-sm mb-2">
                    Imagen lista para subir. Tamaño: {(compressedFile.size / 1024).toFixed(2)} KB.
                </p>
            )}
            {uploadError && <p className="text-red-500 text-sm mb-4">{uploadError}</p>}
            <button
                onClick={uploadImage}
                disabled={uploading || processing || !compressedFile || uploadError}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50"
            >
                {uploading ? 'Subiendo...' : (processing ? 'Procesando...' : 'Subir Imagen')}
            </button>
        </div>
    );
};

export default ImageUploader;
