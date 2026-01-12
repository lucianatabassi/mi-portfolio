import SectionWrapper from "./SectionWrapper";
import SectionTitle from "./SectionTitle";

function ImagesSequence({ titulo, imagenes = [] }) {
  return (
    <SectionWrapper>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-3 gap-y-12 items-start">
        <div className="col-span-2 md:col-span-2 lg:col-span-1 ">
          <SectionTitle>{titulo}</SectionTitle>
        </div>

        {imagenes.map((img, index) => (
          <div key={index} className="flex w-full justify-center-safe">
            <img
              src={img}
              alt={`Secuencia ${index + 1}`}
              className="w-4/5 h-auto object-cover"
            />
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}

export default ImagesSequence;
