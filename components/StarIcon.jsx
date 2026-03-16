import starImg from '../assets/Recurso 2 copia.png'; 

function StarIcon({ className = "", size = "w-6" }) {
  return (
    <div className="flex flex-col items-center">
      <img 
      src={starImg} 
      alt="Estrella decorativa"
      className={`${size} object-contain ${className}`} 
    />

    </div>
    
  );
}

export default StarIcon;