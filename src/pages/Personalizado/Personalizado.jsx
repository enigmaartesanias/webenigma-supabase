import React, { useState } from 'react';
import SharedModal from '../../components/SharedModal/SharedModal';

import per1 from '../../assets/images/personalizados/per1.jpg';
import per2 from '../../assets/images/personalizados/per2.jpg';
import per3 from '../../assets/images/personalizados/per3.jpg';
import per4 from '../../assets/images/personalizados/per4.jpg';
import per5 from '../../assets/images/personalizados/per5.jpg';
import per6 from '../../assets/images/personalizados/per6.jpg';
import per7 from '../../assets/images/personalizados/per7.jpg';
import per8 from '../../assets/images/personalizados/per8.jpg';
import per9 from '../../assets/images/personalizados/per9.jpg';
import per10 from '../../assets/images/personalizados/per10.jpg';
import per11 from '../../assets/images/personalizados/per11.jpg';
import per12 from '../../assets/images/personalizados/per12.jpg';
import per13 from '../../assets/images/personalizados/per13.jpg';
import per14 from '../../assets/images/personalizados/per14.jpg';
import per15 from '../../assets/images/personalizados/per15.jpg';


const personalizadosData = [
  { id: 1, src: per1, alt: 'A', title: 'Dije sol y luna', description: 'Dijes personalizados de alpaca con piedras de cuarzo' },
  { id: 2, src: per2, alt: 'A', title: 'Pulsera corazón', description: 'Pulsera con iniciales ,en cobre con bronce' },
  { id: 3, src: per3, alt: 'A', title: 'Pulsera Tejida con nombres', description: 'Pulsera en cobre con bronce tejidas con piedras' },
  { id: 4, src: per4, alt: 'A', title: 'Pulseras destilo brazalete', description: 'Pulsera con nombre en alpaca estilo brazalete' },
  { id: 5, src: per5, alt: 'A', title: 'Pulsera Tejida con nombres', description: 'Pulsera en cobre con bronce tejidas con piedras' },
  { id: 6, src: per6, alt: 'A', title: 'Pulsera corazón cobre y bronce', description: 'Pulsera con iniciales ,en cobre con bronce' },
  { id: 7, src: per7, alt: 'A', title: 'Pulsera de cobre con flor y bronce', description: 'Pulsera de cobre con bronce con aplicación de flor y nombre' },
  { id: 8, src: per8, alt: 'A', title: 'Pulsera de cobre con flor y bronce', description: 'Pulsera de cobre con bronce con aplicación de flor y nombre' },
  { id: 9, src: per9, alt: 'A', title: 'Pulsera de cobre con flor y bronce', description: 'Pulsera de cobre con bronce con aplicación de flor y nombre' },
  { id: 10, src: per10, alt: 'A', title: 'Personalizado', description: 'Personalizado' },
  { id: 11, src: per11, alt: 'A', title: 'Personalizado', description: 'Personalizado' },
  { id: 12, src: per12, alt: 'A', title: 'Personalizado', description: 'Personalizado' },
  { id: 13, src: per13, alt: 'A', title: 'Personalizado', description: 'Personalizado' },
  { id: 14, src: per14, alt: 'A', title: 'Personalizado', description: 'Personalizado' },
  { id: 15, src: per15, alt: 'A', title: 'Personalizado', description: 'Personalizado' },
];

const Personalizado = () => {
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
            Personalizados – Arte en Orfebrería Artesanal
          </h1>
          <p className="text-sm md:text-lg text-center text-gray-700 mb-10 max-w-3xl mx-auto">
            Diseñamos dijes, pulseras y anillos únicos en plata, cobre y alpaca.
            Cada pieza puede personalizarse con nombres, fechas o iniciales.
            Usamos piedras naturales, cuero tejido y resinas con acabados artesanales.
            Son joyas con historia, ideales para regalar a esa persona especial, en pareja o entre amigos.
           


          </p>
   <div className="grid grid-cols-2 md:grid-cols-4 gap-2 gap-y-4 mb-6">
  {personalizadosData.map((personalizado, idx) => (
    <div
      key={ personalizado.id}
      className="group relative cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col"
      onClick={() => openModal(personalizado, idx)}
    >
      <img
        src={ personalizado.src}
        alt={ personalizado.alt}
        className="w-full h-48 md:h-64 object-cover object-center transform group-hover:scale-105 transition-transform duration-300"
      />
      {/* Título debajo de la imagen, no bold, con sombra y fondo blanco */}
      <div className="bg-white shadow-md rounded-b-lg px-2 py-2 text-center">
        <h3 className="text-base font-normal text-gray-800">{ personalizado.title}</h3>
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
          total={personalizadosData.length}
        />
      )}
    </>
  );
};

export default Personalizado;