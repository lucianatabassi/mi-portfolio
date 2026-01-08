import SectionWrapper from "./SectionWrapper";
import SectionTitle from "./SectionTitle";

function ContainerImages({
  titulo,
  children,
  imagen1,
  imagen2,
  imagen3,
  imagen4,
}) {
  return (
    <SectionWrapper>
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 gap-x-12 gap-y-10 items-start">
        <div className="titulo-seccion">
          <SectionTitle>{titulo}</SectionTitle>
        </div>

        {children}

        
        {[imagen1, imagen2, imagen3, imagen4].map(
          (img, index) =>
            img && <img key={index} src={img} alt="" />
        )}
      </div>
    </SectionWrapper>
  );
}

export default ContainerImages;
