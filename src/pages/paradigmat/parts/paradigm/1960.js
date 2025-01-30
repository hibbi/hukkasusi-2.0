import Image from "next/image";

const Dokumentarismi = () => {
  return (
    <section className="relative after:bg-black after:-bottom-[calc(var(--section-gap)*0.85)] after:h-[calc(var(--section-gap)/2)] after:left-1/2 after:absolute after:transform after:-translate-x-1/2 after:w-1">
      <div className="text-medium grid">
        <h2 className="col-span-4 lg:col-span-3 flex flex-col font-medium">
          <time className="underline decoration-2 underline-offset-4">
            1960–1970-luku
          </time>
          <span>Dokumentarismi ja yhteiskunnallinen valokuvaus</span>
        </h2>
        <figure className="col-span-4 lg:col-start-4 lg:col-end-10">
          <Image
            className="w-full"
            src="/paradigmat/pitkanen.jpg"
            width={360}
            height={274}
            alt="Kuvituskuva: Suomen ensimmäinen valokuva, 3.11.1842"
          />
          <figcaption className="font-normal text-xs mt-3">
            Matti A. Pitkänen: Häiritty kohtaus (1953)
          </figcaption>
        </figure>
      </div>
      <div className="grid mt-[var(--sub-gap)] font-normal text-medium">
        <figure className="col-span-4 lg:col-start-4 lg:col-end-10">
          <Image
            className="w-full"
            src="/paradigmat/ben-kaila.jpg"
            width={400}
            height={270}
            alt="Kuvituskuva: Suomen ensimmäinen valokuva, 3.11.1842"
          />
          <figcaption className="text-xs mt-3">
            Ben Kaila: Eskilstuna, Ruotsi (1972). Sarjasta: Siirtosuomalainen.
          </figcaption>
        </figure>
        <figure className="col-span-4 lg:col-start-4 lg:col-end-10">
          <Image
            className="w-full"
            src="/paradigmat/sammallahti.jpg"
            width={400}
            height={270}
            alt="Kuvituskuva: Suomen ensimmäinen valokuva, 3.11.1842"
          />
          <figcaption className="text-xs mt-3">
            Pentti Sammallahti: Helsinki, Finland (1983).
          </figcaption>
        </figure>
        <p className="col-span-4 lg:col-span-6">
          1960-luku oli dokumentarismin aikaa, ja suomalaiset
          valokuvataiteilijat alkoivat ottaa kantaa yhteiskunnallisiin
          kysymyksiin. Tällöin valokuvauksen rooli oli enimmäkseen
          dokumentaarinen.
        </p>
        <p className="col-span-4 lg:col-span-6">
          The Family of Man -näyttely (1959 Helsingissä) toimi innoittajana,
          sillä se antoi valokuvaajille &quot;luvan&quot; tarttua
          yhteiskunnallisiin aiheisiin ja valokuvata arkielämän eri puolilta.
        </p>
      </div>
    </section>
  );
}

export default Dokumentarismi;