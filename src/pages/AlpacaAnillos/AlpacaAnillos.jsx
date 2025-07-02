import { useState } from 'react';
import SharedModal from '../../components/SharedModal/SharedModal';

import anillo1 from '../../assets/images/alpaca-anillos/anillo1.jpg';
import anillo2 from '../../assets/images/alpaca-anillos/anillo2.jpg';
import anillo3 from '../../assets/images/alpaca-anillos/anillo3.jpg';
import anillo4 from '../../assets/images/alpaca-anillos/anillo4.jpg';
import anillo5 from '../../assets/images/alpaca-anillos/anillo5.jpg';
import anillo6 from '../../assets/images/alpaca-anillos/anillo6.jpg';
import anillo7 from '../../assets/images/alpaca-anillos/anillo7.jpg';
import anillo8 from '../../assets/images/alpaca-anillos/anillo8.jpg';
import anillo9 from '../../assets/images/alpaca-anillos/anillo9.jpg';
import anillo10 from '../../assets/images/alpaca-anillos/anillo10.jpg';
import anillo11 from '../../assets/images/alpaca-anillos/anillo11.jpg';
import anillo12 from '../../assets/images/alpaca-anillos/anillo12.jpg';
import anillo13 from '../../assets/images/alpaca-anillos/anillo13.jpg';
import anillo14 from '../../assets/images/alpaca-anillos/anillo14.jpg';
import anillo15 from '../../assets/images/alpaca-anillos/anillo15.jpg';


const anillosData = [
  { id: 1, src: anillo1, alt: 'Anillo', title: 'Esferas con cuarzos', description: 'Anillo regulable en alpaca con algo de alambre en el aro, es regulable' },
  { id: 2, src: anillo2, alt: 'Anillo', title: 'Amatista natural', description: 'Piedra amatista natural , un engaste a presión, se puede cambiar el tipo de piedra' },
  { id: 3, src: anillo3, alt: 'Anillo', title: 'Crisocola en alambrismo', description: 'Anillo con muchos detalles en calibres de alambre, tiene aplicación de bronce' },
  { id: 4, src: anillo4, alt: 'Anillo', title: 'Modelos en alambrismo', description: 'Anillos con muchos detalles en calibres de alambre, acabado envejecido' },
  { id: 5, src: anillo5, alt: 'Anillo', title: 'Cuarzo rosado alambrismo', description: 'Anillo en alpaca con muchos calibres de alambrismo' },
  { id: 6, src: anillo6, alt: 'Anillo', title: 'Ágatas pequeñas envueltas', description: 'Tiene un engaste cono hojas a presión, varios colores de ágatas' },
  { id: 7, src: anillo7, alt: 'Anillo', title: 'Muranos con resina', description: 'Flores de murano con resina , tambien son regulables' },
  { id: 8, src: anillo8, alt: 'Anillo', title: 'Estilo tailandes', description: 'El detalle es que sirve para guardar algo pequeño o un recuerdo, con mucho alambrismo' },
  { id: 9, src: anillo9, alt: 'Anillo', title: 'Wrap turquesa reconstituida', description: 'Piedra turquesa engastada a presión, acabado envejecido' },
  { id: 10, src: anillo10, alt: 'Anillo', title: 'Rojo reconstituido dos piedras', description: 'Modelo de dos piedras en gota , acabado envejecido y regulable' },
  { id: 11, src: anillo11, alt: 'Anillo', title: 'Turquesa ancha envejecida', description: 'Es como un aro , elegante y fuerte por el grosor' },
  { id: 12, src: anillo12, alt: 'Anillo', title: 'Modelo soles con ágatas', description: 'Anillos tejidos en forma de sol con ágatas' },
  { id: 13, src: anillo13, alt: 'Anillo', title: 'Modelo coral envejecido', description: 'Anillo con piedra reconstituida color coral' },
  { id: 14, src: anillo14, alt: 'Anillo', title: 'Modelo turquesa con resina', description: 'Anillo con piedra reconstituida color turquesa' },
  { id: 15, src: anillo15, alt: 'Anillo', title: 'Modelo turquesa natural', description: 'Anillo con piedra turquesa con acabado envejecido' },
  

];

const AlpacaAnillos = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (image, idx) => {
    setSelectedImage(image);
    setCurrentIndex(idx);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <>
      <main className="bg-white py-8 md:py-10 pt-16">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <h1 className="mt-6 md:mt-0 text-1xl md:text-3xl lg:text-3xl font-semibold text-center text-gray-900 mb-4">
            Anillos de Alpaca – Arte en Orfebrería Artesanal
          </h1>
          <p className="text-sm md:text-lg text-center text-gray-700 mb-10 max-w-3xl mx-auto">
           Anillos trabajados a mano en alpaca, una aleación duradera y brillante que no envidia a la plata.
            Cada pieza fusiona técnicas de soldadura tradicional con alambrismo detallado.
            Usamos piedras naturales, cuarzos, nácar y spondylus que aportan carácter y color.
            Algunos diseños incluyen acabados envejecidos que resaltan su esencia artesanal.
            La alpaca refleja una luz cálida que resalta la elegancia del diseño.
            
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 gap-y-4 mb-6">
  {anillosData.map((anillo, idx) => (
    <div
      key={anillo.id}
      className="group relative cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col"
      onClick={() => openModal(anillo, idx)}
    >
      <img
        src={anillo.src}
        alt={anillo.alt}
        className="w-full h-48 md:h-64 object-cover object-center transform group-hover:scale-105 transition-transform duration-300"
      />
      {/* Título debajo de la imagen, no bold, con sombra y fondo blanco */}
      <div className="bg-white shadow-md rounded-b-lg px-2 py-2 text-center">
        <h3 className="text-base font-normal text-gray-800">{anillo.title}</h3>
      </div>
    </div>
  ))}
</div>
        </div>
      </main>
      {/* Modal para ampliación de imagen */}
      {modalOpen && selectedImage && (
        <SharedModal
          isOpen={modalOpen}
          onClose={closeModal}
          image={selectedImage}
          currentIndex={currentIndex}
          total={anillosData.length}
        />
      )}
    </>
  );
};

export default AlpacaAnillos;