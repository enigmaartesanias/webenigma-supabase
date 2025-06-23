import { useState, useEffect } from "react";
import principal from "../../assets/images/principal.jpg";
import principal2 from "../../assets/images/principal2.jpg";
import principal3 from "../../assets/images/principal3.jpg";
const images = [principal, principal2, principal3];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative w-full top-0 h-auto min-h-[400px]  flex flex-col items-center justify-center bg-gray-800 overflow-hidden
                 pt-36 md:pt-30" // <-- ¡CAMBIO CLAVE AQUÍ! Añadimos padding-top para móviles
    >
      <div className="absolute inset-0 flex items-center justify-center w-full lg:h-100">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt="Imagen Principal"
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 object-cover ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      {/* Contenedor del texto SEPARADO */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 md:px-8 lg:px-16 py-8 sm:py-12 md:py-16 lg:py-20">
        <h1 className="text-lg font-bold sm:text-3xl hidden md:text-4xl lg:text-5xl drop-shadow-lg">
          <span className="text-yellow-400">Enigma Artesanías y Accesorios</span>
        </h1>
        <p className="mt-2 text-sm hidden sm:text-xl md:text-2xl drop-shadow-md">
          Diseños únicos con historia y tradición
        </p>
      </div>
    </section>
  );
};

export default Hero;