import React from "react";
import TwoColumnSection from "../components/TwoColumnSection";
import Paragraph from "../components/Paragraph";
import Scroll from "../components/Scroll";
import AccordionMultiple from "../components/AccordionMultiple";
import "../index.css";

function SobreMi() {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
  return (
    <div>
      <TwoColumnSection
        titulo={
          <>
            Diseño <i>experiencias</i> que <i>se sienten</i>, se usan y{" "}
            <i>se viven</i>
          </>
        }
      >
        <Scroll>
          <Paragraph>
            Soy Luciana Tabassi, Diseñadora Multimedial interdisciplinaria de
            Argentina. <br />
            <br />
            Mi enfoque combina la <i>creatividad</i> del diseño gráfico y la{" "}
            <i>psicología</i> del diseño UX/UI. Entiendo el diseño no solo como
            algo que se ve, sino como algo que se siente y se vive. De hecho, no
            solo diseño interfaces; me apasiona{" "}
            <i>darles vida a través del código</i>.
            <br />
            <br />
            Aunque mi fuerte es la comunicación visual, mi curiosidad por la{" "}
            <i>programación</i> me permite experimentar con la interactividad y
            transformar diseños estáticos en <i>experiencias dinámicas</i>. Esto
            me permite <i> “hablar ambos lenguajes”</i>, asegurando que ninguna
            idea se pierda en la implementación y que el resultado final sea tan
            fiel al diseño. <br />
            <br />
            Me enfocó en la resolución de problemas mediante soluciones de
            diseño centradas en el usuario, creando experiencias digitales que
            no solo sean visualmente atractivas, sino también intuitivas y
            funcionales. <br />
            <br />
            Me considero una eterna curiosa de la cultura digital, mi verdadero
            motor es el aprendizaje constante: me motiva dominar nuevas
            tecnologías y conocimientos que me permitan resolver con éxito los
            desafíos del entorno digital actual.
          </Paragraph>
        </Scroll>
        <Scroll>
          <div className="py-3 md:py-10">
            <button className="w-1/2  text-lg border rounded-full  md:w-auto py-2 md:px-15 md:text-w-md">
              Curriculum
            </button>
          </div>
        </Scroll>
      </TwoColumnSection>

      <TwoColumnSection
        titulo={
          <>
            Mis <i>habilidades</i>
          </>
        }
      >
        <AccordionMultiple />
      </TwoColumnSection>
    </div>
  );
}

export default SobreMi;
