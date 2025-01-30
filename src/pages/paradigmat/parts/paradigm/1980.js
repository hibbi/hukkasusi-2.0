import Image from "next/image";

const Kahdeksankymmenta = () => {
  return (
    <section className="relative after:bg-black after:-bottom-[calc(var(--section-gap)*0.85)] after:h-[calc(var(--section-gap)/2)] after:left-1/2 after:absolute after:transform after:-translate-x-1/2 after:w-1">
      <div className="text-medium grid">
        <h2 className="col-span-4 lg:col-span-3 flex flex-col font-medium">
          <time className="underline decoration-2 underline-offset-4">
            1980-luku
          </time>
          <span>Dokumentarismista subjektiiviseen valokuvaan</span>
        </h2>
        <figure className="col-span-4 lg:col-start-4 lg:col-end-10">
          <Image
            className="w-full"
            src="/paradigmat/bremer.jpg"
            width={591}
            height={797}
            alt="Kuvituskuva: Suomen ensimmäinen valokuva, 3.11.1842"
          />
          <figcaption className="font-normal text-xs mt-3">
            Stefan Bremer: Splashman (1984). Sarjasta: Helsinki by Night.
          </figcaption>
        </figure>
      </div>
      <div className="grid mt-[var(--sub-gap)] font-normal text-medium">
        <figure className="col-span-4 lg:col-start-4 lg:col-end-10">
          <Image
            className="w-full"
            src="/paradigmat/puranen.jpg"
            width={940}
            height={701}
            alt="Kuvituskuva: Suomen ensimmäinen valokuva, 3.11.1842"
          />
          <figcaption className="text-xs mt-3">
            Jorma Puranen: 1 (1991). Sarjasta: Imaginary Homecoming.
          </figcaption>
        </figure>
        <p className="col-span-4 lg:col-span-6">
          Valokuvaus ei enää ollut vain dokumentointia, vaan se alkoi kehittyä
          taiteelliseksi ilmaisuksi. 1980-luvulla suomalaisessa
          valokuvataiteessa alettiin siirtyä dokumentarismista kohti
          subjektiivisempaa ja henkilökohtaisempaa ilmaisua:
        </p>
      </div>
    </section>
  );
};

export default Kahdeksankymmenta;