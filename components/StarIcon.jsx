import starImg from '../assets/estrella.png'; 

function StarIcon({ className = "", size = "w-6" }) {
  return (
    <img 
      src={starImg} 
      alt="Estrella decorativa"
      className={`${size} object-contain ${className}`} 
    />
  );
}

export default StarIcon;