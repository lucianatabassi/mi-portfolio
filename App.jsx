import { Routes, Route } from "react-router-dom";

import SobreMi from "./pages/SobreMi";
import PaginaLenceriaProyecto from "./pages/PaginaLenceriaProyecto";
import "./index.css";

import MenuWeb from "./components/MenuWeb";
import TwoColumnSection from "./components/TwoColumnSection";
import Paragraph from "./components/Paragraph";
import ContainerImages from "./components/ContainerImages";
import CardProjects from "./components/CardProjects";
import Footer from "./components/Footer";
import StarIcon from "./components/StarIcon";

import fotoProyecto1 from "./assets/Mask group.png";
import fotoProyecto2 from "./assets/Mask group2.png";
import fotoProyecto3 from "./assets/Mask group3.png";
import fotoProyecto4 from "./assets/Mask group4.png";
import portada from "./assets/portada.png";

function App() {
  return (
    <div className="flex flex-col gap-30 md: gap-30 min-h-screen w-full">
      <nav>
        <MenuWeb />
      </nav>

      <Routes>
        <Route
          path="/"
          element={
            <main className="flex flex-col gap-30">
              <header>
                <div className="flex pb-50 justify-center">
                  <img src={portada} alt="" />
                </div>
              </header>
              <section className="w-full">
                <TwoColumnSection
                  titulo={
                    <>
                      Sobre <i>mí</i>
                    </>
                  }
                >
                  <Paragraph>

                    Soy Luciana, una diseñadora multimedial interdisciplinaria
                    de Argentina, con una gran pasión por crear interfaces,
                    experiencias y productos digitales que existen para algo más
                    que verse bien. Diseño con propósito, curiosidad y una
                    obsesión sana por lo humano, lo interactivo y lo que deja
                    huella.
                  </Paragraph>
                  
                    <StarIcon className="w-8 md:w-12" />

                  <Paragraph variant="quote">
                    “Aunque mi fuerte es la comunicación visual, mi curiosidad por la programación me permite experimentar con la interactividad y transformar diseños estáticos en experiencias dinámicas.”
                    </Paragraph>                 
                </TwoColumnSection>
              </section>

              <ContainerImages
                titulo={
                  <>
                    <i>Trabajos</i> <br /> destacados
                  </>
                }
              >
                <CardProjects
                  imagen={fotoProyecto1}
                  descripcion="Catalogo web diseñado y desarrollado para un local de mercería, blanquería y lencería."
                  etiqueta1="DISEÑO WEB"
                  etiqueta2="DESARROLLO FRONTEND"
                  link="/catalogo-web"
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
            </main>
          }
        />

        <Route path="/sobre-mi" element={<SobreMi />} />
        <Route path="/catalogo-web" element={<PaginaLenceriaProyecto />} />
      </Routes>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
