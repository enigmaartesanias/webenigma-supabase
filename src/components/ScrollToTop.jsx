// src/components/ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Esto es lo que asegura que la página se posicione en la parte superior.
    // El "smooth" hace que la transición sea animada.
    window.scrollTo({ top: 0, behavior: "smooth" });
    console.log('ScrollToTop activado. Ruta:', pathname); // Para depuración
  }, [pathname]); // El efecto se ejecuta cada vez que la ruta (pathname) cambia

  return null; // Este componente no renderiza nada visible
};

export default ScrollToTop;