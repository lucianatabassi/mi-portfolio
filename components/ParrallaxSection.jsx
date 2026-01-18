function ParrallaxSection({ children }) {
  return (
    <main
      className="
        relative z-10 
        bg-[#00000F] 
        w-full 
        pt-10 pb-20 
        rounded-t-3xl
        
        /* CORRECCIÓN: Quitamos el margen gigante */
        /* Ya no necesitamos mt-[...vh] porque la imagen de arriba ya ocupa ese espacio */
        mt-0
        
        /* OPCIONAL: Si quieres que el borde curvo muerda un poquito la foto, usa margen negativo */
        -mt-10 
      "
    >
      {children}
    </main>
  );
}

export default ParrallaxSection;