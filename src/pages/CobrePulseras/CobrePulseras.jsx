import { useState } from 'react';
import SharedModal from '../../components/SharedModal/SharedModal';

import pulsera1 from '../../assets/images/cobre-pulseras/pulsera1.jpg';
import pulsera2 from '../../assets/images/cobre-pulseras/pulsera2.jpg';
import pulsera3 from '../../assets/images/cobre-pulseras/pulsera3.jpg';
import pulsera4 from '../../assets/images/cobre-pulseras/pulsera4.jpg';
import pulsera5 from '../../assets/images/cobre-pulseras/pulsera5.jpg';
import pulsera6 from '../../assets/images/cobre-pulseras/pulsera6.jpg';
import pulsera7 from '../../assets/images/cobre-pulseras/pulsera7.jpg';
import pulsera8 from '../../assets/images/cobre-pulseras/pulsera8.jpg';
import pulsera9 from '../../assets/images/cobre-pulseras/pulsera9.jpg';
import pulsera10 from '../../assets/images/cobre-pulseras/pulsera10.jpg';
import pulsera11 from '../../assets/images/cobre-pulseras/pulsera11.jpg';
import pulsera12 from '../../assets/images/cobre-pulseras/pulsera12.jpg';
import pulsera13 from '../../assets/images/cobre-pulseras/pulsera13.jpg';
import pulsera14 from '../../assets/images/cobre-pulseras/pulsera14.jpg';
import pulsera15 from '../../assets/images/cobre-pulseras/pulsera15.jpg';
import pulsera16 from '../../assets/images/cobre-pulseras/pulsera16.jpg';
import pulsera17 from '../../assets/images/cobre-pulseras/pulsera17.jpg';
import pulsera18 from '../../assets/images/cobre-pulseras/pulsera18.jpg';
import pulsera19 from '../../assets/images/cobre-pulseras/pulsera19.jpg';
import pulsera20 from '../../assets/images/cobre-pulseras/pulsera20.jpg';
import pulsera21 from '../../assets/images/cobre-pulseras/pulsera21.jpg';
import pulsera22 from '../../assets/images/cobre-pulseras/pulsera22.jpg';
import pulsera23 from '../../assets/images/cobre-pulseras/pulsera23.jpg';


const pulserasData = [
  { id: 1, src: pulsera1, alt: 'Anillo con cuarzo rojo', title: 'Wrap tejida piedra con luna', description: 'Pulsera de cobre, varias técnicas de acabados , con tejidos, martillados y otras aplicaciones, tienen acabado envejecido' },
  { id: 2, src: pulsera2, alt: 'Anillo con amatista', title: 'wrap reconstituida turquesa', description: 'Pulsera de cobre, varias técnicas de acabados , con tejidos, martillados y otras aplicaciones, tienen acabado envejecido' },
  { id: 3, src: pulsera3, alt: 'Anillo con coral', title: 'Wrap 3 crisocolas', description: 'Pulsera de cobre, varias técnicas de acabados , con tejidos, martillados y otras aplicaciones, tienen acabado envejecido' },
  { id: 4, src: pulsera4, alt: 'Anillo con piedra turquesa', title: 'Martillado con resina', description: 'Pulsera de cobre, varias técnicas de acabados , con tejidos, martillados y otras aplicaciones, tienen acabado envejecido' },
  { id: 5, src: pulsera5, alt: 'Anillo de diseño tribal', title: 'Cuarzo cristal martillado', description: 'Pulsera de cobre, varias técnicas de acabados , con tejidos, martillados y otras aplicaciones, tienen acabado envejecido' },
  { id: 6, src: pulsera6, alt: 'Anillo con piedra verde', title: 'Crisocola cobre y bronce', description: 'Pulsera de cobre, varias técnicas de acabados , con tejidos, martillados y otras aplicaciones, tienen acabado envejecido' },
  { id: 7, src: pulsera7, alt: 'Anillo con piedra verde', title: 'Malaquita tejida', description: 'Pulsera de cobre, varias técnicas de acabados , con tejidos, martillados y otras aplicaciones, tienen acabado envejecido' },
  { id: 8, src: pulsera8, alt: 'Anillo con piedra verde', title: 'Personalizada con cuarzo', description: 'Pulsera de cobre, varias técnicas de acabados , con tejidos, martillados y otras aplicaciones, tienen acabado envejecido' },
  { id: 9, src: pulsera9, alt: 'Anillo con piedra verde', title: 'Malaquita martillada', description: 'Pulsera de cobre, varias técnicas de acabados , con tejidos, martillados y otras aplicaciones, tienen acabado envejecido' },
  { id: 10, src: pulsera10, alt: 'Anillo con piedra verde', title: 'Malaquita martillada', description: 'Pulsera de cobre, varias técnicas de acabados , con tejidos, martillados y otras aplicaciones, tienen acabado envejecido' },
  { id: 11, src: pulsera11, alt: 'Anillo con piedra verde', title: 'Martillado con resina', description: 'Pulsera de cobre, varias técnicas de acabados , con tejidos, martillados y otras aplicaciones, tienen acabado envejecido' },
  { id: 12, src: pulsera12, alt: 'Anillo con piedra verde', title: 'Sol de alambrismo con ágatas', description: 'Pulsera de cobre, varias técnicas de acabados , con tejidos, martillados y otras aplicaciones, tienen acabado envejecido' },
  { id: 13, src: pulsera13, alt: 'Anillo con piedra verde', title: 'Spondylus nazca', description: 'Pulsera de cobre, varias técnicas de acabados , con tejidos, martillados y otras aplicaciones, tienen acabado envejecido' },
  { id: 14, src: pulsera14, alt: 'Anillo con piedra verde', title: 'Wrap luna', description: 'Pulsera de cobre, varias técnicas de acabados , con tejidos, martillados y otras aplicaciones, tienen acabado envejecido' },
  { id: 15, src: pulsera15, alt: 'Anillo con piedra verde', title: 'Mariposa en brazalete', description: 'Pulsera de cobre, varias técnicas de acabados , con tejidos, martillados y otras aplicaciones, tienen acabado envejecido' },
  { id: 16, src: pulsera16, alt: 'Anillo con piedra verde', title: 'Mariposa tejida', description: 'Pulsera de cobre, varias técnicas de acabados , con tejidos, martillados y otras aplicaciones, tienen acabado envejecido' },
  { id: 17, src: pulsera17, alt: 'Anillo con piedra verde', title: 'Modelo wrap alabrismo', description: 'Pulsera de cobre, varias técnicas de acabados , con tejidos, martillados y otras aplicaciones, tienen acabado envejecido' },
  { id: 18, src: pulsera18, alt: 'Anillo con piedra verde', title: 'Tusquesa cascajo con bronce', description: 'Pulsera de cobre, varias técnicas de acabados , con tejidos, martillados y otras aplicaciones, tienen acabado envejecido' },
  { id: 19, src: pulsera19, alt: 'Anillo con piedra verde', title: 'Corazon personalizado', description: 'Pulsera de cobre, varias técnicas de acabados , con tejidos, martillados y otras aplicaciones, tienen acabado envejecido' },
  { id: 20, src: pulsera20, alt: 'Anillo con piedra verde', title: 'Entorchado ojo de tigre', description: 'Pulsera de cobre, varias técnicas de acabados , con tejidos, martillados y otras aplicaciones, tienen acabado envejecido' },
  { id: 21, src: pulsera21, alt: 'Anillo con piedra verde', title: 'Personalizado con flor', description: 'Pulsera de cobre, varias técnicas de acabados , con tejidos, martillados y otras aplicaciones, tienen acabado envejecido' },
  { id: 22, src: pulsera22, alt: 'Anillo con piedra verde', title: 'Brazalete con caballos', description: 'Pulsera de cobre, varias técnicas de acabados , con tejidos, martillados y otras aplicaciones, tienen acabado envejecido' },
  { id: 23, src: pulsera23, alt: 'Anillo con piedra verde', title: 'Brazalete trenzado', description: 'Pulsera de cobre, varias técnicas de acabados , con tejidos, martillados y otras aplicaciones, tienen acabado envejecido' },

];

const CobrePulseras = () => {
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
            Pulseras de Cobre – Arte en Orfebrería Artesanal
          </h1>
          <p className="text-sm md:text-lg text-center text-gray-700 mb-10 max-w-3xl mx-auto">
            Pulseras hechas en cobre trabajado a mano, un metal resistente con un brillo cálido inconfundible.
            Su versatilidad permite unir alambrismo con soldadura para formar estructuras artísticas y duraderas.
            Cada pieza es embellecida con resinas, piedras naturales, cuarzos y nácar.
            Algunas pulseras llevan acabados envejecidos que acentúan su esencia artesanal.
          
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

export default CobrePulseras;