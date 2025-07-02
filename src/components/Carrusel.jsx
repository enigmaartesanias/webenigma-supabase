
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';





const CarruselAlternativo = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Mostrar 3 en escritorio
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, // Mostrar 1 en pantallas menores a 768px
          slidesToScroll: 1,
          infinite: true,
          
          draggable: false, // Intenta deshabilitar el arrastre en móvil
          swipe: false,     // Intenta deshabilitar el deslizamiento táctil en móvil
          
        }
      }
    ]
  };
  return (
    <div className="w-full py-7 bg-beige-100" style={{ overscrollBehavior: 'contain', touchAction: 'pan-y' }}>
 
      <div className="container mx-auto px-10 max-w-7xl"> {/* Por ejemplo, max-w-4xl */}
        <h2 className="text-2xl font-normal md:text-1xl lg:text-3xl text-gray-800 text-center mb-4">
          Creaciones del Momento
        </h2>
        <Slider {...settings}>
          <div>
            <img src="/images/img1.jpg" alt="Producto 1" className="w-full h-46 lg:h-65 object-cover rounded-lg" />
            <p className="mt-2 text-gray-700 text-center">Collar Alpaca</p>
          </div>
          <div>
            <img src="/images/img2.jpg" alt="Producto 2" className="w-full h-46 lg:h-65 object-cover rounded-lg" />
            <p className="mt-2 text-gray-700 text-center">Pulsera labradorita</p>
          </div>
          <div>
            <img src="/images/img3.jpg" alt="Producto 3" className="w-full h-46 lg:h-65 object-cover rounded-lg" />
            <p className="mt-2 text-gray-700 text-center">Anillo coral</p>
          </div>
          <div>
            <img src="/images/img4.jpg" alt="Producto 4" className="w-full h-46 lg:h-65 object-cover rounded-lg" />
            <p className="mt-2 text-gray-700 text-center">Dije en alpaca</p>
          </div>
          <div>
            <img src="/images/img5.jpg" alt="Producto 5" className="w-full h-46 lg:h-65 object-cover rounded-lg" />
            <p className="mt-2 text-gray-700 text-center">Pulsera de alpaca</p>
          </div>



          {/* Añade más slides aquí */}
        </Slider>
      </div>
   
    </div>
  );
};

export default CarruselAlternativo;