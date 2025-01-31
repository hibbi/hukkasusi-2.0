import Image from "next/image";

const Taik = () => {
  return (
    <section className="relative after:bg-black after:-bottom-[calc(var(--section-gap)*0.85)] after:h-[calc(var(--section-gap)/2)] after:left-1/2 after:absolute after:transform after:-translate-x-1/2 after:w-1">
      <div className="text-medium grid">
        <h2 className="col-span-4 lg:col-span-3 flex flex-col font-medium">
          <time className="underline decoration-2 underline-offset-4">
            1973–2010
          </time>
          <span>
            Valokuvataiteen korkeakoulutus Taideteollisessa korkeakoulussa
            (Taik)
          </span>
        </h2>
        <figure className="col-span-4 lg:col-start-4 lg:col-end-10">
          <Image
            className=""
            src="/paradigmat/B6920B3C-6AD6-E75D-10C5-3C4D74EB0EC9.jpg"
            width={1023}
            height={680}
            alt="Taideteollinen korkeakoulu, Hämeentie, Arabianranta. Aalto-yliopiston arkisto."
          />
          <figcaption className="font-normal text-xs mt-3">
            Taideteollinen korkeakoulu, Hämeentie, Arabianranta.
            Aalto-yliopiston arkisto.
          </figcaption>
        </figure>
      </div>
      <div className="grid mt-[var(--sub-gap)] font-normal text-medium">
        <p className="col-span-4 lg:col-span-6">
          Taideteollisen oppilaitoksen muututtua Taideteolliseksi korkeakouluksi
          iltakoulutus vaihtui päiväkouluksi. Korkeakoulutuksen myötä
          valokuvasta tuli itsenäinen taide- ja tutkimusala. Tämä muutti
          koulutuksen rakenteen täysipäiväiseksi ja tarjosi opiskelijoille
          entistä syvällisemmän perehdytyksen alaan.
        </p>
        <p className="col-span-4 lg:col-span-6">
          Taideteollinen korkeakoulu toimi aina vuoteen 2010 asti, jolloin se
          fuusioitui Teknillisen korkeakoulun ja Helsingin Kauppakorkeakoulun
          kanssa.
        </p>
      </div>
    </section>
  );
};

export default Taik;
