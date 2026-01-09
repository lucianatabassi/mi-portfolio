import starImg from '../assets/estrella.png'; 

function StarIcon({ className = "", size = "w-6" }) {
  return (
    <div className="flex flex-col items-center py-15 md:py-20">
      <img 
      src={starImg} 
      alt="Estrella decorativa"
      className={`${size} object-contain ${className}`} 
    />

    </div>
    
  );
}

export default StarIcon;