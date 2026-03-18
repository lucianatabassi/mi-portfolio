import { Link } from "react-router-dom";

function CardProjects({
  imagen,
  descripcion,
  año,
  etiqueta1,
  etiqueta2,
  link,
}) {
  const isExternal =
    link && (link.startsWith("http://") || link.startsWith("https://"));

  const cardContent = (
    <div className="flex flex-col w-full h-180 gap-4 group md:hover:bg-white/5 transition-colors duration-300 rounded-xl md:pt-2 md:px-2 md:pb-5">
      <div className="flex justify-center items-center overflow-hidden rounded-xl">
        <img
          src={imagen}
          alt={descripcion}
          className="w-full h-180 object-cover transition-all duration-300 ease-in-out hover:scale-[1.07]"
        />
      </div>

      <div className="flex flex-col gap-2 px-2">
        <div className="flex flex-wrap justify-between items-center">
          <p className="text-md font-medium pt-3 md:text-xl uppercase">
            {descripcion}
          </p>
          <span className="text-md text-gray-300">{año}</span>
        </div>

        <div className="flex flex-wrap gap-2 mt-3">
          <span className="border border-white/30 px-3 py-1 text-xs rounded-full text-gray-300">
            {etiqueta1}
          </span>
          {etiqueta2 && (
            <span className="border border-white/30 px-3 py-1 text-xs rounded-full text-gray-300">
              {etiqueta2}
            </span>
          )}
        </div>
      </div>
    </div>
  );

  if (isExternal) {
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        {cardContent}
      </a>
    );
  }

  if (link) {
    return (
      <Link to={link} className="block">
        {cardContent}
      </Link>
    );
  }

  return <div>{cardContent}</div>;
}

export default CardProjects;
