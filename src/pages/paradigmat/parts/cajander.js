import Image from "next/image";

const Cajander = () => {
  return (
    <section className="relative after:bg-black after:-bottom-[calc(var(--section-gap)*0.85)] after:h-[calc(var(--section-gap)/2)] after:left-1/2 after:absolute after:transform after:-translate-x-1/2 after:w-1">
      <div className="text-medium grid">
        <h2 className="col-span-4 lg:col-span-3 flex flex-col font-medium">
          <time className="underline decoration-2 underline-offset-4">
            3.11.1842
          </time>
          <span>Suomen ensimmäinen valokuva</span>
        </h2>
        <figure className="col-span-4 lg:col-start-4 lg:col-end-10">
          <Image
            className=""
            src="/paradigmat/Turku_1842_-_Henrik_Cajander.jpg"
            width={700}
            height={928}
            alt="Kuvituskuva: Suomen ensimmäinen valokuva, 3.11.1842"
          />
        </figure>
      </div>
      <div className="grid mt-[var(--sub-gap)] font-normal text-medium">
        <p className="col-span-4 lg:col-span-6">
          Suomen ensimmäisen dagerrotyypin otti 3.11.1842 todennäköisesti Henrik
          Cajander, turkulainen lääketieteen opiskelija ja kemisti, joka oli
          kiinnostunut valokuvauksen uusista mahdollisuuksista.
        </p>
        <p className="col-span-4 lg:col-span-6">
          Suomen ensimmäinen valokuva oli <em>dagerrotyyppi</em>, joka otettiin
          vuonna 1842 – vain kolme vuotta sen jälkeen, kun ranskalainen Louis
          Daguerre julkisti menetelmänsä. Myöhemmin kehittyneet
          positiivi-negatiivitekniikat, kuten kalotypia ja märkälevymenetelmä,
          syrjäyttivät dagerrotypian sen yksittäiskuvaisuuden ja monistamisen
          vaikeuden vuoksi.
        </p>
      </div>
    </section>
  );
};

export default Cajander;
