import TwoColumnSection from "./TwoColumnSection";
import StarIcon from "./StarIcon";
import Scroll from "../components/Scroll";

function FichaProyectos({
  children,
  tituloProyecto,
  sobreProyecto,
  rol,
  año,
  tiempo,
}) {
  return (
    <TwoColumnSection
      titulo={tituloProyecto}
      subtituloProyectos={sobreProyecto}
    >
      {/* CAMBIO CLAVE:
          - grid-cols-2: Se mantiene en Móvil Y Tablet.
          - lg:flex: Recién en Desktop (Laptop) se pone horizontal.
          - gap-x-4: Un poco más de aire horizontal.
      */}

      <Scroll>
      <div className="grid grid-cols-2 lg:flex lg:flex-row lg:items-center gap-y-6 gap-x-6 lg:gap-10 w-full">
 
        {/* ROL: Ocupa 2 columnas en móvil/tablet para tener espacio */}
        <div className="col-span-2 lg:col-span-auto flex flex-col gap-1">
          <h3 className="text-gray-400 text-xs uppercase tracking-widest">Rol</h3>
          <p className="text-white font-light whitespace-pre-line leading-normal">
            {rol}
          </p>
        </div>

        {/* ESTRELLA 1: Oculta en móvil/tablet, visible en Desktop */}
        <div className="hidden lg:block text-gray-500">
          <StarIcon />
        </div>

        {/* AÑO */}
        <div className="flex flex-col gap-1">
          <h3 className="text-gray-400 text-xs uppercase tracking-widest">Año</h3>
          {/* CORREGIDO: Había un error de tipeo 'text-whitefont-light' -> 'text-white font-light' */}
          <p className="text-white font-light">{año}</p>
        </div>

        {/* ESTRELLA 2: Oculta en móvil/tablet, visible en Desktop */}
        <div className="hidden lg:block text-gray-500">
          <StarIcon />
        </div>

        {/* TIEMPO */}
        <div className="flex flex-col gap-1">
          <h3 className="text-gray-400 text-xs uppercase tracking-widest">Tiempo</h3>
          <p className="text-white font-light">{tiempo}</p>
        </div>

      </div>
      </Scroll>
    </TwoColumnSection>
  );
}

export default FichaProyectos;