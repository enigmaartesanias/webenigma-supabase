import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/logo.png";
import youtubeIcon from "../../assets/youtube.ico";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  // Nuevo estado para controlar si el header debe ser visible y fijo
  const [headerVisible, setHeaderVisible] = useState(true);
  // Estado para la última posición del scroll
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleDropdown = (jewelryType) => {
    setActiveDropdown(activeDropdown === jewelryType ? null : jewelryType);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      const headerElement = document.getElementById('main-header');
      const mobileMenuElement = document.getElementById('mobile-menu-nav');
      const submenus = document.querySelectorAll('.has-submenu');
      if (
        menuOpen &&
        headerElement && !headerElement.contains(event.target) &&
        mobileMenuElement && !mobileMenuElement.contains(event.target)
      ) {
        setMenuOpen(false);
        setActiveDropdown(null);
        return;
      }
      if (activeDropdown) {
        let clickedInsideSubmenu = false;
        submenus.forEach((li) => {
          if (li.contains(event.target)) {
            clickedInsideSubmenu = true;
          }
        });
        if (!clickedInsideSubmenu) {
          setActiveDropdown(null);
        }
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen, activeDropdown]);

  // Nuevo useEffect para manejar el scroll
  useEffect(() => {
    const handleScroll = () => {
      // Solo aplicamos esta lógica en pantallas móviles
      if (window.innerWidth < 768) {
        const currentScrollY = window.scrollY;

        // Si el usuario se desplaza hacia abajo (ocultamos el header)
        if (currentScrollY > lastScrollY && currentScrollY > 100) { // Ocultar si se desplaza hacia abajo y no estamos en la parte superior
          setHeaderVisible(false);
        } 
        // Si el usuario se desplaza hacia arriba (mostramos el header)
        else if (currentScrollY < lastScrollY) {
          setHeaderVisible(true);
        }
        
        // Si el usuario está en la parte superior de la página, el header siempre es visible
        if (currentScrollY === 0) {
            setHeaderVisible(true);
        }

        setLastScrollY(currentScrollY);
      } else {
        // En desktop, siempre es visible y se comporta como sticky
        setHeaderVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]); // Dependencia: lastScrollY para detectar cambios en la posición del scroll

  const jewelryTypes = ['Anillos', 'Pulseras', 'Collares', 'Aretes'];
  const materialsByJewelryType = {
    Anillos: [
      { name: 'Plata', path: '/plataanillos' },
      { name: 'Alpaca', path: '/alpacaanillos' },
      { name: 'Cobre', path: '/cobreanillos' },
    ],
    Pulseras: [
      { name: 'Plata', path: '/platapulseras' },
      { name: 'Alpaca', path: '/alpacapulseras' },
      { name: 'Cobre', path: '/cobrepulseras' },
    ],
    Collares: [
      { name: 'Plata', path: '/platacollares' },
      { name: 'Alpaca', path: '/alpacacollares' },
      { name: 'Cobre', path: '/cobrecollares' },
    ],
    Aretes: [
      { name: 'Plata', path: '/plataaretes' },
      { name: 'Alpaca', path: '/alpacaaretes' },
      { name: 'Cobre', path: '/cobrearetes' },
    ],
  };

  return (
    <header
      id="main-header"
      // Aplicamos las clases condicionalmente
      className={`bg-white text-black z-50 shadow-md w-full 
        ${headerVisible ? 'fixed top-0' : 'relative -top-16'} 
        md:sticky md:top-0 
        transition-all duration-300 ease-in-out`} // Animación suave
    >
      <div className="container mx-auto px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link to="/" onClick={() => { setActiveDropdown(null); if (window.innerWidth < 768) setMenuOpen(false); }}>
            <img src={logo} alt="Logo de tu marca de joyería artesanal" className="h-10 cursor-pointer" />
          </Link>
        </div>

        {/* Botón menú móvil */}
        <button onClick={toggleMenu} className="md:hidden text-2xl z-50">
          ☰
        </button>

        {/* Menú principal (Nav) */}
        <nav
          id="mobile-menu-nav"
          className={`${
            menuOpen ? 'translate-x-0' : '-translate-x-full'
          } fixed left-0 w-full bg-white z-40 h-[calc(100vh-64px)] overflow-y-auto // Altura completa menos el header
            transform transition-transform duration-300 ease-in-out
            md:static md:block md:w-auto md:h-auto md:overflow-visible
            md:translate-x-0 md:bg-transparent`}
          style={{ top: '64px' }} // Asegura que el menú móvil se posicione debajo del header
        >
          {menuOpen && (
            <button
              onClick={toggleMenu}
              className="absolute top-4 right-4 text-gray-600 md:hidden text-3xl z-50"
              aria-label="Cerrar menú"
            >
              &times;
            </button>
          )}

          <ul className="flex flex-col md:flex-row md:space-x-6 md:items-center px-4 pb-4 md:pb-0 pt-4 h-full overflow-y-auto md:h-auto md:overflow-visible text-left">
            {/* Sobre Mi */}
            <li>
              <Link
                to="/sobremi"
                className="block px-4 py-2 hover:text-gray-500"
                onClick={() => {
                  if (window.innerWidth < 768) toggleMenu();
                  setActiveDropdown(null);
                }}
              >
                Sobre mí
              </Link>
            </li>

            {/* Tipos de Joyas con submenús */}
            {jewelryTypes.map((jewelryType) => (
              <li key={jewelryType} className="group has-submenu md:relative">
                <button
                  className="flex items-center justify-between w-full px-4 py-2 hover:text-gray-500 text-left md:inline md:w-auto"
                  onClick={() => toggleDropdown(jewelryType)}
                >
                  {jewelryType}
                  {/* Símbolo > o v solo en móvil */}
                  <span className="ml-2 md:hidden">
                    {activeDropdown === jewelryType ? 'v' : '>'}
                  </span>
                </button>
                <ul
                  className={`${
                    activeDropdown === jewelryType
                      ? 'block md:absolute bg-gray-200 md:min-w-[160px] md:mt-2 shadow-lg z-50'
                      : 'hidden'
                  }`}
                >
                  {materialsByJewelryType[jewelryType].map((material) => (
                    <li key={`${jewelryType}-${material.name}`}>
                      <Link
                        to={material.path}
                        className="block px-4 py-2 hover:bg-gray-200"
                        onClick={() => {
                          setActiveDropdown(null);
                          if (window.innerWidth < 768) toggleMenu();
                        }}
                      >
                        {material.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}

            {/* Personalizados */}
            <li>
              <Link
                to="/personalizado"
                className="block px-4 py-2 hover:text-gray-500"
                onClick={() => {
                  if (window.innerWidth < 768) toggleMenu();
                  setActiveDropdown(null);
                }}
              >
                Personalizados
              </Link>
            </li>

            {/* Videos Shorts */}
            <li>
              <Link
                to="/videoshorts"
                className="gap-2 block px-4 py-2 hover:text-gray-500 justify-center md:justify-start"
                onClick={() => {
                  if (window.innerWidth < 768) toggleMenu();
                  setActiveDropdown(null);
                }}
              >
                <img
                  src={youtubeIcon}
                  alt="YouTube"
                  className="w-5 h-5"
                  style={{ display: 'inline-block' }}
                />
                Videos Shorts
              </Link>
            </li>

            {/* Contacto */}
            <li>
              <Link
                to="/contacto"
                className="block px-4 py-2 hover:text-gray-500"
                onClick={() => {
                  if (window.innerWidth < 768) toggleMenu();
                  setActiveDropdown(null);
                }}
              >
                Contacto
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;