import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { supabase } from '../supabaseClient';
import { Link } from 'react-router-dom';

const CategoriaShowcase = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProductos() {
      try {
        setLoading(true);
        setError(null);

        const { data, error } = await supabase
          .from('productos')
          .select('*')
          .eq('activo', true)
          .eq('is_novedoso', true)
          .order('orden', { ascending: true });

        if (error) throw error;
        setProductos(data || []);
      } catch (err) {
        console.error('Error al cargar productos:', err.message);
        setError('No se pudieron cargar los productos.');
      } finally {
        setLoading(false);
      }
    }

    fetchProductos();
  }, []);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    draggable: true,
    swipe: true,
    dots: true,
    dotsClass: "slick-dots-custom", // Clase personalizada
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          draggable: true,
          swipe: true,
          dots: true,
        },
      },
    ],
  };

  if (loading) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-300 rounded w-64 mx-auto mb-4"></div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map(i => (
                  <div key={i} className="bg-gray-300 rounded-lg h-56"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
            {error}
          </div>
        </div>
      </section>
    );
  }

  if (productos.length === 0) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-500">No hay productos destacados en este momento.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-10 bg-gray-50">
      <div className="container mx-auto px-3">
        {/* Título del showcase */}
        <div className="text-left mb-2">
          <h2 className="text-xl  text-gray-800">
            Creaciones del Momento
          </h2>
        </div>

        {/* Carrusel */}
        <div className="overflow-hidden">
          <Slider {...settings}>
            {productos.map((producto) => (
              <div key={producto.id} className="p-2">
                <Link to={`/producto/${producto.id}`} className="block ">
                  <img
                    src={producto.imagen_principal_url}
                    alt={producto.titulo}
                    className="w-full h-56 object-cover aspect-square shadow-md"
                    style={{ objectFit: 'cover', width: '100%', height: '100%', aspectRatio: '1 / 1' }}
                  />
                  <div className="mt-4 text-ms text-gray-700 text-left">
                    {producto.titulo}
                  </div>
                  <div className="mt-2 text-base text-gray-600 text-left">
                    S/. {producto.precio?.toFixed(2)} PEN
                  </div>
                </Link>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default CategoriaShowcase;