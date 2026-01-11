import TwoColumnSection from "./TwoColumnSection";
import StarIcon from "./StarIcon";

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
      <div className="grid grid-cols-2 md:flex md:flex-row md:items-center gap-y-6 gap-x-4 md:gap-10 w-full">
 
        <div className="col-span-2 md:col-span-auto flex flex-col gap-1">
          <h3 className="text-gray-400 text-xs uppercase tracking-widest">Rol</h3>
          <p className="text-white font-light whitespace-pre-line leading-normal">
            {rol}
          </p>
        </div>

        {/* ESTRELLA 1: Solo desktop */}
        <div className="hidden md:block text-gray-500">
          <StarIcon />
        </div>

        {/* BLOQUE AÑO */}
        <div className="flex flex-col gap-1">
          <h3 className="text-gray-400 text-xs uppercase tracking-widest">Año</h3>
          <p className="text-whitefont-light">{año}</p>
        </div>

        {/* ESTRELLA 2: Solo desktop */}
        <div className="hidden md:block text-gray-500">
          <StarIcon />
        </div>

        {/* BLOQUE TIEMPO */}
        <div className="flex flex-col gap-1">
          <h3 className="text-gray-400 text-xs uppercase tracking-widest">Tiempo</h3>
          <p className="text-white font-light">{tiempo}</p>
        </div>

      </div>
    </TwoColumnSection>
  );
}

export default FichaProyectos;