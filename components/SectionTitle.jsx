
function SectionTitle({ children, className = "" }) {
  return (
    <div className="w-fit">
      <h2 className={`font-sans font-medium text-4xl md:text-5xl leading-none ${className}`}>
      {children}
    </h2>
    </div>
    
  );
}
export default SectionTitle;