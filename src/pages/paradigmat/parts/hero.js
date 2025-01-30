const Hero = ({ onShowHistory, onShowParadigm }) => {
  return (
    <section className="relative h-[calc(100vh-4rem)] flex flex-col items-center content-between justify-between text-medium font-normal">
      <div className="w-2/3">
        <h1 className="grave text-3xl leading-none md:text-huge flex flex-col">
          <span>Valokuvataiteen asema Suomessa</span>
          <span>Historia ja suuntaviivat 1960-luvulta lähtien</span>
        </h1>
      </div>
      <div className="flex gap-4">
        <button
          onClick={onShowHistory}
          className="py-2 px-4 border-2 border-black"
        >
          Historia
        </button>
        <button
          onClick={onShowParadigm}
          className="py-2 px-4 border-2 border-black"
        >
          Paradigmat
        </button>
      </div>
    </section>
  );
};

export default Hero;
