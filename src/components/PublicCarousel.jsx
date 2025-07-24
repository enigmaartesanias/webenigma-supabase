// src/components/PublicCarousel.jsx (o donde tengas tus componentes de UI)
import React, { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient'; // Asegúrate de que este archivo solo inicializa supabase

const PublicCarousel = () => {
    const [carouselItems, setCarouselItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPublicCarouselItems = async () => {
            try {
                setLoading(true);
                // Esta llamada no requiere autenticación gracias a tu RLS para el rol 'anon'
                const { data, error } = await supabase
                    .from('carousel_items')
                    .select('*')
                    .order('created_at', { ascending: false });

                if (error) throw error;
                setCarouselItems(data);
                setError(null);
            } catch (err) {
                console.error('Error al obtener los ítems del carrusel público:', err.message);
                setError('No se pudieron cargar las imágenes del carrusel.');
            } finally {
                setLoading(false);
            }
        };

        fetchPublicCarouselItems();
    }, []); // Array de dependencias vacío para que se ejecute solo una vez al montar

    if (loading) {
        // Muestra un placeholder o un spinner, NO un mensaje de autenticación.
        return <div className="p-4 text-center text-gray-700">Cargando imágenes...</div>;
    }

    if (error) {
        return (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
                <strong className="font-bold">¡Error!</strong>
                <span className="block sm:inline"> {error}</span>
            </div>
        );
    }

    if (carouselItems.length === 0) {
        return <div className="p-4 text-center text-gray-500">No hay imágenes en el carrusel.</div>;
    }

    return (
        // Aquí va tu JSX para el carrusel visible al público
        <div className="public-carousel-container">
            {carouselItems.map(item => (
                <img key={item.id} src={item.image_url} alt={item.description} className="carousel-image" />
                // Implementa aquí tu lógica de carrusel (por ejemplo, con una librería de carrusel)
            ))}
        </div>
    );
};

export default PublicCarousel;