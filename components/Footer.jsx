import SectionWrapper from "./SectionWrapper";
import StarIcon from "../components/StarIcon";

function Footer() {
  return (

    <SectionWrapper> 
      <div className="flex flex-col lg:flex-row justify-between items-center mb-50 gap-10">
        
        <h2 className="text-6xl md:text-9xl font-serif leading-[0.8] tracking-tighter">
          <span> <i>Trabajemos</i></span> <br />
          <div className="flex items-center gap-4">
            <p>juntos</p>
            <StarIcon className="w-15 md:w-30" />
          </div>
        </h2>

          <button className="w-full px-6 py-4 text-xl md:w-auto px-10 py-4 md:text-6xl bg-blue-500 text-white rounded">
          Contacto
        </button>
        
      </div>

  
      <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-gray-800 gap-8 text-[12px] uppercase tracking-[0.2em] text-gray-400">
        
        <div className="flex gap-6">
          <a href="https://www.behance.net/lucianatabassi" className="hover:text-white transition">Behance</a>
          <a href="#" className="hover:text-white transition">LinkedIn</a>
        </div>

        <p>Desarrollado por mi en React &lt;3</p>


        <p>© 2025 Luciana Tabassi</p>
      </div></SectionWrapper>
  )
}

export default Footer;