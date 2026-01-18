function CoverImage({ portada }) {
  return (
    // 1. EL PADRE DEBE TENER LA ALTURA:
    // Para que el resto de la web no se meta debajo, el contenedor padre
    // debe "reservar" el espacio físico con la misma altura que la imagen fija.
    <div className="w-full h-[60vh] md:h-[100vh]">
      
      <div className="fixed top-0 left-0 w-full h-[60vh] md:h-[100vh] -z-10">
        <img
          src={portada}
          alt=""
          // 2. CAMBIO CLAVE: h-full (en vez de h-auto)
          // Esto obliga a la imagen a estirarse hasta abajo.
          // 'object-cover' se encarga de recortar los lados para que no se deforme.
          className="w-full h-full object-cover"
        />
      </div>
      
    </div>
  );
}

export default CoverImage;