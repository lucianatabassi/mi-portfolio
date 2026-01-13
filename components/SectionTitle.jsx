import Scroll from "../components/Scroll";


function SectionTitle({ children, subtitulo, className = "" }) {
  return (
    <div className="w-fit">
      <Scroll>
      <h2 className={`font-sans font-medium text-4xl md:text-5xl leading-none ${className}`}>
      {children}
    </h2>
      </Scroll>
    {subtitulo && (
      <Scroll>
      <div className="text-lg md:text-xl font-sans mt-4">
        {subtitulo}
      </div>
       </Scroll>
    )}
    </div>
    
  );
}
export default SectionTitle;