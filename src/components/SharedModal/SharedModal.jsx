import iconoCompartir from '../../assets/images/compartir.png';

const SharedModal = ({ isOpen, onClose, image, currentIndex, total }) => {
    // Si el modal no está abierto o no hay imagen, no renderizamos nada
    if (!isOpen || !image) return null;

    // Función para manejar el clic en el fondo del modal
    const handleBackgroundClick = (e) => {
        // Si el clic ocurrió directamente en el div del fondo (no en sus hijos), cerramos el modal
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    const shareText = encodeURIComponent(
        `${image.title}\n${image.description}\n${window.location.origin}${image.src}`
    );
    const whatsappUrl = `https://wa.me/?text=${shareText}`;

    return (
        // Añadimos el onClick al div del fondo del modal
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
            onClick={handleBackgroundClick} // Manejador de clic para cerrar el modal
        >
            <div
                className="bg-white rounded-lg p-4 max-w-lg w-full relative"
                onClick={(e) => e.stopPropagation()} // Detiene la propagación para que los clics dentro del modal no lo cierren
            >
                <button
                    className="absolute text-gray-700 text-5xl top-4 right-4 z-10" // Aumentado el tamaño (text-5xl) y ajustado la posición (top-4, right-4)
                    onClick={onClose}
                >
                    &times;
                </button>
                {/* Imagen */}
                <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-auto rounded"
                />
                {/* Título */}
                <div className="text-center mt-4">
                    <h3 className="text-lg font-medium text-gray-900">{image.title}</h3>
                </div>
                {/* Descripción */}
                <div className="text-center mt-2">
                    <p className="text-sm text-gray-700">{image.description}</p>
                </div>
                {/* Texto adicional */}
                <div className="text-center mt-2">
                    <p className="text-sm text-gray-600 ">
                        "Disponible a pedido. Precio según diseño."
                    </p>
                </div>
                {/* Consulta y WhatsApp */}
                <div className="flex flex-col items-center mt-3 gap-2">
                    <div className="flex items-center gap-2">
                        <span className="text-base text-gray-800">Más info</span>
                        <a
                            href={`https://wa.me/51960282376?text=${encodeURIComponent(
                                `${image.title}\n${image.description}\n${window.location.origin}${image.src}`
                            )}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            title="Consultar o pedir por WhatsApp"
                        >
                            <img
                                src={iconoCompartir}
                                alt="WhatsApp"
                                className="w-8 h-8 inline-block"
                            />
                        </a>
                    </div>
                </div>
                {/* Contador de imágenes */}
                <div className="text-center text-gray-600 mt-4">
                    {currentIndex + 1} de {total}
                </div>
            </div>
        </div>
    );
};

export default SharedModal;