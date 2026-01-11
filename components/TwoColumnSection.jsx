import SectionWrapper from "./SectionWrapper";
import SectionTitle from "./SectionTitle";

function TwoColumnSection ({titulo, imagen, subtituloProyectos, subtitulo, children}) {
return (
    <SectionWrapper>
        <div className="flex flex-col gap-12 md:flex-row justify-between items-start w-full md:gap-20 lg:gap-96">

          <div className="flex flex-col gap-20 justify-end">
<div className="md:w-full">
        <SectionTitle subtitulo={subtituloProyectos}>{titulo}</SectionTitle>
        </div>

        
{subtitulo && (
            <div className="text-lg md:text-xl font-sans">
              {subtitulo}
            </div>
          )}

          
          {imagen && (
            <div className="">
              <img src={imagen} alt="" className="w-full md:w-2xl"/>
            </div>
          )}
          </div>
            
        
        
          

          <div className="flex flex-col gap-12 md:w-xl">
            <div >
           {children}
        </div>

          </div>
          

        </div>
        
    </SectionWrapper>
)
}

export default TwoColumnSection;