function CoverImage({portada}) {
    return(
        <div className="w-full">
          <div className="fixed top-0 left-0 w-full h-[60vh] md:h-[100vh] -z-10">
            <img
            src={portada}
            alt=""
            className="w-full h-auto object-cover"
          />
          </div>
          
        </div>
    );
    
}

export default CoverImage;