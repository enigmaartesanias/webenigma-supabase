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


const anillosData = [
  { id: 1, src: anillo1, alt: 'Anillo', title: 'Esferas de cuarzos', description: 'A pedido' },
  { id: 2, src: anillo2, alt: 'Anillo', title: 'Amatista natural envejecido', description: 'A pedido' },
  { id: 3, src: anillo3, alt: 'Anillo', title: 'Crisocola wrap', description: 'A pedido' },
  { id: 4, src: anillo4, alt: 'Anillo', title: 'Modelos en alambrismo envejecido', description: 'A pedido' },
  { id: 5, src: anillo5, alt: 'Anillo', title: 'Cuarzo rosado wrap', description: 'A pedido' },
  { id: 6, src: anillo6, alt: 'Anillo', title: 'Ágatas envueltas', description: 'A pedido' },
  { id: 7, src: anillo7, alt: 'Anillo', title: 'Muranos con resina', description: 'A pedido' },
  { id: 8, src: anillo8, alt: 'Anillo', title: 'Estilo tailandes', description: 'A pedido' },
  { id: 9, src: anillo9, alt: 'Anillo', title: 'wrap turquesa reconstituida', description: 'A pedido' },
  { id: 10, src: anillo10, alt: 'Anillo', title: 'Rojo reconstituido', description: 'A pedido' },
  { id: 11, src: anillo11, alt: 'Anillo', title: 'Turquesa alabrismo', description: 'A pedido' },
  { id: 12, src: anillo12, alt: 'Anillo', title: 'Modelo soles con ágatas', description: 'A pedido' },
  

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