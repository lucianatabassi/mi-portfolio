import SectionWrapper from "./SectionWrapper";

function DualImages({imagen1, imagen2}) {
  return (
    <SectionWrapper>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
        <div className="w-full">
          <img src={imagen1} alt="" className="w-full h-auto object-cover" />
        </div>

        <div className="w-full">
          <img src={imagen2} alt="" className="w-full h-auto object-cover" />
        </div>
      </div>
    </SectionWrapper>
  );
}

export default DualImages;
