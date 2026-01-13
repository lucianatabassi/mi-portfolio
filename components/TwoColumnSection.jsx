import SectionWrapper from "./SectionWrapper";
import SectionTitle from "./SectionTitle";
import Scroll from "./Scroll";

function TwoColumnSection({
  titulo,
  imagen,
  subtituloProyectos,
  subtitulo,
  children,
}) {
  return (
    <SectionWrapper>
      <div className="flex flex-col gap-12 md:flex-row justify-between items-start w-full md:gap-20 lg:gap-32">
        <div className="flex flex-col gap-20 justify-end md:w-2/5 shrink-0">
        
          <div className="md:w-full">
            <SectionTitle subtitulo={subtituloProyectos}>{titulo}</SectionTitle>
          </div>

          {subtitulo && (
            <div className="text-lg md:text-xl font-sans">{subtitulo}</div>
          )}

          {imagen && (
            <div className="w-full">
              <img src={imagen} alt="" className="w-full h-auto object-cover" />
            </div>
          )}
        </div>

        <div className="flex flex-col gap-12 w-full md:w-2/5">
          <div>{children}</div>
        </div>
      </div>
    </SectionWrapper>
  );
}

export default TwoColumnSection;
