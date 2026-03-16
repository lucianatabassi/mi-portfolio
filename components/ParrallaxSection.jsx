function ParrallaxSection({ children }) {
  return (
    <main
      className="
        relative z-20 
        bg-[#00000F]
        w-full 
        pt-10 pb-20 
        rounded-t-xl
        mt-0

      "
    >
      {children}
    </main>
  );
}

export default ParrallaxSection;