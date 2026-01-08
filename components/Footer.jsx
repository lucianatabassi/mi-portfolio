import StarIcon from "../components/StarIcon";

function Footer() {
  return (
    <footer className="w-full pt-32 pb-10 px-10 md:px-20">
      
      {/* SECCIÓN SUPERIOR: Título y Botón Principal */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-40 gap-10">
        
        {/* Título: Usamos dangerouslySetInnerHTML si quieres pasar el <br /> 
            o simplemente escríbelo directo aquí para control total */}
        <h2 className="text-6xl md:text-9xl font-serif leading-[0.8] tracking-tighter">
          <span className="italic font-light">Trabajemos</span> <br />
          <div className="flex items-center gap-4">
            <span>juntos</span>
            <StarIcon />
          </div>
        </h2>

        {/* Botón de Contacto con tus imágenes de estrellas */}
        <button className="flex items-center gap-4 px-10 py-5 border border-white rounded-full text-2xl hover:bg-white hover:text-black transition-all">
          <StarIcon className="opacity-70" size="w-4" />
          Contacto
          <StarIcon className="opacity-70" size="w-4" />
        </button>
      </div>

      {/* SECCIÓN INFERIOR: Barra de créditos */}
      <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-gray-800 gap-8 text-[12px] uppercase tracking-[0.2em] text-gray-400">
        
        {/* Redes */}
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition">Behance</a>
          <a href="#" className="hover:text-white transition">LinkedIn</a>
        </div>

        {/* Créditos */}
        <p>Diseñado y desarrollado por mi en React &lt;3</p>

        {/* Copyright */}
        <p>© 2025 Luciana Tabassi</p>
      </div>
    </footer>
  );
}

export default Footer;