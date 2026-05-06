import Scroll from "../components/Scroll";

function Paragraph({ subtitulo, children, variant = "normal" }) {

  const baseStyle = "py-5 font-sans leading-loose max-w-5xl flex flex-col gap-2 md:py-3 md:gap-3";

  const styles = {
    normal: "font-regular text-base md:text-xl text-gray-200", 
    quote: "font-semibold text-xl md:text-5xl", 
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
