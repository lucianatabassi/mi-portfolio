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
    setIsOpen(false); // Cerramos menú móvil

    if (path.startsWith("#")) {
      const id = path.replace("#", "");
      const element = document.getElementById(id);

      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      } else {
        if (location.pathname !== "/") {
          navigate("/");
          setTimeout(() => {
            const el = document.getElementById(id);
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }, 100);
        }
      }
    } else {
      navigate(path);
      window.scrollTo({ top: 0, behavior: "smooth" }); // Siempre subir al inicio al cambiar página
    }
  };

  return (
    <nav
      className="fixed top-0 left-0 w-full px-10 md:pt-5 md:pb-5 md:px-20 z-50 flex justify-end 
  md:backdrop-blur-md bg-gradient-to-w from-[#00000F]/30  to-transparent"
    >
      {/*menu hamburguesa */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="py-6 md:hidden text-white z-50"
      >
        {isOpen ? "✕" : "☰"}
      </button>

      {/* menu desktop + mobile combinados en lógica */}
      <ul
        className={`
        flex gap-10 items-center
        ${
          isOpen
            ? "absolute right-0 flex-col bg-[#00000F] p-10 w-full"
            : "hidden md:flex"
        } 
      `}
      >
        {MENU_ITEMS.map((item, index) => (
          <div key={item.label} className="contents">
            <li>
              <a
                href={item.path}
                className="relative group cursor-pointer text-gray-500 text-sm md:text-sm tracking-widest font-medium transition-colors"
                onClick={(e) => handleNavigation(e, item.path)}
              >
                {item.label}

                <span
                  className="
          absolute 
          -bottom-2      
          left-0         
          w-0            
          h-[1px]        
          bg-white       
          transition-all duration-300 ease-out 
          group-hover:w-full 
        "
                ></span>
              </a>
            </li>
          </div>
        ))}
      </ul>
    </nav>
  );
}

export default MenuWeb;
