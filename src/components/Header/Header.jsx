import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/logo.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleDropdown = (material) => {
    setActiveDropdown(activeDropdown === material ? null : material);
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

  const materials = ['Plata', 'Alpaca', 'Cobre'];
  // Define los paths para cada material y subcategoría
  const subcategoriesByMaterial = {
    Plata: [
      { name: 'Anillos', path: '/plataanillos' },
      { name: 'Pulseras', path: '/platapulseras' },
      { name: 'Collares', path: '/platacollares' },
      { name: 'Aretes', path: '/plataaretes' },
    ],
    Alpaca: [
      { name: 'Anillos', path: '/alpacaanillos' },
      { name: 'Pulseras', path: '/alpacapulseras' },
      { name: 'Collares', path: '/alpacacollares' },
      { name: 'Aretes', path: '/alpacaaretes' },
    ],
    Cobre: [
      { name: 'Anillos', path: '/cobreanillos' },
      { name: 'Pulseras', path: '/cobrepulseras' },
      { name: 'Collares', path: '/cobrecollares' },
      { name: 'Aretes', path: '/cobrearetes' },
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
            {/* Nosotros */}
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:text-gray-500"
                onClick={() => {
                  if (window.innerWidth < 768) toggleMenu();
                  setActiveDropdown(null);
                }}
              >
                Sobre mí
              </a>
            </li>

            {/* Materiales con submenús */}
            {materials.map((material) => (
              <li key={material} className="group has-submenu md:relative">
                <button
                  className="block px-4 py-2 hover:text-gray-500 w-full text-center md:inline"
                  onClick={() => toggleDropdown(material)}
                >
                  {material}
                </button>
                <ul
                  className={`${
                    activeDropdown === material
                      ? 'block md:absolute bg-gray-200 md:min-w-[160px] md:mt-2 shadow-lg z-50'
                      : 'hidden'
                  }`}
                >
                  {subcategoriesByMaterial[material].map((sub) => (
                    <li key={`${material}-${sub.name}`}>
                      <Link
                        to={sub.path}
                        className="block px-4 py-2 hover:bg-gray-200"
                        onClick={() => {
                          setActiveDropdown(null);
                          if (window.innerWidth < 768) toggleMenu();
                        }}
                      >
                        {sub.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}

            {/* Personalizados */}
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:text-gray-500"
                onClick={() => {
                  if (window.innerWidth < 768) toggleMenu();
                  setActiveDropdown(null);
                }}
              >
                Personalizados
              </a>
            </li>

            {/* Contacto */}
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:text-gray-500"
                onClick={() => {
                  if (window.innerWidth < 768) toggleMenu();
                  setActiveDropdown(null);
                }}
              >
                Contacto
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;