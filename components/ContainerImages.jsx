import SectionWrapper from "./SectionWrapper";
import SectionTitle from "./SectionTitle";

function ContainerImages({
  titulo,
  children,
  imagen1,
  imagen2,
  imagen3,
  imagen4,
  imagen5,
  imagen6,
  imagen7
}) {

  return (
    <div>
      <SectionWrapper>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-12 items-start">
        
        <div className="md:grid-rows-1">
          <SectionTitle>{titulo}</SectionTitle>
        </div>

        {children}
        {[imagen1, imagen2, imagen3, imagen4, imagen5, imagen6, imagen7].map(
          (img, index) => 
            img && (
              
              <img 
                key={index} 
                src={img} 
                alt="" 
                className="w-full h-auto object-cover" 
              />
            )
        )}
      </div>
      </SectionWrapper>
      
    </div>
      
    
  );
}

export default ContainerImages;