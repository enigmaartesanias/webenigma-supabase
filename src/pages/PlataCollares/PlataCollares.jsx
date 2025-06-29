import { useState } from 'react';
import SharedModal from '../../components/SharedModal/SharedModal';

import collar1 from '../../assets/images/plata-collares/collar1.jpg';
import collar2 from '../../assets/images/plata-collares/collar2.jpg';
import collar3 from '../../assets/images/plata-collares/collar3.jpg';
import collar4 from '../../assets/images/plata-collares/collar4.jpg';
import collar5 from '../../assets/images/plata-collares/collar5.jpg';
import collar6 from '../../assets/images/plata-collares/collar6.jpg';


const collaresData = [
  { id: 1, src: collar1, alt: 'Collar 1', title: '001', description: 'A pedido' },
  { id: 2, src: collar2, alt: 'Collar 2', title: '002', description: 'A pedido' },
  { id: 3, src: collar3, alt: 'Collar 3', title: '003', description: 'A pedido' },
  { id: 4, src: collar4, alt: 'Collar 4', title: '004', description: 'A pedido' },
  { id: 5, src: collar5, alt: 'Collar 5', title: '005', description: 'A pedido' },
  { id: 6, src: collar6, alt: 'Collar 6', title: '006', description: 'A pedido' },

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
            Algunos dijes poseen acabados envejecidos que revelan una belleza atemporal.
            La plata resalta como un hilo conductor de energía y sofisticación.
            Inspirados en lo espiritual y lo natural, cada pieza guarda un mensaje.
            Son amuletos modernos, cargados de historia y elegancia artesanal.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {collaresData.map((collar, idx) => (
              <div
                key={collar.id}
                className="group relative cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                onClick={() => openModal(collar, idx)}
              >
                <img
                  src={collar.src}
                  alt={collar.alt}
                  className="w-full h-48 md:h-64 object-cover object-center transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white text-center">
                  <h3 className="text-md font-medium">{collar.title}</h3>
                  <p className="hidden text-sm text-gray-200">{collar.description}</p>
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