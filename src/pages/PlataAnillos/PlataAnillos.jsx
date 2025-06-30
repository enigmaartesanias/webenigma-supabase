import { useState } from 'react';
import SharedModal from '../../components/SharedModal/SharedModal';

import anillo1 from '../../assets/images/plata-anillos/anillo1.jpg';
import anillo2 from '../../assets/images/plata-anillos/anillo2.jpg';
import anillo3 from '../../assets/images/plata-anillos/anillo3.jpg';
import anillo4 from '../../assets/images/plata-anillos/anillo4.jpg';
import anillo5 from '../../assets/images/plata-anillos/anillo5.jpg';
import anillo6 from '../../assets/images/plata-anillos/anillo6.jpg';
import anillo7 from '../../assets/images/plata-anillos/anillo7.jpg';
import anillo8 from '../../assets/images/plata-anillos/anillo8.jpg';
import anillo9 from '../../assets/images/plata-anillos/anillo9.jpg';
import anillo10 from '../../assets/images/plata-anillos/anillo10.jpg';
import anillo11 from '../../assets/images/plata-anillos/anillo11.jpg';
import anillo12 from '../../assets/images/plata-anillos/anillo12.jpg';
import anillo13 from '../../assets/images/plata-anillos/anillo13.jpg';
import anillo14 from '../../assets/images/plata-anillos/anillo14.jpg';
import anillo15 from '../../assets/images/plata-anillos/anillo15.jpg';
import anillo16 from '../../assets/images/plata-anillos/anillo16.jpg';
import anillo17 from '../../assets/images/plata-anillos/anillo17.jpg';
import anillo18 from '../../assets/images/plata-anillos/anillo18.jpg';
import anillo19 from '../../assets/images/plata-anillos/anillo19.jpg';
import anillo20 from '../../assets/images/plata-anillos/anillo20.jpg';
import anillo21 from '../../assets/images/plata-anillos/anillo21.jpg';
import anillo22 from '../../assets/images/plata-anillos/anillo22.jpg';
import anillo23 from '../../assets/images/plata-anillos/anillo23.jpg';
import anillo24 from '../../assets/images/plata-anillos/anillo24.jpg';





const anillosData = [
  { id: 1, src: anillo1, alt: 'Anillo', title: 'Flor de spondylus con pétalos', description: 'Anillo con spondylus morado en forma de flor y pétalos.' },
  { id: 2, src: anillo2, alt: 'Anillo', title: 'Labradorita con cuarzo', description: 'Anillo engastado con piedra labradorita y un pequeño cuarzo cristal adornado con detalles de alambrismo.' },
  { id: 3, src: anillo3, alt: 'Anillo', title: 'Modelos toque envejecido', description: 'Labradorita azul, turmalina negra y spondylus, envueltos en plata con un toque envejecido.' },
  { id: 4, src: anillo4, alt: 'Anillo', title: 'Con piedra crisocola en gota', description: 'Anillo con turquesa crisocola en forma de gota , de piedra grande' },
  { id: 5, src: anillo5, alt: 'Anillo', title: 'Estilo cinturón con nácar', description: 'Anillo con nacar cabujón y aro con orificios circulares' },
  { id: 6, src: anillo6, alt: 'Anillo', title: 'Anillo pirita', description: 'Anillos de plata regulables con acabado envejecido ' },
  { id: 7, src: anillo7, alt: 'Anillo', title: 'Anillo con ágatas', description: 'Anillos de plata regulables con acabado envejecido ' },
  { id: 8, src: anillo8, alt: 'Anillo', title: 'Anillo con labradorita', description: 'Anillos de plata regulables con acabado envejecido ' },
  { id: 9, src: anillo9, alt: 'Anillo', title: 'Anillo onix', description: 'Anillos de plata regulables con acabado envejecido ' },
  { id: 10, src: anillo10, alt: 'Anillo', title: 'Anillo labradorita', description: 'Anillos de plata regulables con acabado envejecido ' },
  { id: 11, src: anillo11, alt: 'Anillo', title: 'Anillo crisocola y labradorita', description: 'Anillos de plata regulables con acabado envejecido ' },
  { id: 12, src: anillo12, alt: 'Anillo', title: 'Anillo amatista con alambrismo', description: 'Anillos de plata regulables con acabado envejecido ' },
  { id: 13, src: anillo13, alt: 'Anillo', title: 'Anillo trenzado', description: 'Anillos de plata regulables con acabado envejecido ' },
  { id: 14, src: anillo14, alt: 'Anillo', title: 'Anillos varios', description: 'Anillos de plata regulables con acabado envejecido ' },
  { id: 15, src: anillo15, alt: 'Anillo', title: 'Anillo martillado', description: 'Anillos de plata regulables con acabado envejecido ' },
  { id: 16, src: anillo16, alt: 'Anillo', title: 'Anillo doble', description: 'Anillos de plata regulables con acabado envejecido ' },
  { id: 17, src: anillo17, alt: 'Anillo', title: 'Anillo onix', description: 'Anillos de plata regulables con acabado envejecido ' },
  { id: 18, src: anillo18, alt: 'Anillo', title: 'Anillo celtico', description: 'Anillos de plata regulables con acabado envejecido ' },
  { id: 19, src: anillo19, alt: 'Anillo', title: 'Anillo pirita', description: 'Anillos de plata regulables con acabado envejecido ' },
  { id: 20, src: anillo20, alt: 'Anillo', title: 'Anillo fundido', description: 'Anillos de plata regulables con acabado envejecido ' },
  { id: 21, src: anillo21, alt: 'Anillo', title: 'Anillo alambrismo', description: 'Anillos de plata regulables con acabado envejecido ' },
  { id: 22, src: anillo22, alt: 'Anillo', title: 'Anillo tejido', description: 'Anillos de plata regulables con acabado envejecido ' },
  { id: 22, src: anillo23, alt: 'Anillo', title: 'Anillo con resina', description: 'Anillos de plata regulables con acabado envejecido ' },
  { id: 22, src: anillo24, alt: 'Anillo', title: 'Anillo turmalina', description: 'Anillos de plata regulables con acabado envejecido ' },

];

const PlataAnillos = () => {
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
            Anillos de Plata – Arte en Orfebrería Artesanal
          </h1>
          <p className="text-sm md:text-lg text-center text-gray-700 mb-10 max-w-3xl mx-auto">
           Anillos únicos en plata 950, trabajados a mano con técnicas de joyería artesanal tipo orfebrería.
            Cada diseño es exclusivo, fusionando el arte del alambrismo con acabados envejecidos que evocan lo ancestral.
            Utilizamos piedras naturales, cuarzos, nácar y spondylus para realzar su carácter místico.
            
            
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

export default PlataAnillos;