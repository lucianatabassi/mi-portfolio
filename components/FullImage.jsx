import SectionWrapper from "./SectionWrapper";

function FullImage ({ imagenFull }) {
    return(
        <SectionWrapper>
            <div className="w-full">
                <img src={imagenFull} alt="Imagen completa" className="w-full h-auto rounded-xl" />   
            </div>
        </SectionWrapper>
    );
    
}

export default FullImage;