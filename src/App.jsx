// src/App.jsx
import React from 'react';
import './styles/App.css'; // Ruta correcta
import Header from './components/Header/Header';
import Galeria from './components/Galeria/Galeria';
import Footer from './components/Footer'; // Ruta corregida: directo desde components
import Hero from './components/Hero/Hero';
import Carrusel from './components/Carrusel';

const App = () => {
  return (
    <div id="root">
      {/* Encabezado */}
      <Header />
      <Hero />
      <Galeria />
      <Carrusel/>

      {/* Contenido Principal */}
      <main className="container">
        <section id="nosotros">
          <h2>Nosotros</h2>
          <p>
            Somos una empresa dedicada a la creación de joyas artesanales. Nuestro compromiso es ofrecer productos de alta calidad y diseño único.
          </p>
        </section>

        <section id="personalizados">
          <h2>Personalizados</h2>
          <p>
            Ofrecemos servicios de personalización para crear piezas únicas según tus necesidades.
          </p>
        </section>

        <section id="contacto">
          <h2>Contacto</h2>
          <p>
            Puedes contactarnos a través de nuestro correo electrónico o redes sociales.
          </p>
        </section>
      </main>

      {/* Pie de Página */}
      <Footer /> {/* ¡Ahora renderizas el componente importado! */}
    </div>
  );
};

export default App;