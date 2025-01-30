import Image from "next/image";

const Ysari = () => {
  return (
    <section className="relative after:bg-black after:-bottom-[calc(var(--section-gap)*0.85)] after:h-[calc(var(--section-gap)/2)] after:left-1/2 after:absolute after:transform after:-translate-x-1/2 after:w-1">
      <div className="text-medium grid">
        <h2 className="col-span-4 lg:col-span-3 flex flex-col font-medium">
          <time className="underline decoration-2 underline-offset-4">
            1990-luku
          </time>
          <span>Dokumentin uusi kuva ja lavastettu todellisuus</span>
        </h2>
        <figure className="col-span-4 lg:col-start-4 lg:col-end-10">
          <Image
            className="w-full"
            src="/paradigmat/mannikko.jpg"
            width={425}
            height={534}
            alt="Kuvituskuva: Suomen ensimmäinen valokuva, 3.11.1842"
          />
          <figcaption className="font-normal text-xs mt-3">
            Esko Männikkö: Sodankylä (1991). Sarjasta: Naarashauki.
          </figcaption>
        </figure>
      </div>
      <div className="grid mt-[var(--sub-gap)] font-normal text-medium">
        <figure className="col-span-4 lg:col-start-4 lg:col-end-10">
          <Image
            className="w-full"
            src="/paradigmat/mannikko-2.jpg"
            width={639}
            height={512}
            alt="Kuvituskuva: Suomen ensimmäinen valokuva, 3.11.1842"
          />
          <figcaption className="text-xs mt-3">
            Esko Männikkö: Kuivaniemi (1991). Sarjasta: Naarashauki.
          </figcaption>
        </figure>
        <figure className="col-span-4 lg:col-start-4 lg:col-end-10">
          <Image
            className="w-full"
            src="/paradigmat/lehtola.jpg"
            width={1006}
            height={800}
            alt="Kuvituskuva: Suomen ensimmäinen valokuva, 3.11.1842"
          />
          <figcaption className="text-xs mt-3">
            Jouko Lehtola: Untitled (1996). Sarjasta: Young Heroes.
          </figcaption>
        </figure>
        <figure className="col-span-4 lg:col-start-4 lg:col-end-10">
          <Image
            className="w-full"
            src="/paradigmat/lehtola-2.jpg"
            width={636}
            height={800}
            alt="Kuvituskuva: Suomen ensimmäinen valokuva, 3.11.1842"
          />
          <figcaption className="text-xs mt-3">
            Jouko Lehtola: Untitled (1996). Sarjasta: Young Heroes.
          </figcaption>
        </figure>
        <figure className="col-span-4 lg:col-start-4 lg:col-end-10">
          <Image
            className="w-full"
            src="/paradigmat/itkonen.jpg"
            width={940}
            height={940}
            alt="Kuvituskuva: Suomen ensimmäinen valokuva, 3.11.1842"
          />
          <figcaption className="text-xs mt-3">
            Tiina Itkonen: Tumas (1998).
          </figcaption>
        </figure>
        <figure className="col-span-4 lg:col-start-4 lg:col-end-10">
          <Image
            className="w-full"
            src="/paradigmat/itkonen-2.jpg"
            width={940}
            height={724}
            alt="Kuvituskuva: Suomen ensimmäinen valokuva, 3.11.1842"
          />
          <figcaption className="text-xs mt-3">
            Tiina Itkonen: Iceberg 1 (2005).
          </figcaption>
        </figure>
        <figure className="col-span-4 lg:col-start-4 lg:col-end-10">
          <Image
            className="w-full"
            src="/paradigmat/parantainen.jpg"
            width={940}
            height={798}
            alt="Kuvituskuva: Suomen ensimmäinen valokuva, 3.11.1842"
          />
          <figcaption className="text-xs mt-3">
            Jyrki Parantainen: Earth 1 (1989). Sarjasta: Earth.
          </figcaption>
        </figure>
        <figure className="col-span-4 lg:col-start-4 lg:col-end-10">
          <Image
            className="w-full"
            src="/paradigmat/parantainen-2.jpg"
            width={940}
            height={718}
            alt="Kuvituskuva: Suomen ensimmäinen valokuva, 3.11.1842"
          />
          <figcaption className="text-xs mt-3">
            Jyrki Parantainen: FIRE No 1 (24.2.1997, Helsinki, Finland).
          </figcaption>
        </figure>
        <p className="col-span-4 lg:col-span-6">
          1990-luvulla valokuvataiteessa alettiin korostaa lavastettua
          todellisuutta ja dokumentin uutta kuvaa. Tällöin uransa kultakaudella
          oli myös Esko Männikkö – ensimmäinen suomalainen valokuvaaja, joka sai
          kansainvälistä tunnustusta.
        </p>
        <p className="col-span-4 lg:col-span-6">
          Lavastettua todellisuutta edustivat voimakkaimmillaan esimerkiksi
          Jyrki Parantaisen teokset. Yksi merkittävimmistä aikakauden
          valokuvataiteilijoista on myös Heli Rekula, joka on tunnettu
          erityisesti naiseuden ja ruumiillisuuden tutkimuksesta valokuvissaan
        </p>
      </div>
    </section>
  );
};

export default Ysari;
