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
import MiHeader from "./components/MiHeader";
import { ShaderGradientComponent } from "./components/ShaderGradientComponent";

import fotoProyecto1 from "./assets/Mask group.png";
import fotoProyecto2 from "./assets/Mask group2.png";
import fotoProyecto3 from "./assets/Mask group3.png";
import fotoProyecto4 from "./assets/Mask group4.png";
import portada from "./assets/Group 2276.svg";

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
              <header>
                <MiHeader />
              </header>

              <ParrallaxSection>
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
                        descripcion="Catálogo Web"
                        año="2025"
                        etiqueta1="DISEÑO WEB"
                        etiqueta2="DESARROLLO FRONTEND"
                        link="/catalogo-web"
                      />
                    </Scroll>
                    <Scroll>
                      <CardProjects
                        imagen={fotoProyecto2}
                        descripcion="Posters Fórmula 1"
                        año="2025"
                        etiqueta1="DISEÑO GRÁFICO"
                        link={
                          "https://www.behance.net/gallery/231453491/FORMULA-1-POSTERS-DESIGNS"
                        }
                      />
                    </Scroll>
                    <Scroll>
                      <CardProjects
                        imagen={fotoProyecto3}
                        descripcion="Rediseño Menú Gastronómico"
                        año="2024"
                        etiqueta1="DISEÑO GRÁFICO"
                        link={
                          "https://www.behance.net/gallery/231033797/Restaurant-Menu-Flyer-Design"
                        }
                      />
                    </Scroll>
                    <Scroll>
                      <CardProjects
                        imagen={fotoProyecto4}
                        descripcion="Calendario Fórmula 1"
                        año="2026"
                        etiqueta1="DISEÑO UX/UI"
                        etiqueta2="DESARROLLO FRONTEND"
                      />
                    </Scroll>
                  </ContainerImages>
                </section>

                <div className="flex flex-col justify-center items-center text-center w-full mt-20 pt-50 border-t border-gray-800 ">
                  <StarIcon className="w-5 md:w-8" />
                  <Paragraph variant="quote">
                    ❝ Aunque mi fuerte es el <i>diseño visual</i>, mi curiosidad
                    por la <i>programación</i> me permite experimentar con la
                    interactividad y transformar diseños estáticos en
                    experiencias dinámicas.❞
                  </Paragraph>
                  <StarIcon className="w-5 md:w-8" />
                </div>
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
