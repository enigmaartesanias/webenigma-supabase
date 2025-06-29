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


const aretesData = [
  { id: 1, src: arete1, alt: 'Anillo con cuarzo rojo', title: '001', description: 'A pedido' },
  { id: 2, src: arete2, alt: 'Anillo con amatista', title: '002', description: 'A pedido' },
  { id: 3, src: arete3, alt: 'Anillo con coral', title: '003', description: 'A pedido' },
  { id: 4, src: arete4, alt: 'Anillo con piedra turquesa', title: '004', description: 'A pedido' },
  { id: 5, src: arete5, alt: 'Anillo de diseño tribal', title: '005', description: 'A pedido' },
  { id: 6, src: arete6, alt: 'Anillo con piedra verde', title: '006', description: 'A pedido' },
  { id: 7, src: arete7, alt: 'Anillo con piedra verde', title: '007', description: 'A pedido' },
  { id: 8, src: arete8, alt: 'Anillo con piedra verde', title: '008', description: 'A pedido' },
  { id: 9, src: arete9, alt: 'Anillo con piedra verde', title: '009', description: 'A pedido' },
  { id: 10, src: arete10, alt: 'Anillo con piedra verde', title: '010', description: 'A pedido' },


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
            Cada par está diseñado para resaltar la elegancia y personalidad de quien los lleva.
            La plata se convierte en líneas suaves y texturas que capturan la luz con sutileza.
            Inspirados en lo sagrado y lo cotidiano, conectan tradición y estilo.
            Joyas livianas, versátiles y llenas de intención, forjadas con manos expertas.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {aretesData.map((arete, idx) => (
              <div
                key={arete.id}
                className="group relative cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                onClick={() => openModal(arete, idx)}
              >
                <img
                  src={arete.src}
                  alt={arete.alt}
                  className="w-full h-48 md:h-64 object-cover object-center transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white text-center">
                  <h3 className="text-md font-medium">{arete.title}</h3>
                  <p className="hidden text-sm text-gray-200">{arete.description}</p>
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