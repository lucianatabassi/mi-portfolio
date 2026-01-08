import { useState } from "react";
import { Link } from "react-router-dom";
import StarIcon from "./StarIcon";

const MENU_ITEMS = [
  { label: "HOME", path: "/" },
  { label: "PROYECTOS", path: "/proyectos" }, 
  { label: "SOBRE MI", path: "/sobre-mi" },   
  { label: "CONTACTO", path: "/contacto" },
];

function MenuWeb() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full py-10 px-10 md:px-20 relative z-50 flex justify-end">
      
      {/*menu hamburguesa */}
      <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white z-50">
        {isOpen ? "✕" : "☰"}
      </button>

      {/* menu desktop + mobile combinados en lógica */}
      <ul className={`
        flex gap-10 items-center text-white
        ${isOpen ? "absolute top-16 right-0 flex-col bg-black p-10 w-full" : "hidden md:flex"} 
      `}>
        {MENU_ITEMS.map((item, index) => (
          <div key={item.label} className="contents">
            
            <li>
                <Link to={item.path} className="hover:text-gray-300 transition" onClick={() => setIsOpen(false)}> 
                {item.label} 
                </Link>
            </li>

            {index < MENU_ITEMS.length - 1 && (
              <span className="hidden md:block"> <StarIcon /> </span>
            )}
            
          </div>
        ))}
      </ul>
    </nav>
  );
}

export default MenuWeb;