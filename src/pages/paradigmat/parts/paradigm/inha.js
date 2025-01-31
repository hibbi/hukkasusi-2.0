import Image from "next/image";

const Inha = () => {
  return (
    <section className="relative after:bg-black after:-bottom-[calc(var(--section-gap)*0.85)] after:h-[calc(var(--section-gap)/2)] after:left-1/2 after:absolute after:transform after:-translate-x-1/2 after:w-1">
      <div className="text-medium grid">
        <h2 className="col-span-4 lg:col-span-3 flex flex-col font-medium">
          <time className="underline decoration-2 underline-offset-4">
            12.11.1865–3.4.1930
          </time>
          <span>I.K. Inha</span>
        </h2>
        <figure className="col-span-4 lg:col-start-4 lg:col-end-10">
          <Image
            className="w-full"
            src="/paradigmat/koski_0.jpg"
            width={2416}
            height={1761}
            alt="I.K. Inha: Kajaani, Ämmäskoski. Suomen valokuvataiteen museo."
          />
          <figcaption className="font-normal text-xs mt-3">
            I.K. Inha: Kajaani, Ämmäskoski (tarkka kuvausvuosi tuntematon).
            Suomen valokuvataiteen museo.
          </figcaption>
        </figure>
      </div>
      <div className="grid mt-[var(--sub-gap)] font-normal text-medium">
        <figure className="col-span-4 lg:col-start-4 lg:col-end-10">
          <Image
            className="w-full"
            src="/paradigmat/porvoo_0.jpg"
            width={2846}
            height={2073}
            alt="I.K. Inha: Porvoo, tarkka kuvausvuosi tuntematon, 1910-luku. Suomen valokuvataiteen museo."
          />
          <figcaption className="text-xs mt-3">
            I.K. Inha: Porvoo, 1910-luku (tarkka kuvausvuosi tuntematon). Suomen
            valokuvataiteen museo.
          </figcaption>
        </figure>
        <figure className="col-span-4 lg:col-start-4 lg:col-end-10">
          <Image
            className="w-full"
            src="/paradigmat/uhut_anni_ja_hoto.jpg"
            width={2884}
            height={1968}
            alt="I.K. Inha: Uhut, Anni ja Hoto. Uhtua, Vienan Karjala, 1894. Suomen valokuvataiteen museo."
          />
          <figcaption className="text-xs mt-3">
            I.K. Inha: Uhut, Anni ja Hoto. Uhtua, Vienan Karjala, 1894. Suomen
            valokuvataiteen museo.
          </figcaption>
        </figure>
        <p className="col-span-4 lg:col-span-6">
          Suomalaisen valokuvataiteen pioneeri Into Konrad Inha
          (12.11.1865–3.4.1930) oli valokuvaaja, tietokirjailija ja toimittaja,
          joka tallensi kamerallaan itsenäisyyttä kohti matkaavan Suomen
          kulttuuri- ja luontomaisemia, kyliä ja kaupunkeja sekä elinkeinoja.
          Inha lähti opiskelemaan valokuvausta ammattimielessä
          kuivalevytekniikan yleistyessä Euroopassa. Hän aloitti 1889
          Etelä-Baijerissa Grönenbachissa W. Cronenbergin
          valokuvausoppilaitoksessa, mutta ei ollut tyytyväinen siellä
          annettavaan opetukseen ja jatkoi 1890 Wienissä E. Jaffe & A. Albertin
          ateljeessa.
        </p>
        <p className="col-span-4 lg:col-span-6">
          Toive valokuvaajan ammatista näytti osaksi toteutuvan, kun valokuvaaja
          K. E. Ståhlberg (1862–1919) palkkasi Uudessa Suomettaressa tuolloin
          ulkomaantoimittajana työskennelleen Inhan tämän ensimmäiselle
          kuvausmatkalle 1892 Pohjois-Pohjanmaalle ja Lappiin. Inhan ensimmäisen
          kuvausmatkan aikaan maisemavalokuvat levisivät yleisön tietoon aluksi
          ennen kaikkea studioiden näyttelyiden ja kuvamyynnin kautta.
          1800-luvun loppupuolen kansallismielinen kirjoittelu ruokki yleisön
          maisemannälkää, ja 1890-luvun alkaessa suomalaisyleisölle tarjottiin
          ostettavaksi kasvava määrä maisemavalokuvia.
        </p>
      </div>
    </section>
  );
};

export default Inha;
