function ParrallaxSection({ children }) {
  return (
    <main
      className="
        relative z-10 
        bg-[#00000F] 
        w-full 
        pt-10 pb-20 
        rounded-t-3xl
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