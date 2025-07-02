import { useState } from 'react';
import SharedModal from '../../components/SharedModal/SharedModal';

import collar1 from '../../assets/images/alpaca-collares/collar1.jpg';
import collar2 from '../../assets/images/alpaca-collares/collar2.jpg';
import collar3 from '../../assets/images/alpaca-collares/collar3.jpg';
import collar4 from '../../assets/images/alpaca-collares/collar4.jpg';
import collar5 from '../../assets/images/alpaca-collares/collar5.jpg';
import collar6 from '../../assets/images/alpaca-collares/collar6.jpg';
import collar7 from '../../assets/images/alpaca-collares/collar7.jpg';
import collar8 from '../../assets/images/alpaca-collares/collar8.jpg';
import collar9 from '../../assets/images/alpaca-collares/collar9.jpg';
import collar10 from '../../assets/images/alpaca-collares/collar10.jpg';
import collar11 from '../../assets/images/alpaca-collares/collar11.jpg';
import collar12 from '../../assets/images/alpaca-collares/collar12.jpg';
import collar13 from '../../assets/images/alpaca-collares/collar13.jpg';
import collar14 from '../../assets/images/alpaca-collares/collar14.jpg';
import collar15 from '../../assets/images/alpaca-collares/collar15.jpg';
import collar16 from '../../assets/images/alpaca-collares/collar16.jpg';
import collar17 from '../../assets/images/alpaca-collares/collar17.jpg';
import collar18 from '../../assets/images/alpaca-collares/collar18.jpg';
import collar19 from '../../assets/images/alpaca-collares/collar19.jpg';
import collar20 from '../../assets/images/alpaca-collares/collar20.jpg';
import collar21 from '../../assets/images/alpaca-collares/collar21.jpg';
import collar22 from '../../assets/images/alpaca-collares/collar22.jpg';
import collar23 from '../../assets/images/alpaca-collares/collar23.jpg';
import collar24 from '../../assets/images/alpaca-collares/collar24.jpg';




const collaresData = [
  { id: 1, src: collar1, alt: 'c', title: 'Juego de sol/luna con resina', description: 'Dijes y collares en alambre de alpaca , muy resiste, todos los trabajos éstan soldados y estan hechos con varias técnias de alambrismo y envejecidos' },
  { id: 2, src: collar2, alt: 'c', title: 'Dije en alambrismo con turquesa reconstituida', description: 'Dijes y collares en alambre de alpaca , muy resiste, todos los trabajos éstan soldados y estan hechos con varias técnias de alambrismo y envejecidos' },
  { id: 3, src: collar3, alt: 'l', title: 'Dije amatista natural', description: 'Dijes y collares en alambre de alpaca , muy resiste, todos los trabajos éstan soldados y estan hechos con varias técnias de alambrismo y envejecidos' },
  { id: 4, src: collar4, alt: 'a', title: 'Sol con cuarzo tejido', description: 'Dijes y collares en alambre de alpaca , muy resiste, todos los trabajos éstan soldados y estan hechos con varias técnias de alambrismo y envejecidos' },
  { id: 5, src: collar5, alt: 'l', title: 'Sol con crisocolas', description: 'Dijes y collares en alambre de alpaca , muy resiste, todos los trabajos éstan soldados y estan hechos con varias técnias de alambrismo y envejecidos' },
  { id: 6, src: collar6, alt: 'e', title: 'Cruz en alambrismo', description: 'Dijes y collares en alambre de alpaca , muy resiste, todos los trabajos éstan soldados y estan hechos con varias técnias de alambrismo y envejecidos' },
  { id: 7, src: collar7, alt: 'o', title: 'Dije y cadena en alambrismo', description: 'Dijes y collares en alambre de alpaca , muy resiste, todos los trabajos éstan soldados y estan hechos con varias técnias de alambrismo y envejecidos' },
  { id: 8, src: collar8, alt: 'o', title: 'Corono y piedra para la frente', description: 'Dijes y collares en alambre de alpaca , muy resiste, todos los trabajos éstan soldados y estan hechos con varias técnias de alambrismo y envejecidos' },
  { id: 9, src: collar9, alt: 'A', title: 'Dije en alambrismo con tejido', description: 'Dijes y collares en alambre de alpaca , muy resiste, todos los trabajos éstan soldados y estan hechos con varias técnias de alambrismo y envejecidos' },
  { id: 10, src: collar10, alt: 'A', title: 'Sol tejido con ávalon', description: 'Dijes y collares en alambre de alpaca , muy resiste, todos los trabajos éstan soldados y estan hechos con varias técnias de alambrismo y envejecidos' },
  { id: 11, src: collar11, alt: 'e', title: 'Sol tejido con spondylus', description: 'Dijes y collares en alambre de alpaca , muy resiste, todos los trabajos éstan soldados y estan hechos con varias técnias de alambrismo y envejecidos' },
  { id: 12, src: collar12, alt: 'A', title: 'Cruz en alambrismo', description: 'Dijes y collares en alambre de alpaca , muy resiste, todos los trabajos éstan soldados y estan hechos con varias técnias de alambrismo y envejecidos' },
  { id: 13, src: collar13, alt: 'A', title: 'Dije tejido y piedra turquesa', description: 'Dijes y collares en alambre de alpaca , muy resiste, todos los trabajos éstan soldados y estan hechos con varias técnias de alambrismo y envejecidos' },
  { id: 14, src: collar14, alt: 'A', title: 'Dijes con cuero y piedras', description: 'Dijes y collares en alambre de alpaca , muy resiste, todos los trabajos éstan soldados y estan hechos con varias técnias de alambrismo y envejecidos' },
  { id: 15, src: collar15, alt: 'A', title: 'Filigrana artesanal labradorita', description: 'Dijes y collares en alambre de alpaca , muy resiste, todos los trabajos éstan soldados y estan hechos con varias técnias de alambrismo y envejecidos' },
  { id: 16, src: collar16, alt: 'A', title: 'Soles en alambrismo con cuarzos', description: 'Dijes y collares en alambre de alpaca , muy resiste, todos los trabajos éstan soldados y estan hechos con varias técnias de alambrismo y envejecidos' },
  { id: 17, src: collar17, alt: 'A', title: 'Collar 3 piedras turquesas', description: 'Dijes y collares en alambre de alpaca , muy resiste, todos los trabajos éstan soldados y estan hechos con varias técnias de alambrismo y envejecidos' },
  { id: 18, src: collar18, alt: 'A', title: 'Sol tejido y piedra pirita', description: 'Dijes y collares en alambre de alpaca , muy resiste, todos los trabajos éstan soldados y estan hechos con varias técnias de alambrismo y envejecidos' },
  { id: 19, src: collar19, alt: 'A', title: 'Dijes clásicos varias piedras', description: 'Dijes y collares en alambre de alpaca , muy resiste, todos los trabajos éstan soldados y estan hechos con varias técnias de alambrismo y envejecidos' },
  { id: 20, src: collar20, alt: 'A', title: 'Dijes clásicos con pirita', description: 'Dijes y collares en alambre de alpaca , muy resiste, todos los trabajos éstan soldados y estan hechos con varias técnias de alambrismo y envejecidos' },
  { id: 21, src: collar21, alt: 'A', title: 'Dije nudo de bruja', description: 'Dijes y collares en alambre de alpaca , muy resiste, todos los trabajos éstan soldados y estan hechos con varias técnias de alambrismo y envejecidos' },
  { id: 22, src: collar22, alt: 'A', title: 'Dije amatista natural', description: 'Dijes y collares en alambre de alpaca , muy resiste, todos los trabajos éstan soldados y estan hechos con varias técnias de alambrismo y envejecidos' },
  { id: 23, src: collar23, alt: 'A', title: 'Filigrana artesanal crisocola', description: 'Dijes y collares en alambre de alpaca , muy resiste, todos los trabajos éstan soldados y estan hechos con varias técnias de alambrismo y envejecidos' },
  { id: 24, src: collar24, alt: 'A', title: 'Filigrana artesanal onix', description: 'Dijes y collares en alambre de alpaca , muy resiste, todos los trabajos éstan soldados y estan hechos con varias técnias de alambrismo y envejecidos' },
  

  

];

const AlpacaCollares = () => {
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
            Collares de Alpaca – Arte en Orfebrería Artesanal
          </h1>
          <p className="text-sm md:text-lg text-center text-gray-700 mb-10 max-w-3xl mx-auto">
           Collares y dijes creados en alpaca, trabajados completamente a mano con técnica de orfebrería.
            Unimos soldadura y alambrismo en composiciones que abrazan la forma y el detalle.
            Decoramos cada pieza con piedras naturales, cuarzos, nácar y spondylus cuidadosamente seleccionados.
            La alpaca, con su brillo elegante y resistencia, es ideal para estos diseños únicos.
          

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

export default AlpacaCollares;