import { Link } from "react-router-dom";

function CardProjects({ imagen, descripcion, etiqueta1, etiqueta2, link }) {
  const isExternal =
    link && (link.startsWith("http://") || link.startsWith("https://"));

  const cardContent = (
    <div className="flex flex-col gap-4">
      <div className="overflow:hidden rounded-xl">
        <img
          src={imagen}
          alt=""
          className={"w-full h-auto object-cover transition-transform duration-500 ease-in-out  hover:scale-101"
          }
        />
      </div>

      <div className="flex flex-col gap-2">
        <p className="text-sm md:text-base text-gray-200">{descripcion}</p>
        <div className="flex flex-wrap gap-2 mt-1">
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
