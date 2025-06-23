// src/pages/Home/Home.jsx


import Hero from '../../components/Hero/Hero';
import Galeria from '../../components/Galeria'; // Ajusta la ruta si es necesario
import Carrusel from '../../components/Carrusel'; // Ajusta la ruta si es necesario
import Hero2 from '../../components/Hero/Hero2';
import Hero3 from '../../components/Hero/Hero3';

const Home = () => {
  return (
    <>
      
      <main> {/* Usa <main> para el contenido principal de la página */}
        <Hero />
        <Galeria />
        <Carrusel />
        <Hero3 />
        <Hero2 />
      </main>
      
    </>
  );
};

export default Home;