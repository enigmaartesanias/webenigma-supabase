import { useState } from 'react';
import SharedModal from '../../components/SharedModal/SharedModal';

import collar1 from '../../assets/images/cobre-collares/collar1.jpg';
import collar2 from '../../assets/images/cobre-collares/collar2.jpg';
import collar3 from '../../assets/images/cobre-collares/collar3.jpg';
import collar4 from '../../assets/images/cobre-collares/collar4.jpg';
import collar5 from '../../assets/images/cobre-collares/collar5.jpg';
import collar6 from '../../assets/images/cobre-collares/collar6.jpg';
import collar7 from '../../assets/images/cobre-collares/collar7.jpg';
import collar8 from '../../assets/images/cobre-collares/collar8.jpg';
import collar9 from '../../assets/images/cobre-collares/collar9.jpg';
import collar10 from '../../assets/images/cobre-collares/collar10.jpg';
import collar11 from '../../assets/images/cobre-collares/collar11.jpg';
import collar12 from '../../assets/images/cobre-collares/collar12.jpg';
import collar13 from '../../assets/images/cobre-collares/collar13.jpg';
import collar14 from '../../assets/images/cobre-collares/collar14.jpg';


const collaresData = [
  { id: 1, src: collar1, alt: 'A', title: 'Dije con amatista tejido', description: 'Dijes y collares en cobre, las técnicas de acabado son el calado, martillado, soldado, alambrismo y acabado envejecido , muy resistente' },
  { id: 2, src: collar2, alt: 'A', title: 'Sol calado con resina', description: 'Dijes y collares en cobre, las técnicas de acabado son el calado, martillado, soldado, alambrismo y acabado envejecido , muy resistente' },
  { id: 3, src: collar3, alt: 'A', title: 'Sol calado con resina', description: 'Dijes y collares en cobre, las técnicas de acabado son el calado, martillado, soldado, alambrismo y acabado envejecido , muy resistente' },
  { id: 4, src: collar4, alt: 'A', title: 'Sol calado con resina', description: 'Dijes y collares en cobre, las técnicas de acabado son el calado, martillado, soldado, alambrismo y acabado envejecido , muy resistente' },
  { id: 5, src: collar5, alt: 'A', title: 'Sol calado con resina', description: 'Dijes y collares en cobre, las técnicas de acabado son el calado, martillado, soldado, alambrismo y acabado envejecido , muy resistente' },
  { id: 6, src: collar6, alt: 'A', title: 'Sol calado con resina', description: 'Dijes y collares en cobre, las técnicas de acabado son el calado, martillado, soldado, alambrismo y acabado envejecido , muy resistente' },
  { id: 7, src: collar7, alt: 'A', title: 'Sol calado con resina', description: 'Dijes y collares en cobre, las técnicas de acabado son el calado, martillado, soldado, alambrismo y acabado envejecido , muy resistente' },
  { id: 8, src: collar8, alt: 'A', title: 'Dije con aplicación de bronce', description: 'Dijes y collares en cobre, las técnicas de acabado son el calado, martillado, soldado, alambrismo y acabado envejecido , muy resistente' },
  { id: 9, src: collar9, alt: 'A', title: 'Dije con aplicaición de bronce', description: 'Dijes y collares en cobre, las técnicas de acabado son el calado, martillado, soldado, alambrismo y acabado envejecido , muy resistente' },
  { id: 10, src: collar10, alt: 'A', title: 'Dije con aplicaición de alpaca', description: 'Dijes y collares en cobre, las técnicas de acabado son el calado, martillado, soldado, alambrismo y acabado envejecido , muy resistente' },
  { id: 11, src: collar11, alt: 'A', title: 'Juego de dije y aretes con resina', description: 'Dijes y collares en cobre, las técnicas de acabado son el calado, martillado, soldado, alambrismo y acabado envejecido , muy resistente' },
  { id: 12, src: collar12, alt: 'A', title: 'Soles tejidos con cuarzos', description: 'Dijes y collares en cobre, las técnicas de acabado son el calado, martillado, soldado, alambrismo y acabado envejecido , muy resistente' },
  { id: 13, src: collar13, alt: 'A', title: 'Soles calados y resina', description: 'Dijes y collares en cobre, las técnicas de acabado son el calado, martillado, soldado, alambrismo y acabado envejecido , muy resistente' },
  { id: 14, src: collar14, alt: 'A', title: 'Sole tejidos con luna', description: 'Dijes y collares en cobre, las técnicas de acabado son el calado, martillado, soldado, alambrismo y acabado envejecido , muy resistente' },
  

];

const CobreCollares = () => {
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
            Collares de Cobre – Arte en Orfebrería Artesanal
          </h1>
          <p className="text-sm md:text-lg text-center text-gray-700 mb-10 max-w-3xl mx-auto">
           Collares y dijes creados en cobre, modelado a mano con técnicas de orfebrería y alambrismo.
            Este metal, con su cálido color rojizo, ofrece una presencia vibrante y natural.
            Cada pieza se embellece con resinas, piedras naturales, cuarzos, spondylus y otros materiales orgánicos.
          


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
      {/* Modal para ampliación de imagen */}
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

export default CobreCollares;