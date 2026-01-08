function ContainerImages({ titulo, children }) {
  return (
    <section className="w-full px-10 md:px-20 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20 items-start">

        <div className="titulo-seccion">
          <h2 className="text-4xl md:text-6xl max-w-[150px]">
            {titulo}
          </h2>
        </div>

        {children}
        
      </div>
    </section>
  );
}

export default ContainerImages;