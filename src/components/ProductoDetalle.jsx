import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../supabaseClient';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import iconoCompartir from '../assets/images/compartir.png';
import { Link } from 'react-router-dom';

const ProductoDetalle = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [relacionados, setRelacionados] = useState([]);

  useEffect(() => {
    const fetchProducto = async () => {
      setLoading(true);
      setError(null);

      const { data, error } = await supabase
        .from('productos')
        .select('*')
        .eq('id', id)
        .single();

      if (error) {
        console.error(error);
        setError('No se pudo cargar el producto.');
      } else {
        setProducto(data);
      }

      setLoading(false);
    };

    fetchProducto();
  }, [id]);

  useEffect(() => {
    if (producto) {
      const fetchRelacionados = async () => {
        try {
          const { data, error } = await supabase
            .from('productos')
            .select('*')
            .neq('id', id)
            .order('orden', { ascending: true })
            .limit(4);

          if (error) throw error;
          setRelacionados(data || []);
        } catch (err) {
          console.error('Error al cargar productos relacionados:', err.message);
        }
      };

      fetchRelacionados();
    }
  }, [producto]);

  useEffect(() => {
    if (producto) {
      const fetchMateriales = async () => {
        try {
          const { data: materialsData, error: materialsError } = await supabase
            .from('producto_material')
            .select('material_id')
            .eq('producto_id', id);

          if (materialsError) throw materialsError;

          const materialsPromises = materialsData.map(async (materialData) => {
            const { data: materialName, error: materialError } = await supabase
              .from('materiales')
              .select('nombre')
              .eq('id', materialData.material_id)
              .single();

            if (materialError) throw materialError;

            return materialName.nombre;
          });

          const materiales = await Promise.all(materialsPromises);
          // Guardamos solo el primer material (opcional: puedes usar join si quieres todos)
          const materialPrincipal = materiales[0] || 'No especificado';

          setProducto((prevProducto) => ({
            ...prevProducto,
            material_principal: materialPrincipal
          }));
        } catch (err) {
          console.error('Error al cargar materiales:', err.message);
        }
      };

      fetchMateriales();
    }
  }, [producto, id]);

  if (loading) return <div className="p-8 text-center">Cargando producto...</div>;
  if (error) return <div className="p-8 text-center text-red-500">{error}</div>;
  if (!producto) return <div className="p-8 text-center">Producto no encontrado.</div>;

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          draggable: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <main className="pt-24 pb-12 bg-gray-50 min-h-screen">
      <div className="container mx-auto p-8 max-w-3xl bg-white shadow-xl rounded-lg">
        {/* Galería */}
        <div className="mb-6">
          <Slider {...settings}>
            {producto.imagen_principal_url && (
              <div>
                <img
                  src={producto.imagen_principal_url}
                  alt="Imagen principal"
                  className="w-full h-auto object-cover rounded"
                />
                <p className="text-center mt-2">1 de 3</p>
              </div>
            )}
            {producto.imagen2_url && (
              <div>
                <img
                  src={producto.imagen2_url}
                  alt="Imagen 2"
                  className="w-full h-auto object-cover rounded"
                />
                <p className="text-center mt-2">2 de 3</p>
              </div>
            )}
            {producto.imagen3_url && (
              <div>
                <img
                  src={producto.imagen3_url}
                  alt="Imagen 3"
                  className="w-full h-auto object-cover rounded"
                />
                <p className="text-center mt-2">3 de 3</p>
              </div>
            )}
          </Slider>
        </div>

        {/* Detalles */}
        <div className="py-4 mb-4">
          <h2 className="text-xl mb-2 text-left">{producto.titulo}</h2>

          {/* Material */}
          <div className="text-left mb-0">
            <div className="text-left mb-0">Material:</div>
            <p className="py-2 text-left">{producto.material_principal}</p>
          </div>


          <div className="text-left mb-0">Precio:</div>
          {producto.precio && (
            <p className="text-lg mb-2 text-left">
              S/ {producto.precio?.toFixed(2)} PEN
            </p>
          )}

          
          
          {producto.descripcion && (
            <p className="py-2 text-left mb-2">{producto.descripcion}</p>
          )}

          {/* Incluye IGV */}
          <div className="text-left mb-4">
            "El precio no incluye IGV ni envío. Si deseas más información sobre tallas, disponibilidad o envíos, contáctame a través de WhatsApp."
          </div>

        </div>

        {/* Botón WhatsApp */}
        <div className="flex justify-center mb-4">
          <a
            href={`https://wa.me/51960282376?text= ${encodeURIComponent(
              `${producto.titulo}\n${producto.descripcion}\n${window.location.origin}/producto/${producto.id}`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            title="Consultar o pedir por WhatsApp"
            className="flex items-center gap-1 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded shadow"
          >
            <img src={iconoCompartir} alt="WhatsApp" className="w-6 h-6" />
            Consultar
          </a>
        </div>

        {/* Productos relacionados */}
        <div className="py-10 mb-6">
          <h2 className="text-1xl font-bold mb-4 text-left">Productos relacionados</h2>
          <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
            {relacionados.map((relatedProducto) => (
              <div key={relatedProducto.id} className="text-center">
                <Link to={`/producto/${relatedProducto.id}`}>
                  <img
                    src={relatedProducto.imagen_principal_url}
                    alt={relatedProducto.titulo}
                    className="w-full h-32 object-cover aspect-square"
                  />
                  <h3 className="mt-2 text-xs">{relatedProducto.titulo}</h3>
                  <p className="mt-1 text-xs">
                    Precio: S/ {relatedProducto.precio}
                  </p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductoDetalle;