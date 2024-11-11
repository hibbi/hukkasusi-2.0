const Epilogue = () => {
  return (
    <section
      id="epilogue"
      className="md:grid md:grid-cols-12 gap-x-[1.5vw] flex flex-col gap-y-40 lg:gap-y-72"
    >
      <div className="md:col-span-7 text-3xl leading-snug font-normal flex flex-col gap-5 lg:gap-8 font-nib">
        <p>
          Peilaan omaa opetusajatteluani toisaalta keskeneräisyyden, toisaalta
          vahvuuksieni kautta. Portfolion ajoittain kaartuileva ja hapuileva
          teksti syventää ajatteluani opettajuudesta ja taiteilijuudesta ja
          pyrkii viitoittamaan tulevaisuuttani aloilla.
        </p>
        <p>
          Pohdin opettajuuttani kahden eri opettajan työn kautta: (1)
          peruskoulu- ja lukion kuvataiteen opettajana ja (2) valokuvauksen
          ja/tai valokuvataiteen opettajana ja ohjaajana. Teen näin, sillä
          huomaan tarkastelevani opettajuutta omassa mielessäni tällä tavoin, ja
          minulle tuntuu luontaiselta kirjoittaa kahdesta eri
          opettajaidentiteetistä yrittäen paikantaa niiden yhteistä rajapintaa.
        </p>
      </div>
      <figure className="md:col-span-12 md:w-full relative flex">
        <video className="object-cover w-full" autoPlay loop>
          <source src={"1.mp4"} type="video/mp4" />
        </video>
      </figure>
    </section>
  );
}

export default Epilogue;