import SectionWrapper from "./SectionWrapper";

function Video({ videoProyecto }) {
  return (
    <SectionWrapper>
      <div className="w-full">
        <video
          className="w-full h-auto rounded-xl shadow-lg"
          autoPlay
          loop
          muted
          playsInline // Importante para móviles
          controls={true}
        >
          <source 
            src={videoProyecto.src} 
            type={videoProyecto.type || "video/mp4"} 
          />
          
          Tu navegador no soporta videos.
        </video>

      </div>
    </SectionWrapper>
  );
}

export default Video;