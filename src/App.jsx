import React from 'react';
import './styles.css'; // Importa los estilos globales
import Header from './components/Header'; // Importa el componente Header

const App = () => {
  return (
    <div id="root">
      {/* Encabezado */}
      <Header />

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
      <footer className="footer">
        <p>&copy; 2025 EnigmaWeb. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default App;