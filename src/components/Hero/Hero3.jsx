import tecnica from '../../assets/images/tecnica.jpg';

const Hero3 = () => {
  return (
    <section className="bg-white py-8 md:py-16">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        {/* Contenedor principal para las dos columnas */}
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          {/* Columna de la imagen */}
          <div className="w-full md:w-1/2 flex justify-center">
         <img
         src={tecnica}
         alt="tecnica"
        className="w-3/3 max-w-[180px] h-auto max-w-xs rounded-lg shadow-lg object-cover // max-w-xs (384px) en móvil, h-auto para proporción
              md:max-w-md md:h-[400px] lg:h-[800px] xl:h-[700px]" // Alturas más pequeñas en escritorio
         />
        </div>

          {/* Columna del texto y contenido */}
          <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left">
            <h2 className="text-2xl sm:text-2xl lg:text-3xl font-normal text-gray-900 mb-4">
              La Técnica
            </h2>
            
          
            {/* Cita */}
           <blockquote className="text-left text-m md:text-lg text-gray-800 pl-0 mb-4">
  En Enigma Artesanías y Accesorios, combinamos técnicas ancestrales como el alambrismo y el martillado con acabados envejecidos que otorgan carácter y autenticidad. Cada joya es trabajada a mano con precisión, soldadura experta y el dominio de metales como la plata, el cobre, la alpaca y el bronce. Incrustaciones de cuarzos, nácar y otros elementos naturales aportan un brillo especial a nuestras piezas. Cada creación es una obra única, cargada de misterio, pasión y arte.
</blockquote>
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero3;