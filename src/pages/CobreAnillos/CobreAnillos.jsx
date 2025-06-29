import { useState } from 'react';
import SharedModal from '../../components/SharedModal/SharedModal';

import anillo1 from '../../assets/images/cobre-anillos/anillo1.jpg';
import anillo2 from '../../assets/images/cobre-anillos/anillo2.jpg';
import anillo3 from '../../assets/images/cobre-anillos/anillo3.jpg';
import anillo4 from '../../assets/images/cobre-anillos/anillo4.jpg';
import anillo5 from '../../assets/images/cobre-anillos/anillo5.jpg';
import anillo6 from '../../assets/images/cobre-anillos/anillo6.jpg';
import anillo7 from '../../assets/images/cobre-anillos/anillo7.jpg';
import anillo8 from '../../assets/images/cobre-anillos/anillo8.jpg';
import anillo9 from '../../assets/images/cobre-anillos/anillo9.jpg';


const anillosData = [
  { id: 1, src: anillo1, alt: 'Anillo', title: 'Wrap sodalita', description: 'A pedido' },
  { id: 2, src: anillo2, alt: 'Anillo', title: 'Wrap amatista natural', description: 'A pedido' },
  { id: 3, src: anillo3, alt: 'Anillo', title: 'Wrap ávalon', description: 'A pedido' },
  { id: 4, src: anillo4, alt: 'Anillo', title: 'Labradorita clásico', description: 'A pedido' },
  { id: 5, src: anillo5, alt: 'Anillo', title: 'Crisocola serpiente', description: 'A pedido' },
  { id: 6, src: anillo6, alt: 'Anillo', title: 'Wrap ónix', description: 'A pedido' },
  { id: 7, src: anillo7, alt: 'Anillo', title: 'Wrap crisocola', description: 'A pedido' },
  { id: 8, src: anillo8, alt: 'Anillo', title: 'Spondylus serpiente', description: 'A pedido' },
  { id: 9, src: anillo9, alt: 'Anillo', title: 'Wrap ojo de tigre', description: 'A pedido' },

];

const CobreAnillos = () => {
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
            Anillos de Cobre – Arte en Orfebrería Artesanal
          </h1>
          <p className="text-sm md:text-lg text-center text-gray-700 mb-10 max-w-3xl mx-auto">
           Anillos elaborados en cobre, un metal noble con su distintivo tono anaranjado que transmite calidez.
            Gracias a su maleabilidad, logramos diseños orgánicos y formas únicas hechas completamente a mano.
            Cada anillo combina técnicas de soldadura y alambrismo para lograr piezas sólidas y detalladas.
            Incorporamos piedras naturales, cuarzos, resinas y spondylus que aportan color y textura.
            El acabado envejecido realza su carácter rústico y su belleza atemporal.
            Son joyas con personalidad, pensadas para quienes buscan estilo auténtico.
            Diseños únicos que unen lo ancestral con la creatividad moderna.


          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {anillosData.map((anillo, idx) => (
              <div
                key={anillo.id}
                className="group relative cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                onClick={() => openModal(anillo, idx)}
              >
                <img
                  src={anillo.src}
                  alt={anillo.alt}
                  className="w-full h-48 md:h-64 object-cover object-center transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white text-center">
                  <h3 className="text-md font-medium">{anillo.title}</h3>
                  <p className="hidden text-sm text-gray-200">{anillo.description}</p>
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

export default CobreAnillos;