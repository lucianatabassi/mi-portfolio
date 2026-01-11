import React from "react";

import FichaProyectos from "../components/FichaProyectos";
import TwoColumnSection from "../components/TwoColumnSection";
import SectionTitle from "../components/SectionTitle";
import Paragraph from "../components/Paragraph";
import StarIcon from "../components/StarIcon";

import ProyectoPortada from "../assets/01 Free Macbook Pro Mockup On Round Podium copia.jpg";
import screenPaginas from "../assets/screens-lenceria.png";

function PaginaLenceriaProyecto() {
  return (
    <div>
      <header>
        <div>
          <img src={ProyectoPortada} alt="" />
        </div>
      </header>

      <FichaProyectos
      tituloProyecto={"Catálogo Web"}
      sobreProyecto={"Diseño y desarrollo para un comercio de lencería, mercería y blanquería."}
        rol={
          <>
            Diseño web <br />
            Desarrollo web
          </>
        }
        año={"2025"}
        tiempo={"2 meses"}
      >
        <SectionTitle
          subtitulo={
            "Diseño y desarrollo del catalogo web para un comercio de lencería, mercería y blanquería"
          }
        >
          {" "}
          {"Catalog Web"}
        </SectionTitle>
      </FichaProyectos>
      <TwoColumnSection
        titulo={
          <>
            Una <i>solución</i> digital <br /> para un <i>stock diverso</i>
          </>
        }

        imagen={screenPaginas}
        
      >
        <Paragraph subtitulo={"Desafío"}>
          Crear un catálogo web integrando tres rubros (mercería, blanquería y
          lencería) con diversas marcas, unificando el diseño bajo una misma
          identidad.
        </Paragraph>

        <StarIcon className="w-8 md:w-12" />

        <Paragraph subtitulo={"Objetivos"}>
          Mostrar el stock disponible de manera rápida y sencilla. Priorizando
          el contacto directo vía WhatsApp, eliminando la complejidad de un
          e-commerce tradicional para facilitar consultas personalizadas.
        </Paragraph>

        <StarIcon className="w-8 md:w-12" />

        <Paragraph subtitulo={"Solución"}>
          Interfaz minimalista que garantiza una navegación rápida para personas
          de cualquier edad y desde cualquier dispositivo.
        </Paragraph>

           
      </TwoColumnSection>
    </div>
  );
}
export default PaginaLenceriaProyecto;
