import { useState, useEffect } from "react";
import principal from "../../assets/images/principal.jpg";
import principal2 from "../../assets/images/principal2.jpg";
import principal3 from "../../assets/images/principal.jpg";

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
  className="relative w-full top-0 min-h-[700px] md:min-h-[900px] lg:min-h-[1100px] flex flex-col items-center justify-center bg-white-300 pt-60"
>
      <div className="absolute inset-0 w-full h-full">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt="Imagen Principal"
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 object-cover ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`}
            
            style={{
              filter: "sepia(0.3)",
              opacity: index === currentImage ? 1 : 0,
              transition: "opacity 1s"
            }}


          />
        ))}
      </div>

      {/* Contenedor del texto en caja semitransparente */}
      {/* <div className="absolute inset-0 flex flex-col items-center justify-center z-10 ">
        <div className="bg-black bg-opacity-50 rounded-lg px-2 py-1 mt-20">
          <h1 className="text-white text-center text-1xl sm:text-3xl md:text-4xl lg:text-3xl drop-shadow-lg">
            Enigma artesanías y accesorios
          </h1>
          <p className="text-gray-200 text-center text-base sm:text-lg mt-2">
      de Aldo Magallanes
    </p>
        </div>
      </div> */}
    </section>
  );
};

export default Hero;