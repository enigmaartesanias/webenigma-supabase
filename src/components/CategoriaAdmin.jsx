import React, { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';
import { useAuth } from '../contexts/AuthContext';
import ImageUploader from './ImageUploader';

const ProductosAdmin = () => {
    const { user } = useAuth();
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [editingProducto, setEditingProducto] = useState(null);
    const [categorias, setCategorias] = useState([]); // Para seleccionar categoría

    // Estados del formulario
    const [formData, setFormData] = useState({
        categoria_id: '', // relación con tabla categorias
        titulo: '',
        descripcion: '',
        imagen_principal_url: '',
        imagen2_url: '',
        imagen3_url: '',
        precio: '',
        slug: '',
        orden: 0,
        activo: true,
        meta_descripcion: '',
        palabras_clave: '',
        moneda: 'USD'
    });

    // Si no hay usuario
    if (!user) {
        return (
            <div className="p-8 text-center text-gray-700">
                <h2 className="text-2xl font-bold mb-4">Acceso restringido</h2>
                <p>Debes iniciar sesión para administrar los productos.</p>
            </div>
        );
    }

    useEffect(() => {
        fetchProductos();
        fetchCategorias();
    }, []);

    const fetchProductos = async () => {
        try {
            setLoading(true);
            const { data, error } = await supabase
                .from('productos')
                .select('*, categorias(nombre)')
                .order('orden', { ascending: true });

            if (error) throw error;
            setProductos(data || []);
            setError(null);
        } catch (err) {
            setError('Error al cargar los productos.');
            console.error('Error:', err);
        } finally {
            setLoading(false);
        }
    };

    const fetchCategorias = async () => {
        try {
            const { data, error } = await supabase.from('categorias').select('*');
            if (error) throw error;
            setCategorias(data || []);
        } catch (err) {
            console.error('Error al cargar categorías:', err);
        }
    };

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);

        try {
            const formDataToSend = {
                ...formData,
                precio: formData.precio !== '' ? parseFloat(formData.precio) : null
            };

            if (editingProducto) {
                const { error } = await supabase
                    .from('productos')
                    .update(formDataToSend)
                    .eq('id', editingProducto.id);

                if (error) throw error;
                setEditingProducto(null);
            } else {
                const { error } = await supabase
                    .from('productos')
                    .insert([formDataToSend]);

                if (error) throw error;
            }

            resetForm();
            fetchProductos();
        } catch (err) {
            setError(`Error al ${editingProducto ? 'actualizar' : 'crear'} el producto: ${err.message}`);
        }
    };

    const handleEdit = (producto) => {
        setEditingProducto(producto);
        setFormData({ ...producto });
        setError(null);
    };

    const handleDelete = async (id) => {
        if (!window.confirm('¿Estás seguro de que quieres eliminar este producto?')) return;

        try {
            const { error } = await supabase.from('productos').delete().eq('id', id);
            if (error) throw error;
            fetchProductos();
        } catch (err) {
            setError(`Error al eliminar el producto: ${err.message}`);
        }
    };

    const resetForm = () => {
        setFormData({
            categoria_id: '',
            titulo: '',
            descripcion: '',
            imagen_principal_url: '',
            imagen2_url: '',
            imagen3_url: '',
            precio: '',
            slug: '',
            orden: 0,
            activo: true,
            meta_descripcion: '',
            palabras_clave: '',
            moneda: 'USD'
        });
        setEditingProducto(null);
        setError(null);
    };

    const handleImageUpload = (field, url) => {
        setFormData(prev => ({
            ...prev,
            [field]: url
        }));
    };

    if (loading) {
        return <div className="p-4 text-center">Cargando productos...</div>;
    }

    return (
        <div className="container mx-auto p-6 max-w-6xl bg-white shadow-xl rounded-lg mt-8">
            {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                    <strong>Error:</strong> {error}
                </div>
            )}

            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                Administración de Productos
            </h2>

            {/* Formulario */}
            <form onSubmit={handleSubmit} className="mb-8 p-6 border rounded-lg bg-gray-50">
                <h3 className="text-xl font-semibold mb-4">
                    {editingProducto ? 'Editar Producto' : 'Nuevo Producto'}
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-bold mb-2">Categoría:</label>
                        <select
                            name="categoria_id"
                            value={formData.categoria_id}
                            onChange={handleInputChange}
                            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        >
                            <option value="">Seleccione una categoría</option>
                            {categorias.map(cat => (
                                <option key={cat.id} value={cat.id}>{cat.nombre}</option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-bold mb-2">Título:</label>
                        <input
                            type="text"
                            name="titulo"
                            value={formData.titulo}
                            onChange={handleInputChange}
                            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <div className="md:col-span-2">
                        <label className="block text-sm font-bold mb-2">Descripción:</label>
                        <textarea
                            name="descripcion"
                            value={formData.descripcion}
                            onChange={handleInputChange}
                            rows="3"
                            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-bold mb-2">Precio:</label>
                        <input
                            type="number"
                            name="precio"
                            value={formData.precio}
                            onChange={handleInputChange}
                            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Precio"
                            min="0"
                            step="0.01"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-bold mb-2">Slug (URL):</label>
                        <input
                            type="text"
                            name="slug"
                            value={formData.slug}
                            onChange={handleInputChange}
                            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="ej: collar-alpaca"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-bold mb-2">Orden:</label>
                        <input
                            type="number"
                            name="orden"
                            value={formData.orden}
                            onChange={handleInputChange}
                            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            name="activo"
                            checked={formData.activo}
                            onChange={handleInputChange}
                            className="mr-2"
                        />
                        <label className="text-sm font-bold">Producto Activo</label>
                    </div>
                </div>

                {/* Sección de imágenes */}
                <div className="mt-6">
                    <h4 className="text-lg font-semibold mb-4">Imágenes</h4>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {/* Imagen Principal */}
                        <div>
                            <label className="block text-sm font-bold mb-2">Imagen Principal:</label>
                            <ImageUploader 
                                bucketName="producto-images"
                                onUploadSuccess={(url) => handleImageUpload('imagen_principal_url', url)}
                            />
                            <input
                                type="url"
                                name="imagen_principal_url"
                                value={formData.imagen_principal_url}
                                onChange={handleInputChange}
                                placeholder="URL de imagen principal"
                                className="w-full p-2 border rounded mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            {formData.imagen_principal_url && (
                                <img src={formData.imagen_principal_url} alt="Principal" className="w-full h-32 object-cover rounded mt-2" />
                            )}
                        </div>

                        {/* Imagen 2 */}
                        <div>
                            <label className="block text-sm font-bold mb-2">Imagen 2:</label>
                            <ImageUploader 
                                bucketName="producto-images"
                                onUploadSuccess={(url) => handleImageUpload('imagen2_url', url)}
                            />
                            <input
                                type="url"
                                name="imagen2_url"
                                value={formData.imagen2_url}
                                onChange={handleInputChange}
                                placeholder="URL de imagen 2"
                                className="w-full p-2 border rounded mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            {formData.imagen2_url && (
                                <img src={formData.imagen2_url} alt="Imagen 2" className="w-full h-32 object-cover rounded mt-2" />
                            )}
                        </div>

                        {/* Imagen 3 */}
                        <div>
                            <label className="block text-sm font-bold mb-2">Imagen 3:</label>
                            <ImageUploader 
                                bucketName="producto-images"
                                onUploadSuccess={(url) => handleImageUpload('imagen3_url', url)}
                            />
                            <input
                                type="url"
                                name="imagen3_url"
                                value={formData.imagen3_url}
                                onChange={handleInputChange}
                                placeholder="URL de imagen 3"
                                className="w-full p-2 border rounded mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            {formData.imagen3_url && (
                                <img src={formData.imagen3_url} alt="Imagen 3" className="w-full h-32 object-cover rounded mt-2" />
                            )}
                        </div>
                    </div>
                </div>

                {/* Botones */}
                <div className="flex gap-4 mt-6">
                    <button
                        type="submit"
                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                    >
                        {editingProducto ? 'Actualizar' : 'Crear'} Producto
                    </button>
                    
                    {editingProducto && (
                        <button
                            type="button"
                            onClick={resetForm}
                            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                        >
                            Cancelar
                        </button>
                    )}
                </div>
            </form>

            {/* Lista de productos */}
            <h3 className="text-xl font-semibold mb-4">Productos Existentes</h3>
            {productos.length === 0 ? (
                <p className="text-center text-gray-500">No hay productos creados.</p>
            ) : (
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="py-3 px-6 text-left">Orden</th>
                                <th className="py-3 px-6 text-left">Título</th>
                                <th className="py-3 px-6 text-left">Categoría</th>
                                <th className="py-3 px-6 text-left">Slug</th>
                                <th className="py-3 px-6 text-left">Estado</th>
                                <th className="py-3 px-6 text-center">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {productos.map((producto) => (
                                <tr key={producto.id} className="border-b hover:bg-gray-50">
                                    <td className="py-3 px-6">{producto.orden}</td>
                                    <td className="py-3 px-6">{producto.titulo}</td>
                                    <td className="py-3 px-6">{producto.categorias?.nombre || 'Sin categoría'}</td>
                                    <td className="py-3 px-6">{producto.slug}</td>
                                    <td className="py-3 px-6">
                                        <span className={`px-2 py-1 rounded text-xs ${
                                            producto.activo ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                                        }`}>
                                            {producto.activo ? 'Activo' : 'Inactivo'}
                                        </span>
                                    </td>
                                    <td className="py-3 px-6 text-center">
                                        <button
                                            onClick={() => handleEdit(producto)}
                                            className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-3 rounded text-xs mr-2"
                                        >
                                            Editar
                                        </button>
                                        <button
                                            onClick={() => handleDelete(producto.id)}
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

export default ProductosAdmin;
