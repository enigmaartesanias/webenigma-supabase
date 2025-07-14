import React, { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';
import ImageUploader from './ImageUploader';
import { v4 as uuidv4 } from 'uuid';

const CarouselAdmin = () => {
    const [carouselItems, setCarouselItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [newItemDescription, setNewItemDescription] = useState('');
    const [newItemImageUrl, setNewItemImageUrl] = useState('');
    const [editingItem, setEditingItem] = useState(null);

    useEffect(() => {
        fetchCarouselItems();
    }, []);

    const fetchCarouselItems = async () => {
        try {
            setLoading(true);
            const { data, error } = await supabase
                .from('carousel_items')
                .select('*')
                .order('created_at', { ascending: false });

            if (error) throw error;
            setCarouselItems(data);
            setError(null);
        } catch (err) {
            console.error('Error fetching carousel items:', err.message);
            setError('Error al cargar los ítems del carrusel para administración.');
        } finally {
            setLoading(false);
        }
    };

    const handleAddOrUpdateItem = async (e) => {
        e.preventDefault();
        if (!newItemImageUrl || !newItemDescription) {
            setError('La URL de la imagen y la descripción son obligatorias.');
            return;
        }

        try {
            if (editingItem) {
                // Modo Edición
                const { error } = await supabase
                    .from('carousel_items')
                    .update({ image_url: newItemImageUrl, description: newItemDescription })
                    .eq('id', editingItem.id);

                if (error) throw error;
                setEditingItem(null);
            } else {
                // Modo Añadir
                const { error } = await supabase
                    .from('carousel_items')
                    .insert({ image_url: newItemImageUrl, description: newItemDescription });

                if (error) throw error;
            }
            setNewItemDescription('');
            setNewItemImageUrl('');
            fetchCarouselItems();
            setError(null);
        } catch (err) {
            console.error('Error adding/updating item:', err.message);
            setError(`Error al ${editingItem ? 'actualizar' : 'añadir'} el ítem: ${err.message}`);
        }
    };

    const handleDeleteItem = async (id) => {
        if (window.confirm('¿Estás seguro de que quieres eliminar este ítem?')) {
            try {
                // PASO 1: Obtener la URL de la imagen del ítem antes de eliminarlo de la DB
                const { data: itemToDelete, error: fetchError } = await supabase
                    .from('carousel_items')
                    .select('image_url')
                    .eq('id', id)
                    .single(); // Usamos .single() porque esperamos solo un resultado

                if (fetchError) throw fetchError;

                // PASO 2: Eliminar el ítem de la tabla de la base de datos
                const { error: deleteDbError } = await supabase
                    .from('carousel_items')
                    .delete()
                    .eq('id', id);

                if (deleteDbError) throw deleteDbError;

                // PASO 3: Eliminar la imagen del Storage si existe una URL
                if (itemToDelete && itemToDelete.image_url) {
                    // Extraer el nombre del archivo de la URL pública
                    // La URL de Supabase Storage es algo como:
                    // https://<project_ref>.supabase.co/storage/v1/object/public/<bucket_name>/<file_path>
                    // Necesitamos solo <file_path>
                    const urlParts = itemToDelete.image_url.split('/');
                    const filePathInStorage = urlParts.slice(urlParts.indexOf('public') + 2).join('/');

                    if (filePathInStorage) {
                        const { error: deleteStorageError } = await supabase.storage
                            .from('carousel-images') // **NOMBRE DE TU BUCKET DE STORAGE**
                            .remove([filePathInStorage]); // remove espera un array de rutas de archivo

                        if (deleteStorageError) {
                            console.error('Error al eliminar la imagen del Storage:', deleteStorageError.message);
                            // No lanzamos error aquí para no detener la eliminación del ítem de la DB
                            // pero sí lo registramos.
                        } else {
                            console.log('Imagen eliminada del Storage:', filePathInStorage);
                        }
                    }
                }

                fetchCarouselItems(); // Volver a cargar los ítems
                setError(null);
            } catch (err) {
                console.error('Error al eliminar el ítem:', err.message);
                setError(`Error al eliminar el ítem: ${err.message}`);
            }
        }
    };

    const startEditing = (item) => {
        setEditingItem(item);
        setNewItemDescription(item.description);
        setNewItemImageUrl(item.image_url);
    };

    const cancelEditing = () => {
        setEditingItem(null);
        setNewItemDescription('');
        setNewItemImageUrl('');
        setError(null);
    };

    const handleImageUploadSuccess = (url) => {
        setNewItemImageUrl(url);
        setError(null);
        alert('Imagen subida exitosamente. ¡Ahora puedes añadir la descripción y guardar el ítem!');
    };

    if (loading) {
        return <div className="p-4 text-center text-gray-700">Cargando panel de administración...</div>;
    }

    if (error) {
        return <div className="p-4 text-center text-red-500">{error}</div>;
    }

    return (
        <div className="container mx-auto p-6 max-w-4xl bg-white shadow-xl rounded-lg mt-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Administración del Carrusel</h2>

            <form onSubmit={handleAddOrUpdateItem} className="mb-8 p-6 border rounded-lg bg-gray-50">
                <h3 className="text-2xl font-semibold text-gray-700 mb-4">{editingItem ? 'Editar Ítem' : 'Añadir Nuevo Ítem'}</h3>

                <div className="mb-4">
                    <ImageUploader onUploadSuccess={handleImageUploadSuccess} />
                </div>

                <div className="mb-4">
                    <label htmlFor="imageUrl" className="block text-gray-700 text-sm font-bold mb-2">
                        URL de la Imagen:
                    </label>
                    <input
                        type="text"
                        id="imageUrl"
                        value={newItemImageUrl}
                        onChange={(e) => setNewItemImageUrl(e.target.value)}
                        placeholder="https://ejemplo.com/imagen.jpg"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    />
                    {newItemImageUrl && (
                        <div className="mt-2">
                            <img src={newItemImageUrl} alt="Vista previa" className="w-32 h-32 object-cover rounded-md shadow" />
                        </div>
                    )}
                </div>

                <div className="mb-6">
                    <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">
                        Descripción:
                    </label>
                    <input
                        type="text"
                        id="description"
                        value={newItemDescription}
                        onChange={(e) => setNewItemDescription(e.target.value)}
                        placeholder="Collar de plata con piedra preciosa"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    />
                </div>

                {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

                <div className="flex items-center justify-between">
                    <button
                        type="submit"
                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        {editingItem ? 'Actualizar Ítem' : 'Añadir Ítem'}
                    </button>
                    {editingItem && (
                        <button
                            type="button"
                            onClick={cancelEditing}
                            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Cancelar
                        </button>
                    )}
                </div>
            </form>

            <h3 className="text-2xl font-semibold text-gray-700 mb-4 text-center">Ítems Existentes</h3>
            {carouselItems.length === 0 ? (
                <p className="text-center text-gray-500">No hay ítems en el carrusel aún.</p>
            ) : (
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                        <thead>
                            <tr className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
                                <th className="py-3 px-6 text-left">ID</th>
                                <th className="py-3 px-6 text-left">Imagen</th>
                                <th className="py-3 px-6 text-left">Descripción</th>
                                <th className="py-3 px-6 text-center">Acciones</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-600 text-sm font-light">
                            {carouselItems.map((item) => (
                                <tr key={item.id} className="border-b border-gray-200 hover:bg-gray-50">
                                    <td className="py-3 px-6 text-left whitespace-nowrap">{item.id}</td>
                                    <td className="py-3 px-6 text-left">
                                        <img src={item.image_url} alt={item.description} className="w-16 h-16 object-cover rounded" />
                                    </td>
                                    <td className="py-3 px-6 text-left">{item.description}</td>
                                    <td className="py-3 px-6 text-center">
                                        <button
                                            onClick={() => startEditing(item)}
                                            className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-3 rounded text-xs mr-2"
                                        >
                                            Editar
                                        </button>
                                        <button
                                            onClick={() => handleDeleteItem(item.id)}
                                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded text-xs"
                                        >
                                            Eliminar
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default CarouselAdmin;