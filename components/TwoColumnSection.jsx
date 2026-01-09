import SectionWrapper from "./SectionWrapper";
import SectionTitle from "./SectionTitle";

function TwoColumnSection ({titulo, subtitulo, children}) {
return (
    <SectionWrapper>
        <div className="flex flex-col gap-12 md:flex-row justify-center items-start w-full md:gap-20 lg:gap-96">
            <div className="md:w-1/3">
        <SectionTitle>{titulo}</SectionTitle>
        </div>

        {subtitulo && (
            <div className="text-lg md:text-xl font-sans">
              {subtitulo}
            </div>
          )}

          <div className="flex flex-col gap-12">
            <div >
           {children}
        </div>

          </div>
          

        </div>
        
    </SectionWrapper>
)
}

export default TwoColumnSection;