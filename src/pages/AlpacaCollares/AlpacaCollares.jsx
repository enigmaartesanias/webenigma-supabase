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


const collaresData = [
  { id: 1, src: collar1, alt: 'Anillo con cuarzo rojo', title: '001', description: 'A pedido' },
  { id: 2, src: collar2, alt: 'Anillo con amatista', title: '002', description: 'A pedido' },
  { id: 3, src: collar3, alt: 'Anillo con coral', title: '003', description: 'A pedido' },
  { id: 4, src: collar4, alt: 'Anillo con piedra turquesa', title: '004', description: 'A pedido' },
  { id: 5, src: collar5, alt: 'Anillo de diseño tribal', title: '005', description: 'A pedido' },
  { id: 6, src: collar6, alt: 'Anillo con piedra verde', title: '006', description: 'A pedido' },
  { id: 7, src: collar7, alt: 'Anillo con piedra verde', title: '007', description: 'A pedido' },
  { id: 8, src: collar8, alt: 'Anillo con piedra verde', title: '008', description: 'A pedido' },
  { id: 9, src: collar9, alt: 'Anillo con piedra verde', title: '010', description: 'A pedido' },
  { id: 10, src: collar10, alt: 'Anillo con piedra verde', title: '011', description: 'A pedido' },
  { id: 11, src: collar11, alt: 'Anillo con piedra verde', title: '012', description: 'A pedido' },
  { id: 12, src: collar12, alt: 'Anillo con piedra verde', title: '013', description: 'A pedido' },
  

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
            Muchos llevan un acabado envejecido que resalta su carácter ancestral y místico.
            Son colgantes con alma, nacidos de la inspiración y el trabajo artesanal.
            Joyas distintas, duraderas y cargadas de simbolismo, para quienes valoran lo auténtico.


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