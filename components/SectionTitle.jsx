
function SectionTitle({ children, className = "" }) {
  return (
    <h2 className={`font-sans font-medium text-4xl md:text-6xl leading-none ${className}`}>
      {children}
    </h2>
  );
}
export default SectionTitle;