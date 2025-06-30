import React, { useState } from 'react';
import SharedModal from '../../components/SharedModal/SharedModal';

import per1 from '../../assets/images/personalizados/per1.jpg';
import per2 from '../../assets/images/personalizados/per2.jpg';
import per3 from '../../assets/images/personalizados/per3.jpg';
import per4 from '../../assets/images/personalizados/per4.jpg';
import per5 from '../../assets/images/personalizados/per5.jpg';
import per6 from '../../assets/images/personalizados/per6.jpg';
import per7 from '../../assets/images/personalizados/per7.jpg';

const personalizadosData = [
  { id: 1, src: per1, alt: 'Anillo con cuarzo rojo', title: '001', description: 'A pedido' },
  { id: 2, src: per2, alt: 'Anillo con amatista', title: '002', description: 'A pedido' },
  { id: 3, src: per3, alt: 'Anillo con coral', title: '003', description: 'A pedido' },
  { id: 4, src: per4, alt: 'Anillo con piedra turquesa', title: '004', description: 'A pedido' },
  { id: 5, src: per5, alt: 'Anillo de diseño tribal', title: '005', description: 'A pedido' },
  { id: 6, src: per6, alt: 'Anillo con piedra verde', title: '006', description: 'A pedido' },
  { id: 7, src: per7, alt: 'Anillo con piedra verde', title: '007', description: 'A pedido' },
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