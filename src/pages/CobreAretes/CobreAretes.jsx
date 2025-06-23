import { useState } from 'react';
import SharedModal from '../../components/SharedModal/SharedModal';

import arete1 from '../../assets/images/cobre-aretes/arete1.jpg';
import arete2 from '../../assets/images/cobre-aretes/arete2.jpg';
import arete3 from '../../assets/images/cobre-aretes/arete3.jpg';



const aretesData = [
  { id: 1, src: arete1, alt: 'Anillo con cuarzo rojo', title: 'Anillo bonsai', description: 'A pedido' },
  { id: 2, src: arete2, alt: 'Anillo con amatista', title: 'Anillo amatista facetada', description: 'A pedido' },
  { id: 3, src: arete3, alt: 'Anillo con coral', title: 'Anillo con spondylus', description: 'A pedido' },
 

];

const CobreAretes = () => {
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
            Aretes de Alpaca – Arte en Orfebrería Artesanal
          </h1>
          <p className="text-sm md:text-lg text-center text-gray-700 mb-10 max-w-3xl mx-auto">
           Aretes únicos en alpaca, trabajados completamente a mano con técnicas de orfebrería artesanal.
          Cada pieza lleva un delicado acabado envejecido que realza su esencia atemporal.
          Fusionamos nácar, perlas, tejidos, piedras naturales y cuarzos en diseños exclusivos.
          El alambrismo aporta detalle y carácter, creando composiciones irrepetibles.
          Joyas con alma, inspiradas en lo místico y lo ancestral.
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
                  <p className="text-sm text-gray-200">{arete.description}</p>
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

export default CobreAretes;