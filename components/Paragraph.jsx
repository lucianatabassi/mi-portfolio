import Scroll from "../components/Scroll";

function Paragraph({ subtitulo, children, variant = "normal" }) {

  const baseStyle = "py-8 font-sans leading-relaxed max-w-2xl flex flex-col gap-2 md:py-3 md:gap-3";

  const styles = {
    normal: "font-regular text-base md:text-lg text-gray-200", 
    quote: "text-xl md:text-3xl font-semibold italic", 
  };
  return (
    <Scroll>
    <div className={baseStyle}>
      {subtitulo && (<h4 className="text-gray-500 font-bold text-xs md:text-sm uppercase tracking-widest">{subtitulo}</h4>)}

      <p className={styles[variant]}>{children}</p>
    </div>
    </Scroll>
  );
}

export default Paragraph;
