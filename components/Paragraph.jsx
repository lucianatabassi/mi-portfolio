function Paragraph({ subtitulo, children, variant = "normal" }) {

  const baseStyle = "font-sans leading-normal max-w-4xl";

  const styles = {
    normal: "font-sans font-regular text-lg md:text-xl", // Tu estilo de siempre
    quote: "text-xl md:text-3xl font-semibold", // El nuevo estilo para la cita
  };
  return (
    <div className={baseStyle}>
      {subtitulo && (<h3 className="text-xl md:text-2xl">{subtitulo}</h3>)}

      <p className={styles[variant]}>{children}</p>
    </div>
  );
}

export default Paragraph;
