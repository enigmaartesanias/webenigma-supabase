import { useState } from 'react';
import SharedModal from '../../components/SharedModal/SharedModal';

import arete1 from '../../assets/images/cobre-aretes/arete1.jpg';
import arete2 from '../../assets/images/cobre-aretes/arete2.jpg';
import arete3 from '../../assets/images/cobre-aretes/arete3.jpg';



const aretesData = [
  { id: 1, src: arete1, alt: 'A', title: 'Aretes étnicos bronce', description: 'Aretes estilo ansestral hecho con cobre y bronce , tambien con aplicaciones de alpaca y cuarzos ó nacar, acabado envejecido' },
  { id: 2, src: arete2, alt: 'A', title: 'Aretes étnicos cuarzo', description: 'Aretes estilo ansestral hecho con cobre y bronce , tambien con aplicaciones de alpaca y cuarzos ó nacar, acabado envejecido' },
  { id: 3, src: arete3, alt: 'A', title: 'Aretes étnicos nácar', description: 'Aretes estilo ansestral hecho con cobre y bronce , tambien con aplicaciones de alpaca y cuarzos ó nacar, acabado envejecido' },
 

];

const CobreAretes = () => {
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
            Aretes de Cobre/Bronce – Arte en Orfebrería Artesanal
          </h1>
          <p className="text-sm md:text-lg text-center text-gray-700 mb-10 max-w-3xl mx-auto">
           Aretes forjados en cobre, con ese tono anaranjado natural que aporta calidez y carácter.
            Cada pieza es trabajada a mano, uniendo alambrismo y soldadura con acabados únicos.
            Integramos aplicaciones de bronce y alpaca que aportan contraste, brillo y fuerza visual.
            Decoramos con piedras naturales, resinas, cuarzos, spondylus y nácar, en combinaciones exclusivas.
        
          </p>
         <div className="grid grid-cols-2 md:grid-cols-4 gap-2 gap-y-4 mb-6">
  {aretesData.map((arete, idx) => (
    <div
      key={arete.id}
      className="group relative cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col"
      onClick={() => openModal(arete, idx)}
    >
      <img
        src={arete.src}
        alt={arete.alt}
        className="w-full h-48 md:h-64 object-cover object-center transform group-hover:scale-105 transition-transform duration-300"
      />
      {/* Título debajo de la imagen, no bold, con sombra y fondo blanco */}
      <div className="bg-white shadow-md rounded-b-lg px-2 py-2 text-center">
        <h3 className="text-base font-normal text-gray-800">{arete.title}</h3>
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
          total={aretesData.length}
        />
      )}
    </>
  );
};

export default CobreAretes;