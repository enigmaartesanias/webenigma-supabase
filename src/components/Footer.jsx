import React from 'react';

import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa'; // Importa iconos de Font Awesome

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 w-full"> {/* Fondo negro para todo el footer */}
      <div className="container mx-auto px-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-gray-700 pb-8">
          {/* Columna 1: Información de la tienda */}
          <div className="md:border-r md:border-gray-700 md:pr-8"> {/* Línea divisoria derecha */}
            <h3 className="text-lg font-semibold mb-4">Enigma Artesanías y Accesorios</h3>
            <p className="text-sm text-gray-400">
              Jr. Madre Selva 544 Tda. 01 - Urb. Santa Isabel - Carabayllo
            </p>
            <p className="text-sm text-gray-400">Lima - Perú</p>
          </div>

          {/* Columna 2: Contacto */}
          <div className="md:border-r md:border-gray-700 md:pr-8"> {/* Línea divisoria derecha */}
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <p className="text-sm text-gray-400">Email: artesaniasenigma@gmail.com</p>
            <p className="text-sm text-gray-400">WhatsApp: +51 960282376</p>
          </div>

          {/* Columna 3: Formas de pago */}
          <div className="md:border-r md:border-gray-700 md:pr-8">
            <h3 className="text-lg font-semibold mb-4">Formas de pago y envío</h3>
            <p className="text-sm text-gray-400">Visa - Western union - Plin - Yape</p>
            
            {/* Enlace a Políticas de envío y tarifas */}
            <div className="mt-4 text-xs text-gray-400 flex items-center justify-center space-x-1">
              <a
                href="/politicasenvios"
                className="underline hover:text-white flex items-center"
                title="Ver políticas de envío y tarifas"
              >
                <span role="img" aria-label="envío">📦</span> Políticas de envío y tarifas
              </a>
            </div>
          

          {/* Enlace a Políticas de envío y tarifas */}
            <div className="mt-4 text-xs text-gray-400 flex items-center justify-center space-x-1">
              <a
                href="/shippingpolicies"
                className="underline hover:text-white flex items-center"
                title="Ver políticas de envío y tarifas"
              >
                <span role="img" aria-label="envío">📦</span> Shipping Policies and Rates
              </a>
            </div>
          </div>

          {/* Columna 4: Redes Sociales */}
          <div>
          <h3 className="text-lg font-semibold mb-4">Redes Sociales</h3>
          <div className="flex items-center space-x-4 justify-center">
           <a href="https://www.facebook.com/enigmaartesaniasyaccesorios/" className="text-gray-400 hover:text-white">
          <FaFacebook size={24} />
          </a>
          <a href="https://www.instagram.com/enigma_artesanias/" className="text-gray-400 hover:text-white">
          <FaInstagram size={24} />
         </a>
         <a href="https://wa.me/51960282376" className="text-gray-400 hover:text-white" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp size={24} />
              </a>
        </div>

{/* Texto sutil para compartir página */}
        <div className="mt-4 text-md text-gray-400 flex items-center justify-center space-x-1">
          <button
            className="underline hover:text-white flex items-center bg-transparent p-0 border-0"
            onClick={() => {
              if (navigator.share) {
                navigator.share({
                  title: document.title,
                  url: window.location.href,
                });
              } else {
                navigator.clipboard.writeText(window.location.href);
                alert('¡Enlace copiado!');
              }
            }}
            title="Compartir esta página"
            type="button"
          >
            <span role="img" aria-label="compartir">🔗</span> Compartir página
          </button>
        </div>



        </div>
        </div>

        {/* Línea de separación inferior y copyright */}
        <div className="py-4 mt-4 text-center text-sm text-gray-400 border-t border-gray-700">
          <p>Copyright © 2025 Enigma artesanias y accesorios. All Rights Reserved.</p>
          <p>Design: aldomagallanes</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;