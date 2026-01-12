import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import StarIcon from "./StarIcon";

const MENU_ITEMS = [
  { label: "home", path: "/" },
  { label: "proyectos", path: "#proyectos" }, 
  { label: "sobre mí", path: "/sobre-mi" },   
  { label: "contacto", path: "/contacto" },
];

function MenuWeb() {
  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigation = (e, path) => {
    e.preventDefault(); // Evitamos comportamiento por defecto
    setIsOpen(false);   // Cerramos menú móvil

    if (path.startsWith("#")) {
      const id = path.replace("#", "");
      const element = document.getElementById(id);

      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      } 
      else {
        if (location.pathname !== "/") {
          navigate("/");
          setTimeout(() => {
            const el = document.getElementById(id);
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }, 100);
        }
      }
    } 
    
    else {
      navigate(path);
      window.scrollTo({ top: 0, behavior: "smooth" }); // Siempre subir al inicio al cambiar página
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full px-10 md:pt-10 md:pb-5 md:px-20 z-50 flex justify-end bg-gradient-to-b from-black/50 to-transparent">
      
      {/*menu hamburguesa */}
      <button onClick={() => setIsOpen(!isOpen)} className="py-6 md:hidden text-white z-50">
        {isOpen ? "✕" : "☰"}
      </button>

      {/* menu desktop + mobile combinados en lógica */}
      <ul className={`
        flex gap-10 items-center
        ${isOpen ? "absolute right-0 flex-col bg-[#00000F] p-10 w-full" : "hidden md:flex"} 
      `}>
        {MENU_ITEMS.map((item, index) => (
          <div key={item.label} className="contents">
            
           <li>
              <a 
                href={item.path} 
                className="hover:text-gray-300 transition cursor-pointer text-white text-sm tracking-widest" 
                onClick={(e) => handleNavigation(e, item.path)}
              > 
                {item.label} 
              </a>
            </li>

           
            
          </div>
        ))}
      </ul>
    </nav>
  );
}

export default MenuWeb;