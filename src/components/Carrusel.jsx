import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { supabase } from '../supabaseClient'; // Importa tu cliente de Supabase

const Carrusel = () => {
    const [carouselItems, setCarouselItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function getCarouselItems() {
            try {
                setLoading(true);
                setError(null);

                const { data, error } = await supabase
                    .from('carousel_items')
                    .select('*')
                    .order('created_at', { ascending: true });

                if (error) {
                    throw error;
                }

                setCarouselItems(data);
                console.log('Datos obtenidos de Supabase:', data);
            } catch (err) {
                console.error('Error al obtener los ítems del carrusel:', err.message);
                setError('No se pudieron cargar las creaciones del momento. Por favor, intenta de nuevo más tarde.');
            } finally {
                setLoading(false);
            }
        }

        getCarouselItems();
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    // *** CAMBIO AQUÍ: Habilita el deslizamiento con el dedo y arrastre ***
                    draggable: true, // Permite arrastrar los slides
                    swipe: true,     // Permite deslizar con el dedo
                }
            }
        ]
    };

    if (loading) {
        return (
            <div className="w-full py-7 bg-beige-100 text-center text-gray-700">
                Cargando creaciones del momento...
            </div>
        );
    }

    if (error) {
        return (
            <div className="w-full py-7 bg-beige-100 text-center text-red-500">
                {error}
            </div>
        );
    }

    if (carouselItems.length === 0) {
        return (
            <div className="w-full py-7 bg-beige-100 text-center text-gray-500">
                No hay creaciones disponibles en este momento. ¡Añade algunas en tu base de datos de Supabase!
            </div>
        );
    }

    return (
        <div className="w-full py-7 bg-beige-100" style={{ overscrollBehavior: 'contain', touchAction: 'pan-y' }}>
            <div className="container mx-auto px-10 max-w-7xl">
                <h2 className="text-2xl font-normal md:text-1xl lg:text-3xl text-gray-800 text-center mb-4">
                    Creaciones del Momento
                </h2>
                <Slider {...settings}>
                    {carouselItems.map((item) => (
                        <div key={item.id}>
                            <img
                                src={item.image_url}
                                alt={item.description || 'Creación Artesanal'}
                                className="w-full h-46 lg:h-65 object-cover rounded-lg"
                            />
                            <p className="mt-2 text-gray-700 text-center">{item.description}</p>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Carrusel;