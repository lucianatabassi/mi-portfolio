import SectionWrapper from "./SectionWrapper";
import StarIcon from "../components/StarIcon";
import Scroll from "../components/Scroll";

function Footer() {
  return (
    <footer className="w-full bg-[#00000F]">
      <SectionWrapper>
        <div className="flex flex-col mb-20 lg:flex-row justify-between md:items-center md:mb-40 gap-10 pt-50 border-t border-gray-800">
          <Scroll>
            <h2 className="text-6xl md:text-8xl font-serif leading-tighter tracking-tighter">
              <i>Trabajemos</i> <br />
              
              {/* --- ENVOLVEMOS "JUNTOS" Y EL ÍCONO AQUÍ --- */}
              <span className="inline-flex items-center gap-3 md:gap-5">
                juntos
                {/* Puedes ajustar el w-10 o w-16 para que la estrella quede del tamaño exacto que buscas */}
                <StarIcon className="w-10 md:w-20" /> 
              </span>
              
            </h2>
          </Scroll>

          <Scroll>
            {/* Convertimos el <a> en un flex container con 'w-fit' para que la línea mida exacto lo que ocupa el contenido */}
            <a 
              href="mailto:tu-email@ejemplo.com" 
              className="relative group pb-1 font-sans font-bold text-xl md:text-5xl uppercase text-white/90 hover:text-white transition-colors flex items-center gap-2 w-fit"
            >
              Contacto
              
              {/* --- ÍCONO DE FLECHA --- */}
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                // Esta clase hace que la flecha salte en diagonal al hacer hover
                className="transition-transform duration-300 ease-out group-hover:translate-x-1 group-hover:-translate-y-1 w-5 h-5 md:w-10 md:h-10"
              >
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>

              {/* --- LÍNEA ANIMADA --- */}
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 ease-out group-hover:w-full"></span>
            </a>
          </Scroll>
        </div>

        {/* ... el resto de tu código de abajo queda igual ... */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-gray-800 gap-8 text-[12px] uppercase tracking-[0.2em] text-gray-400">
          <div className="flex gap-6">
            <a
              href="https://www.behance.net/lucianatabassi"
              className="hover:text-white transition"
            >
              Behance
            </a>
            <a href="#" className="hover:text-white transition">
              LinkedIn
            </a>
          </div>

          <p>Desarrollado con React &lt;3</p>

          <p>© 2026 Luciana Tabassi</p>
        </div>
      </SectionWrapper>
    </footer>
  );
}

export default Footer;