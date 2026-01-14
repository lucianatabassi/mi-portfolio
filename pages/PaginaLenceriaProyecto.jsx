import React, { useEffect } from "react";

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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <header>
        <CoverImage portada={ProyectoPortada} />
      </header>

      <ParrallaxSection>
        <FichaProyectos
          tituloProyecto={
            <>
              {" "}
              Juany <i>mercería, blanquería</i> y <i>lencería</i>{" "}
            </>
          }
          sobreProyecto={
            "Unificación digital de tres rubros comerciales heterogéneos en un catálogo de consulta rápida"
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
              Una <i>solución</i> digital <br /> para un <i>stock diverso</i>
            </>
          }
          imagen={screenPaginas}
        >
          <Paragraph subtitulo={"Desafío"}>
            Crear un catálogo web que integre tres rubros (mercería, blanquería
            y lencería) con artículos de diversas marcas, unificando el diseño
            bajo una misma identidad. Respetando la preferencia de la clienta
            por el contacto directo a través de WhatsApp, evitando la
            complejidad de un e-commerce tradicional.
          </Paragraph>

          <div className="hidden md:block">
            <StarIcon className="w-4  md:w-8" />
          </div>

          <Paragraph subtitulo={"Objetivos"}>
            Mostrar el stock disponible de manera rápida y sencilla. Facilitando
            las consultas personalizadas a través de WhatsApp y promoviendo una
            atención directa con los vendedores.
          </Paragraph>

          <div className="hidden md:block">
            <StarIcon className="w-4 md:w-8" />
          </div>

          <Paragraph subtitulo={"Solución"}>
            Desarrollo de una interfaz minimalista que garantiza una navegación
            rápida e intuitiva para personas de cualquier edad y desde cualquier
            dispositivo. Se incorpora un botón de consultas que redirige
            directamente al WhatsApp del comercio.
          </Paragraph>
        </TwoColumnSection>
        <TwoColumnSection
          titulo={
            <>
              La <i>simplicidad</i> <br /> como <i>estrategia</i>
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

          <Paragraph subtitulo={"Estrategia"}>
            Implementar un diseño pensado para una lectura rápida, simplificando
            la estructura visual para que los artículos sean los protagonistas.
          </Paragraph>
        </TwoColumnSection>
        <DualImages imagen1={boceto1} imagen2={boceto2} />
        <TwoColumnSection
          titulo={
            <>
              <i>Calaridad visual</i> en <br /> un  <i>entorno diverso</i>
            </>
          }
        >
          <Paragraph subtitulo={"Desafío estético"}>
            Lograr cohesión visual entre imágenes provenientes de distintas
            marcas con estilos heterogéneos, de modo que mantengan coherencia
            estética y claridad en la presentación de los productos.
          </Paragraph>

          <div className="hidden md:block">
            <StarIcon className="w-4  md:w-8" />
          </div>

          <Paragraph subtitulo={"Estrategia visual"}>
            Definí una jerarquía consistente a través de secciones claramente
            diferenciadas, módulos específicos y un menú con categorías bien
            estructuradas. Se utilizó una paleta de colores en tonalidades marrones que aporta calidez y coherencia visual, garantizando armonía visual en todo
            el catálogo, junto con una tipografía de alta legibilidad que facilita la lectura.
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
