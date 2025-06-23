import andruDonalds from '../../assets/images/andru.jpg';

const Hero2 = () => {
  return (
    <section className="bg-gray-200 py-8 md:py-16">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        {/* Contenedor principal para las dos columnas */}
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          {/* Columna de la imagen */}
          <div className="w-full md:w-1/2 flex justify-center">
         <img
         src={andruDonalds}
         alt="Andru Donalds con joyas"
        className="w-3/3 max-w-[180px] h-auto max-w-xs rounded-lg shadow-lg object-cover // max-w-xs (384px) en móvil, h-auto para proporción
              md:max-w-md md:h-[400px] lg:h-[800px] xl:h-[700px]" // Alturas más pequeñas en escritorio
         />
        </div>

          {/* Columna del texto y contenido */}
          <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left">
            <h2 className="text-2xl sm:text-1xl lg:text-3xl font-normal text-gray-900 mb-4">
              Andru Donalds y el Arte de Enigma
            </h2>
            <p className="text-left text-m md:text-lg sm:text-lg text-gray-700 mb-6 leading-relaxed">
              Una colaboración que une música y orfebrería. Andru Donalds, voz principal de Enigma, luce nuestras joyas hechas a mano: anillos con piedras naturales, cuarzos y un dije único que refleja estilo, fuerza y esencia artesanal.
Fotografía: Emillio Gaziyants
            </p>

           

        
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero2;