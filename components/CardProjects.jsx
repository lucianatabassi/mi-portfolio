function CardProjects({ imagen, descripcion, etiqueta1, etiqueta2 }) {
  return (
    <div className="flex flex-col gap-6 mb-16 w-full max-w-7xl">
      <div>
        <img src={imagen} alt="{descripcion}" className="w-full h-auto" />
      </div>

      <div className="flex flex-col gap-4 px-2">
        <p className="text-lg md:text-xl max-w-7xl">{descripcion}</p>
      </div>

      <div className="flex flex-wrap gap-3">
          {etiqueta1 && (
            <span className="px-4 py-1.5 border border-gray-600 rounded-full text-xs md:text-sm text-gray-300 uppercase tracking-widest">
              {etiqueta1}
            </span>
          )}
          {etiqueta2 && (
            <span className="px-4 py-1.5 border border-gray-600 rounded-full text-xs md:text-sm text-gray-300 uppercase tracking-widest">
              {etiqueta2}
            </span>
          )}
        </div>
    </div>
  );
}

export default CardProjects;
