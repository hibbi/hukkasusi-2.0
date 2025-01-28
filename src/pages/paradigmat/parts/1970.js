const Taiteeksi = () => {
  return (
    <section className="relative flex flex-col h-screen content-between align-middle p-4">
      {/* Event Time and Headline */}
      <h2 className="grave text-huge flex flex-col leading-snug col-span-6 sticky">
        <span className="font-sans font-black">1970-luku</span>
        <span>Valokuvan taiteelliset mahdollisuudet</span>
      </h2>

      <p className="col-span-10 text-base font-normal">
        Valokuvataide vakiintui osaksi suomalaista taidekenttää: Helsingin
        valokuvakeskus (1974) ja Valokuvagalleria Hippolyte (1978) tarjosivat
        foorumeita valokuvataiteelle.
      </p>
    </section>
  );
}

export default Taiteeksi;