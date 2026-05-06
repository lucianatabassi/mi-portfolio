import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import Paragraph from "../components/Paragraph";

const items = [
  {
    value: "notifications",
    trigger: "Diseño UX / UI",
    content:
      "Diseño de aplicaciones móviles y sitios web. Sitemaps, user flows, wireframes y prototipos. Análisis de necesidades de los usuarios Y pruebas de usabilidad. "
      },
  {
    value: "privacy",
    trigger: "Diseño Gráfico",
    content:
      " Diseño de piezas promocionales (flyers, posters, anuncios, invitaciones, tarjetas personales). Diseño de piezas para redes sociales y medios digitales. Diseño editorial (menús gastronómicos, folletos, portadas, infografías).",
  },
  {
    value: "billing",
    trigger: "Desarrollo Frontend",
    content:
      "Maquetación con HTML, CSS y JavaScript. Desarrollo responsive para distintos dispositivos y resoluciones. conocimientos sobre react, tailwind.css y  Bootstrap.",
  },
  {
    value: "juegos",
    trigger: "dISEÑO & DESARROLLO DE VIDEOJUEGOS",
    content:
      "Conocimientos en Programación de comportamientos y lógica en Unity. Diseño de interfaces y HUDs adaptadOs al entorno del juego.",
  }
]

export function AccordionMultiple() {
  return (
    <Accordion className="max-w-7xl" defaultValue={["notifications"]}>
      {items.map((item) => (
        <AccordionItem key={item.value} value={item.value}>
          <AccordionTrigger className="font-sans font-light text-[40px] uppercase tracking-normal py-5">{item.trigger}</AccordionTrigger>
          <AccordionContent>
          <Paragraph> {item.content}</Paragraph>
           
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
export default AccordionMultiple;
