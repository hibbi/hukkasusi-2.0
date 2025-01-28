import Image from "next/image";

const TaikIltakoulu = () => {
  return (
    <section className="relative flex flex-col min-h-screen p-4 justify-between text-white after:bg-black after:-bottom-[calc(var(--section-gap)*0.85)] after:h-[calc(var(--section-gap)/2)] after:left-1/2 after:absolute after:transform after:-translate-x-1/2 after:w-1">
      <div className="leading-none text-pink mix-blend-difference">
        <time className="font-sans text-huge font-black">1959–1973</time>
        <h2 className="grave text-huge flex flex-col">
          <span>Valokuvan iltakoulu</span>
          <span>Taideteollisessa oppilaitoksessa Helsingissä</span>
        </h2>
      </div>
      <div className="px-8 text-base text-white">
        <p>
          Helsingissä perustettu iltakoulu vastasi kasvaneeseen tarpeeseen
          valokuvauksen koulutuksesta. Tätä ennen valokuvaamista oli voinut
          oppia joko kokeneemmalta valokuvaajalta tai opettelemalla itse.
        </p>
        <p>
          Koulutus toimi iltakouluna aina vuoteen 1973 asti, jolloin valtiolle
          muutamaa vuotta aiemmin siirtynyt Taideteollinen oppilaitos muutettiin
          korkeakouluksi. uudeksi nimeksi muodostui Taideteollinen korkeakoulu
          (Taik).
        </p>
      </div>
      <Image
        className="absolute object-cover w-[calc(100%-2rem)] h-full -z-10"
        src="/paradigmat/ADB78066-6DEA-B1F4-9A0D-BD85200BCD0C.jpg"
        width={700}
        height={928}
        alt="Kuvituskuva: Suomen ensimmäinen valokuva, 3.11.1842"
      />
    </section>
  );
};

export default TaikIltakoulu;
