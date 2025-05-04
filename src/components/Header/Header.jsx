import React, { useState, useEffect } from 'react';
import logo from "../../assets/logo.png";


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  // Función para alternar el menú móvil
  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Función para alternar el submenú
  const toggleDropdown = (material) => {
    setActiveDropdown(activeDropdown === material ? null : material);
  };

  // Función para cerrar el submenú al hacer clic fuera
  const handleClickOutside = (event) => {
    const menuElement = document.querySelector('.header-menu');
    if (menuElement && !menuElement.contains(event.target)) {
      setActiveDropdown(null); // Cierra el submenú
    }
  };

  // Agregar y eliminar el listener de clics fuera
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const subcategories = ['Anillos', 'Pulseras', 'Collares', 'Aretes'];
  const materials = ['Plata', 'Alpaca', 'Cobre'];

  return (
    <header className="bg-white text-black sticky top-0 z-50 shadow-md header-menu">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="h-10" />
        </div>

        {/* Botón menú móvil */}
        <button onClick={toggleMenu} className="md:hidden text-2xl">
          ☰
        </button>

        {/* Menú principal */}
        <nav
          className={`${
            menuOpen ? 'block' : 'hidden'
          } absolute top-20 right-0 w-[250px] bg-white md:static md:block`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-6 md:items-center px-4 pb-4 md:pb-0">
            {/* Nosotros */}
            <li>
              <a href="#nosotros" className="block px-4 py-2 hover:text-gray-500">
                Nosotros
              </a>
            </li>

            {/* Materiales con submenús */}
            {materials.map((material) => (
              <li key={material} className="relative group has-submenu">
                <button
                  className="block px-4 py-2 hover:text-gray-500 w-full text-center md:inline"
                  onClick={() => toggleDropdown(material)}
                >
                  {material}
                </button>

                {/* Submenú */}
                <ul
                  className={`${
                    activeDropdown === material
                      ? 'block md:absolute bg-gray-100 md:min-w-[160px] md:mt-2 shadow-lg z-50'
                      : 'hidden'
                  }`}
                >
                  {subcategories.map((sub) => (
                    <li key={`${material}-${sub}`}>
                      <a
                        href={`#${material.toLowerCase()}-${sub.toLowerCase()}`}
                        className="block px-4 py-2 hover:bg-gray-200"
                      >
                        {sub}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            ))}

            {/* Personalizados */}
            <li>
              <a href="#personalizados" className="block px-4 py-2 hover:text-gray-500">
                Personalizados
              </a>
            </li>

            {/* Contacto */}
            <li>
              <a href="#contacto" className="block px-4 py-2 hover:text-gray-500">
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