import { Routes, Route } from "react-router-dom";

import SobreMi from "./pages/SobreMi";
import PaginaLenceriaProyecto from "./pages/PaginaLenceriaProyecto";
import "./index.css";

import MenuWeb from "./components/MenuWeb";
import Paragraph from "./components/Paragraph";
import ContainerImages from "./components/ContainerImages";
import CardProjects from "./components/CardProjects";
import Footer from "./components/Footer";
import StarIcon from "./components/StarIcon";
import Scroll from "./components/Scroll";
import ParrallaxSection from "./components/ParrallaxSection";
import MiHeader from "./components/MiHeader";
import SectionWrapper from "./components/SectionWrapper";

import fotoProyecto1 from "./assets/01 Free Macbook Pro Mockup On Round Podium copia.jpg";
import fotoProyecto2 from "./assets/Hand Holding A3 Poster Mockup copia.jpg";
import fotoProyecto3 from "./assets/Mockup copia.jpg";
import fotoProyecto4 from "./assets/iPad Mockup 1.png";

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
            <main className="flex flex-col gap-10">
              <header>
                <MiHeader />
              </header>

              <ParrallaxSection>
                <section id="proyectos">
                  <ContainerImages
                    titulo={
                      <>
                        Proyectos <br /> <i>destacados</i>
                      </>
                    }
                  >
                    <Scroll delay={0.6}>
                      <CardProjects
                        imagen={fotoProyecto1}
                        descripcion="Catálogo Web"
                        año="2025"
                        etiqueta1="DISEÑO WEB"
                        etiqueta2="DESARROLLO FRONTEND"
                        link="/catalogo-web"
                      />
                    </Scroll>
                      <Scroll delay={0.4}>
                      <CardProjects
                        imagen={fotoProyecto4}
                        descripcion="Calendario Fórmula 1"
                        año="2026"
                        etiqueta1="DISEÑO UX/UI"
                        etiqueta2="DESARROLLO FRONTEND"
                      />
                    </Scroll>
                    <Scroll delay={0.6}>
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
                   <Scroll delay={0.4}>
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
                   
                  </ContainerImages>
                </section>

                <SectionWrapper>
                  <div className="flex flex-col justify-center items-center text-center w-full pt-45 md:mt-20 md:pt-50 border-t border-gray-800 ">
                    <StarIcon className="w-5 md:w-8 pb-10" />
                    <Paragraph variant="quote">
                      ❝ Aunque mi fuerte es el <i>diseño visual</i>, mi
                      curiosidad por la <i>programación</i> me permite
                      experimentar con la interactividad y transformar diseños
                      estáticos en experiencias dinámicas.❞
                    </Paragraph>
                    <StarIcon className="w-5 md:w-8 pt-10" />
                  </div>
                </SectionWrapper>
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
