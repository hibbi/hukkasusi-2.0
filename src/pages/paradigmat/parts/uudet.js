import Image from "next/image";

const Recent = () => {
  return (
    <section className="relative">
      <div className="text-medium grid">
        <h2 className="col-span-4 lg:col-span-3 flex flex-col font-medium">
          <time className="underline decoration-2 underline-offset-4">
            2010–luku
          </time>
          <span>Aalto-yliopisto</span>
        </h2>
        <figure className="col-span-4 lg:col-start-4 lg:col-end-10">
          <Image
            src="/paradigmat/miley-cyrus-wrecking-ball-video-2-650-430.webp"
            width={650}
            height={430}
            alt="Miley Cyrus - Wrecking Ball. Sony Music Entertainment."
          />
          <figcaption className="font-normal text-xs mt-3">
            Miley Cyrus - Wrecking Ball. Sony Music Entertainment.
          </figcaption>
        </figure>
      </div>
      <div className="grid mt-[var(--sub-gap)] font-normal text-medium">
        <p className="col-span-4 lg:col-span-6">
          Taideteollinen korkeakoulu (Taik), Teknillinen korkeakoulu ja
          Helsingin kauppakorkeakoulu yhdistyivät vuonna 2010 muodostaen
          Aalto-yliopiston. Vuonna 2013 Aalto-yliopisto lopetti strategiansa
          mukaisesti valokuvataiteen kandidaatin koulutuksen. Strategia ohjeisti
          säätiöyliopistoa suuntaamaan resurssejaan vahvemmin monitieteellisiin
          ja poikkitieteellisiin ohjelmiin.
        </p>
        <p className="col-span-4 lg:col-span-6">
          Valokuvataiteen erillinen kandidaatin ja maisterin ohjelma ei nähty
          sopivan tähän strategiaan. Aalto-yliopisto päätti kohdentaa
          valokuvataiteen koulutuksen resurssit maisteri- ja
          tohtoritutkintoihin. Tammikuussa 2022 Aalto-yliopisto ilmoitti
          lakkauttavansa valokuvataiteen maisteriohjelman itsenäisenä ohjelmana.
        </p>
      </div>
    </section>
  );
};

export default Recent;
