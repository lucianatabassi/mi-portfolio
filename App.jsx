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
import Scroll from "./components/Scroll";
import ParrallaxSection from "./components/ParrallaxSection";
import CoverImage from "./components/CoverImage";
import { ShaderGradientComponent } from "./components/ShaderGradientComponent";

import fotoProyecto1 from "./assets/Mask group.png";
import fotoProyecto2 from "./assets/Mask group2.png";
import fotoProyecto3 from "./assets/Mask group3.png";
import fotoProyecto4 from "./assets/Mask group4.png";
import portada from "./assets/0001.png";

function App() {
  return (
    <div className="flex flex-col md:min-h-screen w-full">
      <nav>
        <MenuWeb />
      </nav>

      <Routes>
        <Route
          path="/"
          element={
            <main className="flex flex-col gap-30">
              <header className="relative ">
                {/* <CoverImage portada={portada} />*/}
                <div className="absolute inset-0 flex flex-col justify-center items-center z-0 pointer-events-none md: p-20">
                  <span className="font-serif font-medium text-white/80 text-5xl">
                    Luciana Tabassi
                  </span>
                  <span className="font-serif text-white/80  font-semibold text-5xl">
                    multimedial design &
                  </span>
                  <span className="font-serif text-white/80 font-semibold text-5xl">
                    product design
                  </span>
                </div>
                <ShaderGradientComponent />
              </header>

              <ParrallaxSection>
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
                      experiencias y productos digitales que existen para algo
                      más que verse bien. Diseño con propósito, curiosidad y un
                      enfoque consciente por lo humano, lo interactivo y lo que
                      deja huella.
                    </Paragraph>

                    <Scroll>
                      <StarIcon className="w-8 md:w-12" />
                    </Scroll>

                    <Paragraph variant="quote">
                      {" "}
                      “Aunque mi fuerte es la <i>comunicación visual</i>, mi{" "}
                      <i>curiosidad</i> por la <i>programación</i> me permite
                      experimentar con la interactividad y transformar diseños
                      estáticos en experiencias dinámicas.”
                    </Paragraph>
                  </TwoColumnSection>
                </section>
                <section id="proyectos">
                  <ContainerImages
                    titulo={
                      <>
                        Trabajos <br /> <i>destacados</i>
                      </>
                    }
                  >
                    <Scroll>
                      <CardProjects
                        imagen={fotoProyecto1}
                        descripcion="Catálogo web diseñado y desarrollado para un comercio de mercería, blanquería y lencería."
                        etiqueta1="DISEÑO WEB"
                        etiqueta2="DESARROLLO FRONTEND"
                        link="/catalogo-web"
                      />
                    </Scroll>
                    <Scroll>
                      <CardProjects
                        imagen={fotoProyecto2}
                        descripcion="Proyecto personal de serie de pósters inspirado en la Fórmula 1."
                        etiqueta1="DISEÑO GRÁFICO"
                        link={
                          "https://www.behance.net/gallery/231453491/FORMULA-1-POSTERS-DESIGNS"
                        }
                      />
                    </Scroll>
                    <Scroll>
                      <CardProjects
                        imagen={fotoProyecto3}
                        descripcion="Rediseño del menú gastronómico y diseño de flyers para un local de comida rápida."
                        etiqueta1="DISEÑO GRÁFICO"
                        link={
                          "https://www.behance.net/gallery/231033797/Restaurant-Menu-Flyer-Design"
                        }
                      />
                    </Scroll>
                    <Scroll>
                      <CardProjects
                        imagen={fotoProyecto4}
                        descripcion="Widget de escritorio que muestra información sobre las próximas carreras de Fórmula 1, incluyendo telemetría en tiempo real."
                        etiqueta1="DISEÑO UX/UI"
                        etiqueta2="DESARROLLO FRONTEND"
                      />
                    </Scroll>
                  </ContainerImages>
                </section>
              </ParrallaxSection>
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
