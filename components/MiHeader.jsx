import React, { useState, useEffect } from 'react';
import { ShaderGradientComponent } from "../components/ShaderGradientComponent";

export default function MiHeader() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Usamos window.innerHeight para que el cambio ocurra 
      // cuando el usuario haya scrolleado la mitad de su pantalla
      if (window.scrollY > window.innerHeight / 2) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
   
    <header className="relative w-full h-[200vh]">
      
      {/* 2. CONTENEDOR STICKY: Se pega al techo (top-0) y ocupa toda la pantalla (h-screen). 
           Se quedará fijo hasta que el usuario termine de scrollear los 200vh de arriba. */}
      <div className="sticky top-0 w-full h-screen overflow-hidden">
        
        {/* Capa de Texto */}
        <div className="absolute inset-0 flex flex-col justify-center items-start z-10 pointer-events-none p-6 md:p-20">
          {isScrolled ? (
            // --- TEXTO AL SCROLLEAR ---
            <div className="animate-fade-in flex flex-col transition-opacity duration-500">
                 <span className="font-sans text-white/90 font-semibold text-7xl">
               Me enfoco en crear interfaces, experiencias y productos digitales que existen para algo más que verse bien
              </span>
            </div>
          ) : (
            // --- TEXTO ORIGINAL ---
            <div className="animate-fade-in flex flex-col transition-opacity duration-500">
              <span className="font-serif font-regular text-white/80 text-3xl">
                Soy Luciana,
              </span>
              <span className="font-sans text-white/90 font-semibold text-7xl">
                product designer <i>&</i>
              </span>
              <span className="font-sans text-white/90 font-semibold text-7xl">
                diseñadora multimedial
              </span>
            </div>
          )}
        </div>

        {/* Capa de Fondo (Shader) */}
        <div className="absolute inset-0 z-0">
          <ShaderGradientComponent /> 
        </div>

      </div>
    </header>
  );
}