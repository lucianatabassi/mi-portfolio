import { motion } from "framer-motion";

const Scroll = ({ children, className = "", delay = 0 }) => {
  return (
    <motion.div
      className={`w-full ${className}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.7,
        delay: delay,
        ease: [0.25, 0.1, 0.25, 1], // easing más natural
      }}
    >
      {children}
    </motion.div>
  );
};

export default Scroll;