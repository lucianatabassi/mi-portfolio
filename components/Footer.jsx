import SectionWrapper from "./SectionWrapper";
import StarIcon from "../components/StarIcon";
import Scroll from "../components/Scroll";

function Footer() {
  return (
    <footer className="w-full bg-[#00000F]">
      <SectionWrapper>
        <div className="flex flex-col mb-20 lg:flex-row justify-between md:items-center md:mb-40 gap-10">
          <Scroll>
            <h2 className="text-6xl md:text-9xl font-serif leading-tighter tracking-tighter">
              <span>
                {" "}
                <i>Trabajemos</i>
              </span>{" "}
              <br />
              <div className="flex gap-4">
                <p>juntos</p>
                <StarIcon className="w-15 md:w-30" />
              </div>
            </h2>
          </Scroll>

          <Scroll>
            <button className="w-full px-6 py-4 text-xl border rounded-full  md:w-auto px-10 py-4 md:text-4xl">
              <a href=""> Contacto</a>
             
            </button>
          </Scroll>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-gray-800 gap-8 text-[12px] uppercase tracking-[0.2em] text-gray-400">
          <div className="flex gap-6">
            <a
              href="https://www.behance.net/lucianatabassi"
              className="hover:text-white transition"
            >
              Behance
            </a>
            <a href="#" className="hover:text-white transition">
              LinkedIn
            </a>
          </div>

          <p>Desarrollado por mi en React &lt;3</p>

          <p>© 2025 Luciana Tabassi</p>
        </div>
      </SectionWrapper>
    </footer>
  );
}

export default Footer;
