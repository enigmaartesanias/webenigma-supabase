// src/pages/Home/Home.jsx
import SimpleImageHero from '../../components/Hero/SimpleImageHero';
import CategoriaShowcase from '../../components/CategoriaShowcase';
import Galeria from '../../components/Galeria';

import Hero2 from '../../components/Hero/Hero2';
import Hero3 from '../../components/Hero/Hero3';
import Videoseccion from '../../components/Hero/Videoseccion';

const Home = () => {
  return (
    <>
      <main
        id="inicio"
        className="scroll-mt-16 pt-16 md:scroll-mt-0 md:pt-0"
      >
        <SimpleImageHero />
        <CategoriaShowcase />
       
        <Galeria />
        
        <Hero3 />
        <Hero2 />
        <Videoseccion />
      </main>
    </>
  );
};

export default Home;