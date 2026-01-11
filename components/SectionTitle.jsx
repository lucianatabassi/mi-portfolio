
function SectionTitle({ children, subtitulo, className = "" }) {
  return (
    <div className="w-fit">
      <h2 className={`font-sans font-medium text-4xl md:text-5xl leading-none ${className}`}>
      {children}
    </h2>
    {subtitulo && (
      <div className="text-lg md:text-xl font-sans mt-4">
        {subtitulo}
      </div>
    )}
    </div>
    
  );
}
export default SectionTitle;