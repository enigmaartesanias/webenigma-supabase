import { Link } from "react-router-dom";

const materials = [
  { name: "Plata", path: "plata" },
  { name: "Alpaca", path: "alpaca" },
  { name: "Cobre", path: "cobre" },
];

const images = [
  { src: "/images/aretes.jpg", text: "ARETES", slug: "aretes" },
  { src: "/images/pulseras.jpg", text: "PULSERAS", slug: "pulseras" },
  { src: "/images/anillos.jpg", text: "ANILLOS", slug: "anillos" },
  { src: "/images/collares.jpg", text: "COLLARES", slug: "collares" },
];

const Galeria = () => {
  return (
    // Añadimos font-sans para una tipografía por defecto más moderna
<div className="max-w-7xl mx-auto px-3 py-4 sm:py-12 sm:px-6 lg:px-8 font-sans">
  <h4 className="text-2xl text-gray-800 text-center mb-4 sm:mb-12 sm:text-5xl lg:text-4xl tracking-tight">
    Explora Nuestras Joyas
  </h4>
      {/* Mayor espacio entre las tarjetas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-10">
        {images.map((img, index) => (
          // Bordes más redondeados, sombra más pronunciada y efecto hover mejorado
          <div
            key={index}
            className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl flex flex-col"
          >
            {/* Contenedor para imagen con relación de aspecto 1:1 */}
            <div className="relative w-full aspect-square overflow-hidden">
              {/* Imagen que cubre el contenedor y efecto de zoom al pasar el cursor */}
              <img
                src={img.src}
                alt={img.text}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>
            {/* Padding interno para el contenido, centrado y flex-grow para que ocupe el espacio disponible */}
            <div className="p-2 flex flex-col items-center flex-grow">
              {/* Texto de categoría más grande, negrita, mayúsculas y espaciado de letras */}
              <span className="text-1xl font-bold text-gray-900 uppercase mb-4 tracking-wider">
                {img.text}
              </span>
              {/* Gap entre botones y mt-auto para empujarlos al fondo de la tarjeta */}
              <div className="flex flex-wrap justify-center gap-1 mt-auto">
                {materials.map((mat) => (
                  // Botones tipo pastilla con bordes, sombra sutil y mejores efectos hover/focus
                  <Link
                    key={mat.name}
                    to={`/${mat.path}/${img.slug}`}
                    className="inline-flex items-center justify-center px-5 py-1 border-2 border-gray-300 text-base font-medium rounded-full text-gray-700 bg-white hover:bg-gray-100 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200 ease-in-out shadow-sm"
                  >
                    {mat.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Galeria;