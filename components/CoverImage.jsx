function CoverImage({ portada }) {
  return (
    // 1. EL PADRE DEBE TENER LA ALTURA:
    // Para que el resto de la web no se meta debajo, el contenedor padre
    // debe "reservar" el espacio físico con la misma altura que la imagen fija.
    <div className="w-full h-80 md:h-screen">
      
      <div className="fixed top-0 left-0 w-full h-80 md:h-screen z-0">
        <img
          src={portada}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      
    </div>
  );
}

export default CoverImage;