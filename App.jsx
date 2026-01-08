import "./index.css";

import MenuWeb from "./components/MenuWeb";
import AboutMeIntroduction from "./components/AboutMeIntroduction";
import ContainerImages from "./components/ContainerImages";
import CardProjects from "./components/CardProjects";
import Footer from "./components/Footer";
import StarIcon from "./components/StarIcon";

import fotoProyecto1 from "./assets/Mask group.png";
import fotoProyecto2 from "./assets/Mask group2.png";
import fotoProyecto3 from "./assets/Mask group3.png";
import fotoProyecto4 from "./assets/Mask group4.png";

function App() {
  return (
    <div className="flex flex-col gap-52 min-h-screen w-full">
      <nav>
        <MenuWeb />
      </nav>
      <header>
        <div className="flex pb-50 px-20 justify-center">
          <img src="src/assets/portada.png" alt="" />
        </div>
      </header>

      <section className="w-full">
        <AboutMeIntroduction
          titulo={
            <>
              Sobre <i>mí</i>
            </>
          }
          parrafo="Soy Luciana, una diseñadora multimedial interdisciplinaria de Argentina, con una gran pasión por crear interfaces, experiencias y productos digitales  que existen para algo más que verse bien. 
          Diseño con propósito, curiosidad y una obsesión sana por lo humano, lo interactivo y lo que deja huella."
          
          otroparrafo={
            <>
            <div className="flex justify-center py-4 w-full">
           <StarIcon size="w-12" />
        </div>
              “Aunque mi fuerte es la <i>comunicación visual</i>, mi curiosidad
              por la <i>programación</i> me permite experimentar con la
              interactividad y transformar diseños estáticos en{" "}
              <i>experiencias dinámicas</i>.”
            </>
          }
        />
      </section>

      <ContainerImages
        titulo={
          <>
            <i>Trabajos</i> destacados
          </>
        }
      >
        <CardProjects
          imagen={fotoProyecto1}
          descripcion="Catalogo web diseñado y desarrollado para un local de mercería, blanquería y lencería."
          etiqueta1="DISEÑO WEB"
          etiqueta2="DESARROLLO FRONTEND"
        />

        <CardProjects
          imagen={fotoProyecto2}
          descripcion="Proyecto personal de serie de pósters inspirado en la Fórmula 1."
          etiqueta1="DISEÑO GRÁFICO"
        />
        <CardProjects
          imagen={fotoProyecto3}
          descripcion="Rediseño del menú gastronómico y diseño de flyers para un local de comida rápida."
          etiqueta1="DISEÑO GRÁFICO"
        />
        <CardProjects
          imagen={fotoProyecto4}
          descripcion="“El Fuego De Lo Perdido”. Videojuego de terror en primera persona, basado en el cuento “Las Cosas Que Perdimos En El Fuego” de Mariana Enriquez."
          etiqueta1="DESARROLLO DE VIDEOJUEGOS"
        />
      </ContainerImages>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
