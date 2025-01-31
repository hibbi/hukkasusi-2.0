import Image from "next/image";

const Millenium = () => {
return (
  <section className="relative mb-24">
    <div className="text-medium grid">
      <h2 className="col-span-4 lg:col-span-3 flex flex-col font-medium">
        <time className="underline decoration-2 underline-offset-4">
          2000-luku
        </time>
        <span>Henkilökohtaiset ilmaisut</span>
      </h2>
      <figure className="col-span-4 lg:col-start-4 lg:col-end-10">
        <Image
          className="w-full"
          src="/paradigmat/silomaki.jpg"
          width={1482}
          height={999}
          alt="Jari Silomäki. Sarjasta: Harjoitelmia aikuisuuteen (1997–2001)."
        />
        <figcaption className="font-normal text-xs mt-3">
          Jari Silomäki. Sarjasta: Harjoitelmia aikuisuuteen (1997–2001).
        </figcaption>
      </figure>
    </div>
    <div className="grid mt-[var(--sub-gap)] font-normal text-medium">
      <figure className="col-span-4 lg:col-start-4 lg:col-end-10">
        <Image
          className="w-full"
          src="/paradigmat/silomaki-2.jpg"
          width={295}
          height={295}
          alt="Jari Silomäki. Sarjasta: Harjoitelmia aikuisuuteen (1997–2001)."
        />
        <figcaption className="text-xs mt-3">
          Jari Silomäki. Sarjasta: Harjoitelmia aikuisuuteen (1997–2001).
        </figcaption>
      </figure>
      <figure className="col-span-4 lg:col-start-4 lg:col-end-10">
        <Image
          className="w-full"
          src="/paradigmat/susiraja.jpg"
          width={800}
          height={600}
          alt="IIu Susiraja: Sukset (2010). Sarjasta: Syömään, pöytä on katettu."
        />
        <figcaption className="text-xs mt-3">
          IIu Susiraja: Sukset (2010). Sarjasta: Syömään, pöytä on katettu.
        </figcaption>
      </figure>
      <figure className="col-span-4 lg:col-start-4 lg:col-end-10">
        <Image
          className="w-full"
          src="/paradigmat/susiraja-2.jpg"
          width={533}
          height={800}
          alt="IIu Susiraja: Voimanainen (2011–2012). Sarjasta: Tuhmaa pullaa."
        />
        <figcaption className="text-xs mt-3">
          IIu Susiraja: Voimanainen (2011–2012). Sarjasta: Tuhmaa pullaa.
        </figcaption>
      </figure>
      <figure className="col-span-4 lg:col-start-4 lg:col-end-10">
        <Image
          className="w-full"
          src="/paradigmat/majuri.jpg"
          width={940}
          height={627}
          alt="Susanna Majuri: Falling (2011)."
        />
        <figcaption className="text-xs mt-3">
          Susanna Majuri: Falling (2011).
        </figcaption>
      </figure>
      <figure className="col-span-4 lg:col-start-4 lg:col-end-10">
        <Image
          className="w-full"
          src="/paradigmat/palomaki.jpg"
          width={940}
          height={940}
          alt="Nelli Palomäki: At 27 with my dad (2009)."
        />
        <figcaption className="text-xs mt-3">
          Nelli Palomäki: At 27 with my dad (2009).
        </figcaption>
      </figure>
      <figure className="col-span-4 lg:col-start-4 lg:col-end-10">
        <Image
          className="w-full"
          src="/paradigmat/Falling-Event_20cm-webjpg.jpg"
          width={1500}
          height={2133}
          alt="Elina Brotherus: Falling Event 2017, 80 x 56 cm After Mieko Shiomi,
          Falling Event, 1963 Let something fall from a high place."
        />
        <figcaption className="text-xs mt-3">
          Elina Brotherus: Falling Event 2017, 80 x 56 cm After Mieko Shiomi,
          Falling Event, 1963 Let something fall from a high place.
        </figcaption>
      </figure>
      <figure className="col-span-4 lg:col-start-4 lg:col-end-10">
        <Image
          className="w-full"
          src="/paradigmat/Brushing-teeth_20cm-web.jpg"
          width={1000}
          height={667}
          alt="Elina Brotherus: Brushing Teeth 2016, 70x104cm After Takehisa Kosugi,
          Manodharma with Mr Y, 1964 Watch over every part of Mr. Ys body about
          10 cm apart when he brushes his teeth. If it is dark, a flashlight may
          be used. If it is bright, a magnifying glass may be used."
        />
        <figcaption className="text-xs mt-3">
          Elina Brotherus: Brushing Teeth 2016, 70x104cm After Takehisa Kosugi,
          Manodharma with Mr Y, 1964 Watch over every part of Mr. Ys body about
          10 cm apart when he brushes his teeth. If it is dark, a flashlight may
          be used. If it is bright, a magnifying glass may be used.
        </figcaption>
      </figure>
      <figure className="col-span-4 lg:col-start-4 lg:col-end-10">
        <Image
          className="w-full"
          src="/paradigmat/press_moa_01.jpg"
          width={1637}
          height={2455}
          alt="Lada Suomenrinne: Iđitguovssu (Utopian me) 2021-2022"
        />
        <figcaption className="text-xs mt-3">
          Lada Suomenrinne: Iđitguovssu (Utopian me) 2021-2022
        </figcaption>
      </figure>
      <p className="col-span-4 lg:col-span-6">
        2000-luvulla valokuvataiteessa alkoi korostua henkilökohtaisuus ja
        yksilön näkökulma. Valokuvaajat alkoivat keskittyä myös omaan
        subjektiiviseen ilmaisuun.
      </p>
    </div>
  </section>
);
}

export default Millenium;