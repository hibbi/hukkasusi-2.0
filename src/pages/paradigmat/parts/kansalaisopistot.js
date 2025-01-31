import Image from "next/image";

const Kansalaisopistot = () => {
  return (
    <section className="relative after:bg-black after:-bottom-[calc(var(--section-gap)*0.85)] after:h-[calc(var(--section-gap)/2)] after:left-1/2 after:absolute after:transform after:-translate-x-1/2 after:w-1">
      <div className="text-medium grid">
        <h2 className="col-span-4 lg:col-span-3 flex flex-col font-medium">
          <time className="underline decoration-2 underline-offset-4">
            1960-luku
          </time>
          <span>Kansalaisopistot</span>
        </h2>
        <figure className="col-span-4 lg:col-start-4 lg:col-end-6">
          <Image
            className=""
            src="/paradigmat/galleria0115.jpg"
            width={800}
            height={507}
            alt='Porvoon työväenopiston (nyk. Porvoon kansalaisopisto) esittämä
            Aleksis Kiven näytelmä "Yö ja Päivä" 1950-luvulla.
            (Porvoon kansalaisopiston arkisto)'
          />
          <figcaption className="font-normal text-xs mt-3">
            Porvoon työväenopiston (nyk. Porvoon kansalaisopisto) esittämä
            Aleksis Kiven näytelmä &quot;Yö ja Päivä&quot; 1950-luvulla.
            (Porvoon kansalaisopiston arkisto)
          </figcaption>
        </figure>
        <p className="col-span-4 lg:col-span-6 lg:col-start-7 font-normal">
          Kansalaisopistot alkoivat tarjota valokuvauskursseja 1960-luvulla.
        </p>
      </div>
    </section>
  );
};

export default Kansalaisopistot;
