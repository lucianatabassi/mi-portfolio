import React, { useState, useEffect } from "react";
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
  return (
    <div className="w-full h-[40vh] md:h-[75vh] [--base-vh:70vh] md:[--base-vh:70vh]">
      <header className="w-full h-full flex items-center justify-start ">
        <div className="flex flex-col justify-end items-start h-full md:px-20 md:py-10 text-left ">
          <div className="inline-flex items-center">
            <span className="font-sans text-white/80 text-lg md:text-2xl">
              ¡Hola! Soy Luciana —
          {  /*   <motion.div
                whileHover={{ rotate: 180 }}
                transition={{ duration: 0.6 }}
              >
                <StarIcon className="w-5 md:w-12 pointer-events-auto" />
              </motion.div>*/}
            </span>

            <span className="inline-flex items-center text-xl md:text-[80px] gap-2">
              <i>diseñadora multimedial</i>

             
            </span>
          </div>

          <motion.span
            variants={item}
            className="font-sans text-white/90 font-normal text-xl md:text-[80px] leading-snug"
          >
            enfocada en crear{" "}
            <i>
              productos <br /> digitales
            </i>{" "}
            con grandes propositos
          </motion.span>
        </div>
      </header>
      <div className="border-t border-white/10 mt-10 mx-6 md:mx-20"></div>
    </div>
  );
}
