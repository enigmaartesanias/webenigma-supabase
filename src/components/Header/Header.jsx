// src/components/Header/Header.jsx
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import youtubeIcon from '../../assets/youtube.ico';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleDropdown = (jewelryType) => {
    setActiveDropdown(activeDropdown === jewelryType ? null : jewelryType);
  };

  // Cerrar menú al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      const headerElement = document.getElementById('main-header');
      const mobileMenuElement = document.getElementById('mobile-menu-nav');
      const submenus = document.querySelectorAll('.has-submenu');

      if (
        menuOpen &&
        headerElement &&
        !headerElement.contains(event.target) &&
        mobileMenuElement &&
        !mobileMenuElement.contains(event.target)
      ) {
        setMenuOpen(false);
        setActiveDropdown(null);
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
      className="bg-white text-black z-50 shadow-md w-full md:sticky md:top-0 fixed top-0"
    >
      <div className="container mx-auto px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link
            to="/"
            onClick={() => {
              setActiveDropdown(null);
              if (window.innerWidth < 768) setMenuOpen(false);
            }}
          >
            <img
              src={logo}
              alt="Logo de tu marca de joyería artesanal"
              className="h-10 cursor-pointer"
            />
          </Link>
        </div>

        {/* Botón menú móvil */}
        <button onClick={toggleMenu} className="md:hidden text-2xl z-50">
          ☰
        </button>

        {/* Menú principal */}
        <nav
          id="mobile-menu-nav"
          className={`${
            menuOpen ? 'translate-x-0' : '-translate-x-full'
          } fixed left-0 w-full bg-white z-40 h-[calc(100vh-64px)] overflow-y-auto
            transform transition-transform duration-300 ease-in-out
            md:static md:block md:w-auto md:h-auto md:overflow-visible
            md:translate-x-0 md:bg-transparent`}
          style={{ top: '64px' }}
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

            {jewelryTypes.map((jewelryType) => (
              <li key={jewelryType} className="group has-submenu md:relative">
                <button
                  className="flex items-center justify-between w-full px-4 py-2 hover:text-gray-500 text-left md:inline md:w-auto"
                  onClick={() => toggleDropdown(jewelryType)}
                >
                  {jewelryType}
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
                  className="w-5 h-5 inline-block mr-1"
                />
                Videos Shorts
              </Link>
            </li>

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