import { useState } from 'react';
import SharedModal from '../../components/SharedModal/SharedModal';

import arete1 from '../../assets/images/plata-aretes/arete1.jpg';
import arete2 from '../../assets/images/plata-aretes/arete2.jpg';
import arete3 from '../../assets/images/plata-aretes/arete3.jpg';
import arete4 from '../../assets/images/plata-aretes/arete4.jpg';
import arete5 from '../../assets/images/plata-aretes/arete5.jpg';
import arete6 from '../../assets/images/plata-aretes/arete6.jpg';
import arete7 from '../../assets/images/plata-aretes/arete7.jpg';
import arete8 from '../../assets/images/plata-aretes/arete8.jpg';
import arete9 from '../../assets/images/plata-aretes/arete9.jpg';
import arete10 from '../../assets/images/plata-aretes/arete10.jpg';
import arete11 from '../../assets/images/plata-aretes/arete11.jpg';
import arete12 from '../../assets/images/plata-aretes/arete12.jpg';


const aretesData = [
  { id: 1, src: arete1, alt: 'A', title: 'Modelos de trepadores', description: 'Aretes en plata 950, tienen acabado envejecido con alambrismo y aplicaciones de piedras, muranos' },
  { id: 2, src: arete2, alt: 'A', title: 'Con acabado envejecido', description: 'Aretes en plata 950, tienen acabado envejecido con alambrismo y aplicaciones de piedras, muranos' },
  { id: 3, src: arete3, alt: 'A', title: 'Modelos étnicos', description: 'Aretes en plata 950, tienen acabado envejecido con alambrismo y aplicaciones de piedras, muranos' },
  { id: 4, src: arete4, alt: 'A', title: 'Flor envejecida', description: 'Aretes en plata 950, tienen acabado envejecido con alambrismo y aplicaciones de piedras, muranos' },
  { id: 5, src: arete5, alt: 'A', title: 'Trepador tipo espiga', description: 'Aretes en plata 950, tienen acabado envejecido con alambrismo y aplicaciones de piedras, muranos' },
  { id: 6, src: arete6, alt: 'A', title: 'Con flor colgantes', description: 'Aretes en plata 950, tienen acabado envejecido con alambrismo y aplicaciones de piedras, muranos' },
  { id: 7, src: arete7, alt: 'A', title: 'Trepador con pluma', description: 'Aretes en plata 950, tienen acabado envejecido con alambrismo y aplicaciones de piedras, muranos' },
  { id: 8, src: arete8, alt: 'A', title: 'Argollas étnicas', description: 'Aretes en plata 950, tienen acabado envejecido con alambrismo y aplicaciones de piedras, muranos' },
  { id: 9, src: arete9, alt: 'A', title: 'Argollas étnicas', description: 'Aretes en plata 950, tienen acabado envejecido con alambrismo y aplicaciones de piedras, muranos' },
  { id: 10, src: arete10, alt: 'A', title: 'Argollas étnicas', description: 'Aretes en plata 950, tienen acabado envejecido con alambrismo y aplicaciones de piedras, muranos' },
  { id: 11, src: arete11, alt: 'A', title: 'Trepador luna estrella', description: 'Aretes en plata 950, tienen acabado envejecido con alambrismo y aplicaciones de piedras, muranos' },
  { id: 12, src: arete12, alt: 'A', title: 'Trepador hoja y piedras', description: 'Aretes en plata 950, tienen acabado envejecido con alambrismo y aplicaciones de piedras, muranos' },

];

const PlataAretes = () => {
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
            Aretes de Plata – Arte en Orfebrería Artesanal
          </h1>
          <p className="text-sm md:text-lg text-center text-gray-700 mb-10 max-w-3xl mx-auto">
           Aretes exclusivos hechos a mano en plata 950, con técnicas de orfebrería y diseño contemporáneo.
            La combinación de alambrismo fino y acabados envejecidos les otorga identidad única.
            Trabajamos con piedras naturales, cuarzos, nácar y spondylus en composiciones armoniosas.
            
      
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

export default PlataAretes;