import sobremi1 from "../../assets/images/sobremi1.jpg";
const SobreMi = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-5 pb-16 font-sans">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
        {/* Imagen a la izquierda */}
        <div className="flex justify-center mt-16 md:mt-0 md:col-span-1">
          <img
            src={sobremi1}
            alt="Aldo Magallanes"
            className="rounded-xl shadow-lg w-full max-w-xs lg:max-w-md object-cover"
          />
        </div>
        {/* Texto a la derecha, ocupa dos columnas en escritorio */}
        <div className="md:col-span-2 md:pl-12">
       
          <h3 className="text-xl font-semibold text-gray-600 mb-1">Enigma Artesanías y Accesorios</h3>
          <p className="text-md text-gray-500 mb-4">de Aldo Magallanes</p>
          <p className="text-gray-700 mb-4">
            Enigma Artesanías y Accesorios nace como la expresión de una vida dedicada al arte de la joyería. Soy Aldo Magallanes, joyero artesano con más de 30 años de experiencia, formado junto a grandes artesanos y guiado por una pasión que sigue viva cada día.
          </p>
          <p className="text-gray-700 mb-4">
            Fusiono técnicas tradicionales como el alambrismo, el martillado y la soldadura con un estilo contemporáneo que respeta lo ancestral. Cada pieza es elaborada a mano, con dedicación, desde mi taller en Perú.
          </p>
          <p className="text-gray-700">
            Hoy, Enigma es una marca con alma propia. Desde la tienda física hasta las redes sociales, cada joya cuenta una historia y refleja la esencia de quien la lleva.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SobreMi;