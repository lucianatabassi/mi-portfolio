import SectionWrapper from "./SectionWrapper";
import SectionTitle from "./SectionTitle";

function AboutMeIntroduction({ titulo, parrafo, decoracion, otroparrafo }) {
  return (

    <SectionWrapper>
      <div className="flex flex-col gap-12 md:flex-row justify-center items-start w-full md:gap-20 lg:gap-96">
        <div className="md:w-1/3">
        <SectionTitle>{titulo}</SectionTitle>
        </div>

        <div className="flex flex-col gap-12">
          <div className="max-w-3xl">
            <p className="font-sans font-regular text-lg md:text-2xl leading-normal">{parrafo}</p>
          </div>

          {decoracion && (
            <div className="flex justify-center py-4 w-full">{decoracion}</div>
          )

          }
          
          {otroparrafo && (
            <div className="max-w-3xl">
              <p className="font-sans font-semibold text-lg md:text-3xl leading-normal">
                {otroparrafo}
              </p>
            </div>
          )}
        </div>
      </div>

    </SectionWrapper>
  );
}

export default AboutMeIntroduction;
