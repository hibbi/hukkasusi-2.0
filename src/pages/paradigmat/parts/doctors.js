const Tohtorit = () => {
  return (
    <section className="relative flex flex-col h-screen content-between align-middle p-4">
      {/* Event Time and Headline */}
      <h2 className="grave text-huge flex flex-col leading-snug col-span-6 sticky">
        <span className="font-sans font-black">1990–</span>
        <span>Ensimmäiset valokuvataiteen tohtorit</span>
      </h2>

      <p className="col-span-10 text-base font-normal">
        Valokuvataiteen akateeminen tunnustus Suomessa alkoi 1990-luvulla,
        jolloin ensimmäiset valokuvataiteesta väitelleet taiteen tohtorit
        valmistuivat.
      </p>
      <ul>
        <li>
          1999: Männistö, Anssi: Islam länsimaisessa hegemonisessa diskurssissa.
          Myyttis-ideologinen ja kuva-analyyttinen näkökulma sivilisaatioiden
          kohtaamiseen.
        </li>
        <li>
          1997: Brusila, Riitta: Realismista fiktioon. (1998) * Eskola, Taneli: Water
          Lilies and Wings of Steel.
        </li>
        <li>
          1997: Salo, Merja: Nautinnon, vaaran ja varoituksen merkit /Signs of
          Pleasure, Danger and Warning.
        </li>
        <li>
          1995: Käyhkö, Unto: Painted and Photographed Portraits in Finland 1839-1870.
        
        </li>
        <li>
          1995: Laihanen, Pekka: Colour science approach to digital image
          reproduction. Väriopin soveltaminen digitaaliseen kuvareproduktioon.
        
        </li>
        <li>1993: Oesch, Rainer: Oikeus valokuvaan.</li>
        <li>
          1990: Tuovinen, Pekka: On the wavelength, time and inclination variables of
          photographic exposures with applications to scanning imaging.
          Valotusten aallonpituus- ja aikamuuttujat skannaavan kuvanmuodostuksen
          sovellusten kannalta.
        </li>
      </ul>
    </section>
  );
};

export default Tohtorit;
