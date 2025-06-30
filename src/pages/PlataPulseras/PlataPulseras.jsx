import { useState } from 'react';
import SharedModal from '../../components/SharedModal/SharedModal';

import pulsera1 from '../../assets/images/plata-pulseras/pulsera1.jpg';
import pulsera2 from '../../assets/images/plata-pulseras/pulsera2.jpg';
import pulsera3 from '../../assets/images/plata-pulseras/pulsera3.jpg';
import pulsera4 from '../../assets/images/plata-pulseras/pulsera4.jpg';
import pulsera5 from '../../assets/images/plata-pulseras/pulsera5.jpg';
import pulsera6 from '../../assets/images/plata-pulseras/pulsera6.jpg';
import pulsera7 from '../../assets/images/plata-pulseras/pulsera7.jpg';
import pulsera8 from '../../assets/images/plata-pulseras/pulsera8.jpg';
import pulsera9 from '../../assets/images/plata-pulseras/pulsera9.jpg';
import pulsera10 from '../../assets/images/plata-pulseras/pulsera10.jpg';
import pulsera11 from '../../assets/images/plata-pulseras/pulsera11.jpg';
import pulsera12 from '../../assets/images/plata-pulseras/pulsera12.jpg';
import pulsera13 from '../../assets/images/plata-pulseras/pulsera13.jpg';
import pulsera14 from '../../assets/images/plata-pulseras/pulsera14.jpg';
import pulsera15 from '../../assets/images/plata-pulseras/pulsera15.jpg';
import pulsera16 from '../../assets/images/plata-pulseras/pulsera16.jpg';


const pulserasData = [
  { id: 1, src: pulsera1, alt: 'Pulsera 1', title: 'Colibrí tejida', description: 'Pulseras de plata 950, una combinación de tejidos y acabado envejecido, modelos originales' },
  { id: 2, src: pulsera2, alt: 'Pulsera 2', title: 'Nacar con perlas de río', description: 'Pulseras de plata 950, una combinación de tejidos y acabado envejecido, modelos originales' },
  { id: 3, src: pulsera3, alt: 'Pulsera 3', title: 'Crisocola tejida', description: 'Pulseras de plata 950, una combinación de tejidos y acabado envejecido, modelos originales' },
  { id: 4, src: pulsera4, alt: 'Pulsera 4', title: 'Spondylus tejida', description: 'Pulseras de plata 950, una combinación de tejidos y acabado envejecido, modelos originales' },
  { id: 5, src: pulsera5, alt: 'Pulsera 5', title: 'Spondylus con hilo encerado', description: 'Pulseras de plata 950, una combinación de tejidos y acabado envejecido, modelos originales' },
  { id: 6, src: pulsera6, alt: 'Pulsera 6', title: 'Onix con hilo encerado', description: 'Pulseras de plata 950, una combinación de tejidos y acabado envejecido, modelos originales' },
  { id: 7, src: pulsera7, alt: 'Pulsera 7', title: 'Lapislázuli grap', description: 'Pulseras de plata 950, una combinación de tejidos y acabado envejecido, modelos originales' },
  { id: 8, src: pulsera8, alt: 'Pulsera 8', title: 'Crisocola grap', description: 'Pulseras de plata 950, una combinación de tejidos y acabado envejecido, modelos originales' },
  { id: 9, src: pulsera9, alt: 'Pulsera 9', title: 'Personalizada', description: 'Pulseras de plata 950, una combinación de tejidos y acabado envejecido, modelos originales' },
  { id: 10, src: pulsera10, alt: 'Pulsera 10', title: 'Aldea de la hoja', description: 'Pulseras de plata 950, una combinación de tejidos y acabado envejecido, modelos originales' },
  { id: 11, src: pulsera11, alt: 'Pulsera 11', title: 'Ojo de gato azul y cuero', description: 'Pulseras de plata 950, una combinación de tejidos y acabado envejecido, modelos originales' },
  { id: 12, src: pulsera12, alt: 'Pulsera 12', title: 'Amazonita con aros', description: 'Pulseras de plata 950, una combinación de tejidos y acabado envejecido, modelos originales' },
  { id: 13, src: pulsera13, alt: 'Pulsera 13', title: 'Cuarzo cristal envejecido', description: 'Pulseras de plata 950, una combinación de tejidos y acabado envejecido, modelos originales' },
  { id: 14, src: pulsera14, alt: 'Pulsera 14', title: 'Placa en cuero', description: 'Pulseras de plata 950, una combinación de tejidos y acabado envejecido, modelos originales' },
  { id: 15, src: pulsera15, alt: 'Pulsera 15', title: 'Onix tejida hilo encerado', description: 'Pulseras de plata 950, una combinación de tejidos y acabado envejecido, modelos originales' },
  { id: 16, src: pulsera16, alt: 'Pulsera 16', title: 'Spondylus tejido con hilo encerado', description: 'Pulseras de plata 950, una combinación de tejidos y acabado envejecido, modelos originales' },
 
];

const PlataPulseras = () => {
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
            Pulseras de Plata – Arte en Orfebrería Artesanal
          </h1>
          <p className="text-sm md:text-lg text-center text-gray-700 mb-10 max-w-3xl mx-auto">
           Pulseras elaboradas artesanalmente en plata 950, combinando técnicas de orfebrería tradicional.
            Cada pieza es única, con detalles en alambrismo que aportan estructura y movimiento.
            Las piedras naturales, cuarzos y spondylus otorgan color, energía y textura a cada diseño.
            Algunas tienen un acabado envejecido que realza su esencia orgánica y atemporal.
            
          
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

export default PlataPulseras;