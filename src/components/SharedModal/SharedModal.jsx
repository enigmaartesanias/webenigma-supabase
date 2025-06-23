import React from 'react';

const SharedModal = ({ isOpen, onClose, image, currentIndex, total }) => {
  if (!isOpen || !image) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
      <div className="bg-white rounded-lg p-4 max-w-lg w-full relative">
        <button
          className="absolute top-2 right-2 text-gray-700 text-2xl"
          onClick={onClose}
        >
          &times;
        </button>
        <img
          src={image.src}
          alt={image.alt}
          className="w-full h-auto rounded"
        />
        {/* Texto de referencia debajo de la imagen */}
         {/* Título y descripción */}
        <div className="text-center mt-2">
          <h3 className="text-lg font-medium text-gray-900">{image.title}</h3>
          <p className="text-sm text-gray-700">{image.description}</p>
        </div>
        <div className="text-center text-gray-600 mt-2">
          
          {currentIndex + 1} de {total}
        </div>
        {/* Puedes agregar aquí más contenido si lo necesitas */}
        
      </div>
    </div>
  );
};

export default SharedModal;