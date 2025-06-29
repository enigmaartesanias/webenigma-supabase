import React from 'react';
import iconoCompartir from '../../assets/images/compartir.png';

const SharedModal = ({ isOpen, onClose, image, currentIndex, total }) => {
  if (!isOpen || !image) return null;

  const shareText = encodeURIComponent(
    `${image.title}\n${image.description}\n${window.location.origin}${image.src}`
  );
  const whatsappUrl = `https://wa.me/?text=${shareText}`;

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
        {/* Título, icono compartir y descripción */}
        <div className="flex items-center justify-center mt-2 gap-2">
          <h3 className="text-lg font-medium text-gray-900">{image.title}</h3>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2"
            title="Compartir en WhatsApp"
          >
            <img
              src={iconoCompartir}
              alt="Compartir"
              className="w-6 h-6 inline-block"
            />
          </a>
        </div>
        <div className="text-center mt-1">
          <p className="text-sm text-gray-700">{image.description}</p>
        </div>
        <div className="text-center text-gray-600 mt-2">
          {currentIndex + 1} de {total}
        </div>
      </div>
    </div>
  );
};

export default SharedModal;