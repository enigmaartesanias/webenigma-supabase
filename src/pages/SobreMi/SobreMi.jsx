import sobremi1 from "../../assets/images/sobremi1.jpg";
const SobreMi = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-5 font-sans">
      <div className="grid grid-cols-1 md:grid-cols-[320px_1fr] gap-8 items-center">
        {/* Imagen a la izquierda */}
        <div className="flex justify-center mt-16 md:mt-0">
          <img
            src={sobremi1}
            alt="Aldo Magallanes"
            className="rounded-xl shadow-lg w-full max-w-xs object-cover"
          />
        </div>
        {/* Texto a la derecha */}
        <div className="md:pl-5">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Sobre mí</h2>
          <h3 className="text-xl font-semibold text-gray-600 mb-1">Enigma Artesanías y Accesorios</h3>
          <p className="text-md text-gray-500 mb-4">por Aldo Magallanes</p>
          <p className="text-gray-700 mb-4">
            Enigma Artesanías y Accesorios nace como la expresión de una vida dedicada al arte de la joyería. Soy Aldo Magallanes, joyero artesano con más de 30 años de experiencia, formado junto a grandes artesanos y guiado por una pasión que sigue viva cada día.
          </p>
          <p className="text-gray-700 mb-4">
            Fusiono técnicas tradicionales como el alambrismo, el martillado y la soldadura con un estilo contemporáneo que respeta lo ancestral. Cada pieza es elaborada a mano, con dedicación, desde mi taller en Perú. A lo largo del camino, figuras como Andru Donalds, cantante principal de Enigma, han elegido mis creaciones como parte de su identidad.
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