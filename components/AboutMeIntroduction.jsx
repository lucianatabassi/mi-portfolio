function AboutMeIntroduction({ titulo, parrafo, otroparrafo }) {
  return (
    <section className="w-full py-20 px-10 md:px-20">
      <div className="flex flex-col md:flex-row justify-center items-start w-full md:gap-20 lg:gap-96">
        <div className="md:w-1/3">
          <h2 className="font-sans font-medium text-lg md:text-6xl">{titulo}</h2>
        </div>

        <div className="flex flex-col gap-12">
          <div className="max-w-3xl">
            <p className="font-sans font-regular text-lg md:text-2xl leading-normal">{parrafo}</p>
          </div>

          {otroparrafo && (
            <div className="max-w-3xl">
              <p className="font-sans font-semibold text-lg md:text-3xl leading-normal">
                {otroparrafo}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default AboutMeIntroduction;
