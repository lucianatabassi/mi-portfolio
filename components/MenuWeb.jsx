import { useState } from "react";
import { Link } from "react-router-dom";
import StarIcon from "./StarIcon";

const MENU_ITEMS = [
  { label: "home", path: "/" },
  { label: "proyectos", path: "/proyectos" }, 
  { label: "sobre mí", path: "/sobre-mi" },   
  { label: "contacto", path: "/contacto" },
];

function MenuWeb() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full py-6 px-10 md:pt-10 md:pb-5 md:px-20 z-50 flex justify-end backdrop-blur-sm">
      
      {/*menu hamburguesa */}
      <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white z-50">
        {isOpen ? "✕" : "☰"}
      </button>

      {/* menu desktop + mobile combinados en lógica */}
      <ul className={`
        flex gap-10 items-start
        ${isOpen ? "absolute top-16 right-0 flex-col bg-black p-10 w-full" : "hidden md:flex"} 
      `}>
        {MENU_ITEMS.map((item, index) => (
          <div key={item.label} className="contents">
            
            <li>
                <Link to={item.path} className="hover:text-gray-300 transition" onClick={() => setIsOpen(false)}> 
                {item.label} 
                </Link>
            </li>

           
            
          </div>
        ))}
      </ul>
    </nav>
  );
}

export default MenuWeb;