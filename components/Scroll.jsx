import { motion } from "framer-motion";

const Scroll = ({ children, className = "" }) => {
  return (
    <motion.div
      className={className} // agregar clases si es necesario
      initial={{ opacity: 0, y: 50 }} // estado inicial: invisible y desplazado hacia abajo
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          y: {
            type: "spring",
            stiffness: 100, // Qué tan fuerte tira el resorte (más alto = más rápido)
            damping: 20, // Qué tanto aire/fricción lo frena (más alto = menos rebote, más suave)
            mass: 1,
          },
          opacity: { duration: 0.5, ease: "easeOut" },
          // Cuánto pesa el elemento
        },
      }}
      viewport={{
        once: true,
        amount: "some", // cuanto debe mostrarse del elemento para activar la animación
        margin: "0px 0px -100px 0px",
      }}
    >
      {children}
    </motion.div>
  );
};

export default Scroll;
