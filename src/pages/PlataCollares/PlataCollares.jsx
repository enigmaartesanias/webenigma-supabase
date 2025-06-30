import { useState } from 'react';
import SharedModal from '../../components/SharedModal/SharedModal';

import collar1 from '../../assets/images/plata-collares/collar1.jpg';
import collar2 from '../../assets/images/plata-collares/collar2.jpg';
import collar3 from '../../assets/images/plata-collares/collar3.jpg';
import collar4 from '../../assets/images/plata-collares/collar4.jpg';
import collar5 from '../../assets/images/plata-collares/collar5.jpg';
import collar6 from '../../assets/images/plata-collares/collar6.jpg';


const collaresData = [
  { id: 1, src: collar1, alt: 'Collar 1', title: 'Sol en alambrismo', description: 'Dijes y collares en plata 950, diseños únicos en joyeria artesanal, aplicaciones de piedras y acabados envejecido' },
  { id: 2, src: collar2, alt: 'Collar 2', title: 'Dije con spondylus', description: 'Dijes y collares en plata 950, diseños únicos en joyeria artesanal, aplicaciones de piedras y acabados envejecido' },
  { id: 3, src: collar3, alt: 'Collar 3', title: 'Dije con ojo de gato', description: 'Dijes y collares en plata 950, diseños únicos en joyeria artesanal, aplicaciones de piedras y acabados envejecido' },
  { id: 4, src: collar4, alt: 'Collar 4', title: 'Dije con ojo de gato', description: 'Dijes y collares en plata 950, diseños únicos en joyeria artesanal, aplicaciones de piedras y acabados envejecido' },
  { id: 5, src: collar5, alt: 'Collar 5', title: 'Sol en alambrismo', description: 'Dijes y collares en plata 950, diseños únicos en joyeria artesanal, aplicaciones de piedras y acabados envejecido' },
  { id: 6, src: collar6, alt: 'Collar 6', title: 'Dije cuarzo crital', description: 'Dijes y collares en plata 950, diseños únicos en joyeria artesanal, aplicaciones de piedras y acabados envejecido' },

];

const PlataCollares = () => {
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
      <main className="bg-white py-8 md:py-12 pt-16">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
            <h1 className="mt-6 md:mt-0 text-1xl md:text-3xl lg:text-3xl font-semibold text-center text-gray-900 mb-4">
            Collares de Plata – Arte en Orfebrería Artesanal
          </h1>
          <p className="text-sm md:text-lg text-center text-gray-700 mb-10 max-w-3xl mx-auto">
          Collares y dijes en plata 950, forjados a mano con técnicas ancestrales de orfebrería artesanal.
            Cada diseño es irrepetible, con estructuras en alambrismo que abrazan piedras únicas.
            Incorporamos cuarzos, spondylus, nácar y elementos naturales que aportan simbolismo y color.
        
          
          </p>
           <div className="grid grid-cols-2 md:grid-cols-4 gap-2 gap-y-4 mb-6">
  {collaresData.map((collar, idx) => (
    <div
      key={collar.id}
      className="group relative cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col"
      onClick={() => openModal(collar, idx)}
    >
      <img
        src={collar.src}
        alt={collar.alt}
        className="w-full h-48 md:h-64 object-cover object-center transform group-hover:scale-105 transition-transform duration-300"
      />
      {/* Título debajo de la imagen, no bold, con sombra y fondo blanco */}
      <div className="bg-white shadow-md rounded-b-lg px-2 py-2 text-center">
        <h3 className="text-base font-normal text-gray-800">{collar.title}</h3>
      </div>
    </div>
  ))}
</div>

        </div>
      </main>
      {modalOpen && selectedImage && (
        <SharedModal
          isOpen={modalOpen}
          onClose={closeModal}
          image={selectedImage}
          currentIndex={currentIndex}
          total={collaresData.length}
        />
      )}
    </>
  );
};

export default PlataCollares;