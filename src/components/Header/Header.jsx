import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/logo.png";
import youtubeIcon from "../../assets/youtube.ico";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null); // Ahora 'activeDropdown' almacenará el tipo de joya (ej. 'Anillos')

  const toggleMenu = () => setMenuOpen(!menuOpen);
  // 'toggleDropdown' ahora recibe el tipo de joya (ej. 'Anillos')
  const toggleDropdown = (jewelryType) => {
    setActiveDropdown(activeDropdown === jewelryType ? null : jewelryType);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      const headerElement = document.getElementById('main-header');
      const mobileMenuElement = document.getElementById('mobile-menu-nav');
      const submenus = document.querySelectorAll('.has-submenu'); // Esto sigue siendo útil para detectar clics fuera de cualquier menú
      
      // Lógica para cerrar el menú móvil si se hace clic fuera
      if (
        menuOpen &&
        headerElement && !headerElement.contains(event.target) &&
        mobileMenuElement && !mobileMenuElement.contains(event.target)
      ) {
        setMenuOpen(false);
        setActiveDropdown(null);
        return;
      }
      
      // Lógica para cerrar el dropdown si se hace clic fuera de él
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

  // NUEVA DEFINICIÓN: Tipos de Joyas (ahora son tus categorías principales)
  const jewelryTypes = ['Anillos', 'Pulseras', 'Collares', 'Aretes'];

  // NUEVA DEFINICIÓN: Materiales por Tipo de Joya
  // Las claves son los tipos de joyas, y los valores son objetos con 'name' y 'path' para cada material
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
      className="bg-white text-black top-0 z-50 shadow-md w-full fixed md:sticky"
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
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          } fixed right-0 w-full bg-white z-40
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

          <ul className="flex flex-col md:flex-row md:space-x-6 md:items-center px-4 pb-4 md:pb-0 pt-4 h-full overflow-y-auto md:h-auto md:overflow-visible">
            {/* Sobre Mi (se mantiene igual) */}
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

            {/* Tipos de Joyas con submenús (antes eran Materiales) */}
            {jewelryTypes.map((jewelryType) => (
              <li key={jewelryType} className="group has-submenu md:relative">
                <button
                  className="block px-4 py-2 hover:text-gray-500 w-full text-center md:inline"
                  onClick={() => toggleDropdown(jewelryType)} // Ahora pasamos el tipo de joya
                >
                  {jewelryType} {/* Muestra el nombre del tipo de joya (Anillos, Pulseras, etc.) */}
                </button>
                <ul
                  className={`${
                    activeDropdown === jewelryType // Compara con el tipo de joya
                      ? 'block md:absolute bg-gray-200 md:min-w-[160px] md:mt-2 shadow-lg z-50'
                      : 'hidden'
                  }`}
                >
                  {/* Mapea los materiales para el tipo de joya actual */}
                  {materialsByJewelryType[jewelryType].map((material) => (
                    <li key={`${jewelryType}-${material.name}`}>
                      <Link
                        to={material.path} // La ruta ya está definida en 'material.path'
                        className="block px-4 py-2 hover:bg-gray-200"
                        onClick={() => {
                          setActiveDropdown(null);
                          if (window.innerWidth < 768) toggleMenu();
                        }}
                      >
                        {material.name} {/* Muestra el nombre del material (Plata, Alpaca, Cobre) */}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}

            {/* Personalizados (se mantiene igual) */}
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

            {/* Videos Shorts (se mantiene igual) */}
            <li>
              <Link
                to="/videoshorts"
                className="flex items-center gap-2 block px-4 py-2 hover:text-gray-500 justify-center md:justify-start"
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

            {/* Contacto (se mantiene igual) */}
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