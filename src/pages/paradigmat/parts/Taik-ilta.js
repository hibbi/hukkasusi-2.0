import Image from "next/image";

const TaikIltakoulu = () => {
  return (
    <section className="relative after:bg-black after:-bottom-[calc(var(--section-gap)*0.85)] after:h-[calc(var(--section-gap)/2)] after:left-1/2 after:absolute after:transform after:-translate-x-1/2 after:w-1">
      <div className="text-medium grid">
        <h2 className="col-span-4 lg:col-span-3 flex flex-col font-medium">
          <time className="underline decoration-2 underline-offset-4">
            1959–1973
          </time>
          <span>
            Valokuvan iltakoulu Taideteollisessa oppilaitoksessa Helsingissä
          </span>
        </h2>
        <figure className="col-span-4 lg:col-start-4 lg:col-end-10">
          <Image
            className=""
            src="/paradigmat/ADB78066-6DEA-B1F4-9A0D-BD85200BCD0C.jpg"
            width={1023}
            height={680}
            alt="Kuvituskuva: Suomen ensimmäinen valokuva, 3.11.1842"
          />
        </figure>
      </div>
      <div className="grid mt-[var(--sub-gap)] font-normal text-medium">
        <p className="col-span-4 lg:col-span-6">
          Helsingissä perustettu Taideteollisen oppilaitoksen iltakoulu vastasi kasvaneeseen tarpeeseen
          valokuvauksen koulutuksesta. Tätä ennen valokuvaamista oli voinut
          oppia joko kokeneemmalta valokuvaajalta tai opettelemalla itse.
        </p>
        <p className="col-span-4 lg:col-span-6">
          Koulutus toimi iltakouluna aina vuoteen 1973 asti, jolloin valtiolle
          muutamaa vuotta aiemmin siirtynyt Taideteollinen oppilaitos muutettiin
          korkeakouluksi. uudeksi nimeksi muodostui Taideteollinen korkeakoulu
          (Taik).
        </p>
      </div>
    </section>
  );
};

export default TaikIltakoulu;
