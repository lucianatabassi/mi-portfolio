import React, { useState, useEffect } from "react";
import { ShaderGradientComponent } from "../components/ShaderGradientComponent";
import StarIcon from "../components/StarIcon";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 40,
    filter: "blur(8px)",
  },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export default function MiHeader() {
  const [textScale, setTextScale] = useState(1);
  const [textY, setTextY] = useState(0);
  const [headerHeight, setHeaderHeight] = useState(100);

  useEffect(() => {
    const handleScroll = () => {
      window.requestAnimationFrame(() => {
        const scrollY = window.scrollY;

        const progress = Math.min(scrollY / 600, 1);
        const eased = 1 - Math.pow(progress, 2);
        const newScale = 0.6 + eased * 0.4;

        setTextScale(newScale);
        setTextY(scrollY * -0.15);

        const newHeaderHeight = Math.max(50, 100 - scrollY / 15);
        setHeaderHeight(newHeaderHeight);
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative w-full h-[40vh] md:h-[75vh] [--base-vh:70vh] md:[--base-vh:70vh]">
      <header
        className="fixed top-0 left-0 w-full overflow-hidden flex items-center justify-center -z-10"
        style={{
          height: `calc(var(--base-vh) * ${headerHeight / 100})`,
        }}
      >
        {/* <div className="absolute inset-0 z-0">
          <ShaderGradientComponent />
        </div>*/}

        <div className="absolute inset-0 flex flex-col justify-end items-start z-10 pointer-events-none md:px-20 md:py-10 text-left ">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="flex flex-col items-start"
            style={{
              transform: `translateY(${textY}px) scale(${textScale})`,
              transformOrigin: "center",
            }}
          >
            {/* línea 1 */}
            <motion.div
              variants={item}
              className="inline-flex gap-4 md:gap-6 items-center"
            >
              <span className="font-sans text-white/80 text-lg md:text-2xl">
                ¡Hola! Soy Luciana —
              </span>

              <span className="inline-flex items-center text-xl md:text-[80px] gap-2">
                <i>diseñadora multimedial</i>

                <motion.div
                  whileHover={{ rotate: 180 }}
                  transition={{ duration: 0.6 }}
                >
                  <StarIcon className="w-5 md:w-12 pointer-events-auto" />
                </motion.div>
              </span>
            </motion.div>

            {/* línea 2 */}
            <motion.span
              variants={item}
              className="font-sans text-white/90 font-semibold text-xl md:text-[80px] leading-tight"
            >
              enfocada en crear <i>productos <br /> digitales</i>  con grandes
              propositos
            </motion.span>
          </motion.div>
           
        </div>
       
      </header>
      <div className="absolute bottom-0 w-[90%] left-1/2 -translate-x-1/2 border-t border-gray-800 z-20"></div>
    </div>
  );
}
