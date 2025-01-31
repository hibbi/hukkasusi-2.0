import Image from "next/image";

const Vilho = () => {
  return (
    <section className="relative after:bg-black after:-bottom-[calc(var(--section-gap)*0.85)] after:h-[calc(var(--section-gap)/2)] after:left-1/2 after:absolute after:transform after:-translate-x-1/2 after:w-1">
      <div className="text-medium grid">
        <h2 className="col-span-4 lg:col-span-3 flex flex-col font-medium">
          <time className="underline decoration-2 underline-offset-4">
            1929
          </time>
          <span>Vilho Setälä</span>
        </h2>
        <figure className="col-span-4 lg:col-start-4 lg:col-end-10">
          <Image
            src="/paradigmat/Vilho_502_VIII._Universala_Kongreso_Esperantista_–_Albumo_(cropped).jpg"
            width={524}
            height={755}
            alt="Vilho Setälä: kuvaaja tuntematon"
          />
          <figcaption className="font-normal text-xs mt-3">
            Vilho Setälä (1912). Valokuvaaja tuntematon.
          </figcaption>
        </figure>
      </div>
      <div className="grid mt-[var(--sub-gap)] font-normal text-medium">
        <p className="col-span-4 lg:col-span-6">
          Vilho Setälä (1892–1985) oli suomalainen valokuvaaja, kirjailija ja
          teoreetikko, joka vaikutti merkittävästi suomalaisen
          valokuvakulttuurin kehittymiseen. Hän oli keskeinen hahmo
          taidevalokuvauksen edistämisessä sekä valokuvauksen opetuksen
          kehittämisessä.
        </p>
        <p className="col-span-4 lg:col-span-6">
          Setälä oli mukana edistämässä piktorialismia, joka korosti
          maalausmaisia ja pehmeitä kuvapintoja. Hänen kirjansa{" "}
          <em>Valokuvauksen taito: Eteenpäin pyrkivän harrastajan opas</em>{" "}
          (1929) oli yksi ensimmäisistä suomenkielisistä valokuvauksen
          oppikirjoista.
        </p>
      </div>
    </section>
  );
};

export default Vilho;
