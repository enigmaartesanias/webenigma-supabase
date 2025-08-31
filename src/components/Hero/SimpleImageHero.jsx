
import imagenPrincipal from "../../assets/images/principal.jpg";

const SimpleImageHero = () => {
  return (
    <div className="w-full min-h-[500px] bg-white flex items-center justify-center">
      <img
        src={imagenPrincipal}
        alt="Imagen principal"
        className="w-full h-auto max-h-[80vh] object-cover"
        style={{ maxHeight: "80vh" }}
      />
    </div>
  );
};

export default SimpleImageHero;