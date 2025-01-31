import Image from "next/image";

const UTA = () => {
  return (
    <section className="relative after:bg-black after:-bottom-[calc(var(--section-gap)*0.85)] after:h-[calc(var(--section-gap)/2)] after:left-1/2 after:absolute after:transform after:-translate-x-1/2 after:w-1">
      <div className="text-medium grid">
        <h2 className="col-span-4 lg:col-span-3 flex flex-col font-medium">
          <time className="underline decoration-2 underline-offset-4">
            2002
          </time>
          <span>Tampereen yliopiston kuvajournalismi</span>
        </h2>
        <figure className="col-span-4 lg:col-start-4 lg:col-end-6">
          <Image
            className=""
            src="/paradigmat/aihekuva_visuaalinen-journalismi_valokuvaaja_14112017.webp"
            width={1440}
            height={480}
            alt="Visuaalisen journalismin ja visuaalisen tutkimuksen maisteriohjelma"
          />
          <figcaption className="font-normal text-xs mt-3">
            Visuaalisen journalismin ja visuaalisen tutkimuksen maisteriohjelma. Tampereen korkeakouluyhteisö.
          </figcaption>
        </figure>
        <p className="col-span-4 lg:col-span-6 lg:col-start-7 font-normal">
          Tampereen yliopiston kuvajournalismin koulutusohjelma perustettiin vastaamaan kasvaneeseen tarpeeseen valokuvauksen ja
          journalismin yhdistämisestä. Koulutuksen taustalla oli halu kehittää
          ja tarjota ammattitaitoa erityisesti visuaalisessa viestinnässä ja
          valokuvajournalismissa.
        </p>
      </div>
    </section>
  );
};

export default UTA;
