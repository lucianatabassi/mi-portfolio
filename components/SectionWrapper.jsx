
function SectionWrapper({ children, className = "", id = "" }) {
  return (
    <section 
      id={id}
      className={`w-full py-20 px-8 md:px-20 ${className}`}
    >
      {children}
    </section>
  );
}
export default SectionWrapper;