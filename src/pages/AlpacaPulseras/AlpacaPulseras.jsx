import { useState } from 'react';
import SharedModal from '../../components/SharedModal/SharedModal';

import pulsera1 from '../../assets/images/alpaca-pulseras/pulsera1.jpg';
import pulsera2 from '../../assets/images/alpaca-pulseras/pulsera2.jpg';
import pulsera3 from '../../assets/images/alpaca-pulseras/pulsera3.jpg';
import pulsera4 from '../../assets/images/alpaca-pulseras/pulsera4.jpg';
import pulsera5 from '../../assets/images/alpaca-pulseras/pulsera5.jpg';
import pulsera6 from '../../assets/images/alpaca-pulseras/pulsera6.jpg';
import pulsera7 from '../../assets/images/alpaca-pulseras/pulsera7.jpg';
import pulsera8 from '../../assets/images/alpaca-pulseras/pulsera8.jpg';
import pulsera9 from '../../assets/images/alpaca-pulseras/pulsera9.jpg';
import pulsera10 from '../../assets/images/alpaca-pulseras/pulsera10.jpg';
import pulsera11 from '../../assets/images/alpaca-pulseras/pulsera11.jpg';



const pulserasData = [
  { id: 1, src: pulsera1, alt: 'Anillo', title: 'Modelo en alambrismo', description: 'A pedido' },
  { id: 2, src: pulsera2, alt: 'Anillo', title: 'Modelo brazalete clásico', description: 'A pedido' },
  { id: 3, src: pulsera3, alt: 'Anillo', title: 'Brazalete martillado spondylus', description: 'A pedido' },
  { id: 4, src: pulsera4, alt: 'Anillo', title: 'Brazalete placa abalon', description: 'A pedido' },
  { id: 5, src: pulsera5, alt: 'Anillo', title: 'Brazalete clásico mediano', description: 'A pedido' },
  { id: 6, src: pulsera6, alt: 'Anillo', title: 'Ágastas con cuero', description: 'A pedido' },
  { id: 7, src: pulsera7, alt: 'Anillo', title: 'Brazalete en alambrismo gota', description: 'A pedido' },
  { id: 8, src: pulsera8, alt: 'Anillo', title: 'Turquesa wrap', description: 'A pedido' },
  { id: 9, src: pulsera9, alt: 'Anillo', title: 'Amatista martillado', description: 'A pedido' },
  { id: 10, src: pulsera10, alt: 'Anillo', title: 'Trenzado envejeciso', description: 'A pedido' },
  { id: 11, src: pulsera11, alt: 'Anillo', title: 'Modelo astrid turquesa', description: 'A pedido' },
  


];

const AlpacaPulseras = () => {
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
            Pulseras de Alpaca – Arte en Orfebrería Artesanal
          </h1>
          <p className="text-sm md:text-lg text-center text-gray-700 mb-10 max-w-3xl mx-auto">
           Pulseras forjadas a mano en alpaca, con un brillo natural y alta resistencia al uso diario.
            Combinamos soldadura y alambrismo para lograr estructuras sólidas y artísticas.
            Incorporamos piedras naturales, cuarzos, nácar y spondylus en composiciones únicas.
            El acabado envejecido en algunas piezas les da un aire atemporal y auténtico.
          
          </p>
           <div className="grid grid-cols-2 md:grid-cols-4 gap-2 gap-y-4 mb-6">
  {pulserasData.map((pulsera, idx) => (
    <div
      key={pulsera.id}
      className="group relative cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col"
      onClick={() => openModal(pulsera, idx)}
    >
      <img
        src={pulsera.src}
        alt={pulsera.alt}
        className="w-full h-48 md:h-64 object-cover object-center transform group-hover:scale-105 transition-transform duration-300"
      />
      {/* Título debajo de la imagen, no bold, con sombra y fondo blanco */}
      <div className="bg-white shadow-md rounded-b-lg px-2 py-2 text-center">
        <h3 className="text-base font-normal text-gray-800">{pulsera.title}</h3>
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
          total={pulserasData.length}
        />
      )}
    </>
  );
};

export default AlpacaPulseras;