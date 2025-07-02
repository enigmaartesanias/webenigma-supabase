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
import pulsera12 from '../../assets/images/alpaca-pulseras/pulsera12.jpg';
import pulsera13 from '../../assets/images/alpaca-pulseras/pulsera13.jpg';
import pulsera14 from '../../assets/images/alpaca-pulseras/pulsera14.jpg';
import pulsera15 from '../../assets/images/alpaca-pulseras/pulsera15.jpg';
import pulsera16 from '../../assets/images/alpaca-pulseras/pulsera16.jpg';
import pulsera17 from '../../assets/images/alpaca-pulseras/pulsera17.jpg';
import pulsera18 from '../../assets/images/alpaca-pulseras/pulsera18.jpg';
import pulsera19 from '../../assets/images/alpaca-pulseras/pulsera19.jpg';
import pulsera20 from '../../assets/images/alpaca-pulseras/pulsera20.jpg';
import pulsera21 from '../../assets/images/alpaca-pulseras/pulsera21.jpg';




const pulserasData = [
  { id: 1, src: pulsera1, alt: 'Anillo', title: 'Modelo en alambrismo', description: 'Pulseras de alpaca, están soldadas y mucho alambrismo con diferentes calibres , técnicas de martillado y tejidos' },
  { id: 2, src: pulsera2, alt: 'Anillo', title: 'Modelo brazalete clásico', description: 'Pulseras de alpaca, están soldadas y mucho alambrismo con diferentes calibres , técnicas de martillado y tejidos' },
  { id: 3, src: pulsera3, alt: 'Anillo', title: 'Brazalete martillado spondylus', description: 'Pulseras de alpaca, están soldadas y mucho alambrismo con diferentes calibres , técnicas de martillado y tejidos' },
  { id: 4, src: pulsera4, alt: 'Anillo', title: 'Brazalete martillado placa abalon', description: 'Pulseras de alpaca, están soldadas y mucho alambrismo con diferentes calibres , técnicas de martillado y tejidos' },
  { id: 5, src: pulsera5, alt: 'Anillo', title: 'Brazalete clásico mediano', description: 'Pulseras de alpaca, están soldadas y mucho alambrismo con diferentes calibres , técnicas de martillado y tejidos' },
  { id: 6, src: pulsera6, alt: 'Anillo', title: 'Ágatas de colores con cuero', description: 'Pulseras de alpaca, están soldadas y mucho alambrismo con diferentes calibres , técnicas de martillado y tejidos' },
  { id: 7, src: pulsera7, alt: 'Anillo', title: 'Brazalete en alambrismo gota', description: 'Pulseras de alpaca, están soldadas y mucho alambrismo con diferentes calibres , técnicas de martillado y tejidos' },
  { id: 8, src: pulsera8, alt: 'Anillo', title: 'Turquesa brazalete wrap', description: 'Pulseras de alpaca, están soldadas y mucho alambrismo con diferentes calibres , técnicas de martillado y tejidos' },
  { id: 9, src: pulsera9, alt: 'Anillo', title: 'Amatista martillado', description: 'Pulseras de alpaca, están soldadas y mucho alambrismo con diferentes calibres , técnicas de martillado y tejidos' },
  { id: 10, src: pulsera10, alt: 'Anillo', title: 'Trenzado envejecido', description: 'Pulseras de alpaca, están soldadas y mucho alambrismo con diferentes calibres , técnicas de martillado y tejidos' },
  { id: 11, src: pulsera11, alt: 'Anillo', title: 'Modelo astrid turquesa', description: 'Pulseras de alpaca, están soldadas y mucho alambrismo con diferentes calibres , técnicas de martillado y tejidos' },
  { id: 12, src: pulsera12, alt: 'Anillo', title: 'Modelo labradorita', description: 'Pulseras de alpaca, están soldadas y mucho alambrismo con diferentes calibres , técnicas de martillado y tejidos' },
  { id: 13, src: pulsera13, alt: 'Anillo', title: 'Modelo alambrismo', description: 'Pulseras de alpaca, están soldadas y mucho alambrismo con diferentes calibres , técnicas de martillado y tejidos' },
  { id: 14, src: pulsera14, alt: 'Anillo', title: 'Modelo alambrismo', description: 'Pulseras de alpaca, están soldadas y mucho alambrismo con diferentes calibres , técnicas de martillado y tejidos' },
  { id: 15, src: pulsera15, alt: 'Anillo', title: 'Modelo alambrismo', description: 'Pulseras de alpaca, están soldadas y mucho alambrismo con diferentes calibres , técnicas de martillado y tejidos' },
  { id: 16, src: pulsera16, alt: 'Anillo', title: 'Pulsera con anillo', description: 'Pulseras de alpaca, están soldadas y mucho alambrismo con diferentes calibres , técnicas de martillado y tejidos' },
  { id: 17, src: pulsera17, alt: 'Anillo', title: 'Brazalete con piedra', description: 'Pulseras de alpaca, están soldadas y mucho alambrismo con diferentes calibres , técnicas de martillado y tejidos' },
  { id: 18, src: pulsera18, alt: 'Anillo', title: 'Brazaletes con bronce', description: 'Pulseras de alpaca, están soldadas y mucho alambrismo con diferentes calibres , técnicas de martillado y tejidos' },
  { id: 19, src: pulsera19, alt: 'Anillo', title: 'Modelo calado', description: 'Pulseras de alpaca, están soldadas y mucho alambrismo con diferentes calibres , técnicas de martillado y tejidos' },
  { id: 20, src: pulsera20, alt: 'Anillo', title: 'Brazalete ccon cruz', description: 'Pulseras de alpaca, están soldadas y mucho alambrismo con diferentes calibres , técnicas de martillado y tejidos' },
  { id: 21, src: pulsera21, alt: 'Anillo', title: 'Brazalete hojas envejecido', description: 'Pulseras de alpaca, están soldadas y mucho alambrismo con diferentes calibres , técnicas de martillado y tejidos' },



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