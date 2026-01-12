import React from "react";

import CoverImage from "../components/CoverImage";
import FichaProyectos from "../components/FichaProyectos";
import TwoColumnSection from "../components/TwoColumnSection";
import Paragraph from "../components/Paragraph";
import ImagesSequence from "../components/ImagesSequence";
import DualImages from "../components/DualImages";
import ParrallaxSection from "../components/ParrallaxSection";
import StarIcon from "../components/StarIcon";

import ProyectoPortada from "../assets/01 Free Macbook Pro Mockup On Round Podium copia.jpg";
import screenPaginas from "../assets/screens-lenceria.png";

import boceto1 from "../assets/boceto1.png";
import boceto2 from "../assets/boceto2.png";
import mobile1 from "../assets/1.png";
import mobile2 from "../assets/2.png";
import mobile3 from "../assets/3.png";
import mobile4 from "../assets/4.png";
import mobile5 from "../assets/5.png";
import mobile6 from "../assets/6.png";
import mobile7 from "../assets/7.png";

function PaginaLenceriaProyecto() {
  const listaScreens = [
    mobile1,
    mobile2,
    mobile3,
    mobile4,
    mobile5,
    mobile6,
    mobile7,
  ];
  return (
    <div>
      <header>
        <CoverImage portada={ProyectoPortada} />
      </header>

      <ParrallaxSection>
        <FichaProyectos
          tituloProyecto={<> Catálogo <i>Multirubro</i> </>}
          sobreProyecto={
            "Unificación digital de tres rubros comerciales heterogéneos en una catálogo de consulta rápida"
          }
          rol={
            <>
              Diseño web <br />
              Desarrollo web
            </>
          }
          año={"2025"}
          tiempo={"2 meses"}
        ></FichaProyectos>
        <TwoColumnSection
          titulo={
            <>
              Una <i>solución</i> digital para un <i>stock diverso</i>
            </>
          }
          imagen={screenPaginas}
        >
          <Paragraph subtitulo={"Desafío"}>
            Crear un catálogo web integrando tres rubros (mercería, blanquería y
            lencería) con diversas marcas, unificando el diseño bajo una misma
            identidad.
          </Paragraph>

          <div className="hidden md:block">
            <StarIcon className="w-4  md:w-8" />
          </div>

          <Paragraph subtitulo={"Objetivos"}>
            Mostrar el stock disponible de manera rápida y sencilla. Priorizando
            el contacto directo vía WhatsApp, eliminando la complejidad de un
            e-commerce tradicional para facilitar consultas personalizadas.
          </Paragraph>

          <div className="hidden md:block">
            <StarIcon className="w-4md:w-8" />
          </div>

          <Paragraph subtitulo={"Solución"}>
            Interfaz minimalista que garantiza una navegación rápida para
            personas de cualquier edad y desde cualquier dispositivo.
          </Paragraph>
        </TwoColumnSection>
        <TwoColumnSection
          titulo={
            <>
              La <i>claridad</i> por sobre la <i>saturación</i>
            </>
          }
        >
          <Paragraph subtitulo={"Insight"}>
            Identifiqué que la competencia apuesta por diseños complejos, con
            demasiada información, dirigidos a un público joven y técnico. Mi
            propuesta toma el camino opuesto: prioricé la claridad y la
            simplicidad para eliminar la confusión en usuarios poco
            familiarizados con la tecnología, garantizando una experiencia
            inclusiva para todas las edades.
          </Paragraph>

          <div className="hidden md:block">
            <StarIcon className="w-4 md:w-8" />
          </div>

          <Paragraph subtitulo={"Decisión"}>
            Implementar un diseño de baja fatiga cognitiva, simplificando la
            estructura visual para que el contenido sea el protagonista.
          </Paragraph>
        </TwoColumnSection>
        <DualImages imagen1={boceto1} imagen2={boceto2} />
        <TwoColumnSection
          titulo={
            <>
              <i>Armonía visual</i> para marcas <i>heterogéneas</i>
            </>
          }
        >
          <Paragraph subtitulo={"Desafío"}>
            Lograr cohesión visual entre imágenes de orígenes diversos.
          </Paragraph>

          <div className="hidden md:block">
            <StarIcon className="w-4  md:w-8" />
          </div>

          <Paragraph subtitulo={"Estrategia"}>
            Creé una jerarquía consistente con secciones claras, módulos
            específicos y un menú con categorías claras. Con una paleta de
            colores cohesiva para unificar la estética de marcas heterogéneas,
            garantizando armonía visual en todo el catálogo y una tipografía de
            alta legibilidad que reduzca la carga cognitiva.
          </Paragraph>

          <div className="hidden md:block">
            <StarIcon className="w-4 md:w-8" />
          </div>

          <Paragraph subtitulo={"Resultado"}>
            Una experiencia de usuario directa que evita distracciones y guía al
            cliente hacia la consulta inmediata.
          </Paragraph>
        </TwoColumnSection>

        <ImagesSequence
          titulo={
            <>
              Propuesta <i>adaptable</i> a <i>todos</i> los <i>dispositivos</i>
            </>
          }
          imagenes={listaScreens}
        ></ImagesSequence>
      </ParrallaxSection>
    </div>
  );
}
export default PaginaLenceriaProyecto;
