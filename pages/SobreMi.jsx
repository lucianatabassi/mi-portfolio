import React from "react";
import TwoColumnSection from "../components/TwoColumnSection";
import Paragraph from "../components/Paragraph";
import ContainerImages from "../components/ContainerImages";

import skill1 from "../assets/skill1.png";
import skill2 from "../assets/skill2.png";
import skill3 from "../assets/skill3.png";
import skill4 from "../assets/skill4.png";

function SobreMi() {
  return (
    <div>
      <TwoColumnSection
        titulo={
          <>
            <i>Diseñadora multimedial</i> interdisciplinaria.
          </>
        }
      >
        <Paragraph>
          Hola, soy Luciana Tabassi, Diseñadora Multimedial. <br />
          <br />
          Mi enfoque combina la <i>creatividad</i> del diseño gráfico y la{" "}
          <i>psicología</i> del diseño UX/UI. No solo diseño interfaces; me
          apasiona <i>darles vida a través del código</i>. Entiendo el diseño no
          solo como algo que se ve, sino como algo que se siente y se vive.{" "}
          <br />
          <br />
          Aunque mi fuerte es la comunicación visual, mi curiosidad por la{" "}
          <i>programación</i> me permite experimentar con la interactividad y
          transformar diseños estáticos en <i>experiencias dinámicas</i>. Esto
          me permite “hablar ambos lenguajes”, asegurando que ninguna idea se
          pierda en la implementación y que el resultado final sea tan fiel al
          diseño. <br />
          Me enfocó en la resolución de problemas mediante soluciones de diseño
          centradas en el usuario, creando experiencias digitales que no solo
          sean visualmente atractivas, sino también intuitivas y funcionales. <br />
          <br />
          Me considero una eterna curiosa de la cultura digital, mi verdadero
          motor es el aprendizaje constante: me motiva dominar nuevas
          tecnologías y conocimientos que me permitan resolver con éxito los
          desafíos del entorno digital actual.
        </Paragraph>
      </TwoColumnSection>

      <ContainerImages
      titulo={
          <>
          Mis <br/> <i>habilidades</i>
          </>
        }

        imagen1={skill1}
        imagen2={skill2}
        imagen3={skill3}
        imagen4={skill4}
      >
        </ContainerImages>
        
      

    

    </div>

    
  );
}

export default SobreMi;
