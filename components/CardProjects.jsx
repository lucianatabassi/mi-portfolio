import { Link } from "react-router-dom";

function CardProjects({ imagen, descripcion, año, etiqueta1, etiqueta2, link }) {
  const isExternal =
    link && (link.startsWith("http://") || link.startsWith("https://"));

  const cardContent = (
    <div className="flex flex-col gap-4">
      <div className="overflow-hidden rounded-lg">
        <img
          src={imagen}
          alt=""
          className={"w-full h-auto object-cover transition-transform duration-500 ease-in-out   hover:scale-103"
          }
        />
      </div>

      <div className="flex flex-col gap-2 px-2">
        <div className="flex flex-wrap justify-between items-center">
          <p className="text-sm font-semibold pt-3 md:text-xl text-base uppercase">{descripcion}</p>
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
