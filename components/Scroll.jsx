import { motion } from "framer-motion";

const Scroll = ({ children, className = "" }) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          y: {
            type: "spring",
            stiffness: 80,
            damping: 18,
            mass: 0.8,
          },
          opacity: {
            duration: 0.6,
            ease: "easeOut",
          },
        },
      }}
      viewport={{
        once: true,
        margin: "0px 0px -80px 0px",
      }}
    >
      {children}
    </motion.div>
  );
};

export default Scroll;