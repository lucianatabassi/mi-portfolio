import React, { useState, useEffect } from 'react';
import { ShaderGradientComponent } from "../components/ShaderGradientComponent";
import StarIcon from "../components/StarIcon";
import Scroll from "../components/Scroll";

export default function MiHeader() {
  const [textScale, setTextScale] = useState(1);
  const [headerHeight, setHeaderHeight] = useState(100);

  useEffect(() => {
    const handleScroll = () => {
      window.requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        
        const newScale = Math.max(0.50, 1 - scrollY / 1500);
        setTextScale(newScale);

        const newHeaderHeight = Math.max(50, 100 - scrollY / 15);
        setHeaderHeight(newHeaderHeight);
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    // 1. EL TRUCO: Definimos la altura base aquí (60vh móvil, 80vh desktop) 
    // y creamos una variable CSS personalizada [--base-vh] para que React la lea.
    <div className="relative w-full h-[60vh] md:h-[60vh] [--base-vh:60vh] md:[--base-vh:60vh]">
      
      <header 
        className="fixed top-0 left-0 w-full overflow-hidden flex items-center justify-center -z-10"
        style={{ 
          // 2. Multiplicamos nuestra altura base por el porcentaje de scroll (ej: 80vh * 0.90)
          height: `calc(var(--base-vh) * ${headerHeight / 100})`, 
        }}
      >
        
        {/* --- FONDO (SHADER) --- */}
        <div className="absolute inset-0 z-0">
          <ShaderGradientComponent />
        </div>

        <Scroll>
          <div className="absolute inset-0 flex flex-col justify-center items-center z-10 pointer-events-none p-6 md:p-20 md:pt-50 text-left">
          <div 
            style={{ 
              transform: `scale(${textScale})`, 
              // Vuelvo a poner 'left center' aquí para que al achicarse no se vaya al medio
              transformOrigin: 'center', 
            }}
            className="flex flex-col items-start"
          >
            <span className="font-serif font-regular text-white/80 text-lg md:text-2xl">
              ¡Hola! Soy Luciana,
            </span>
            <div className="flex flex-col justify-between">
              <span className="font-sans text-white/90 font-regular text-lg md:text-5xl">
                <i>diseñadora multimedial</i> enfocada en <br/> el
                desarrollo de <i>productos digitales</i> que <br/> existen
                para algo más que verse bien
              </span>
              <StarIcon className="w-5 md:w-8 ml-4 md:mt-3" />
            </div>
          </div>
        </div>

        </Scroll>

        

      </header>
    </div>
  );
}