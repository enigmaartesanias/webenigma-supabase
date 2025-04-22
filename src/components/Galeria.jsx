import React from "react";
import "../styles/Galeria.css";

const Galeria = () => {
  const images = [
    { src: "/images/aretes.jpg", text: "ARETES" },
    { src: "/images/pulseras.jpg", text: "PULSERAS" },
    { src: "/images/anillos.jpg", text: "ANILLOS" },
    { src: "/images/collares.jpg", text: "COLLARES" },
  ];

  return (
    <div className="galeria-container">
      <h2 className="galeria-titulo">Nuestros trabajos en joyería artesanal</h2>
      <div className="imagenes-grid">
        {images.map((img, index) => (
          <div key={index} className="imagen-item">
            <img src={img.src} alt={img.text} className="imagen" />
            <div className="overlay">{img.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Galeria;