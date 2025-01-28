const Kamerataidetoimikunta = () => {
  return (
    <section className="relative flex flex-col h-screen content-between align-middle p-4">
      {/* Event Time and Headline */}
      <h2 className="grave text-huge flex flex-col leading-snug col-span-6 sticky">
        <span className="font-sans font-black">1965–</span>
        <span>Kamerataidetoimikunta</span>
      </h2>

      <p className="col-span-10 text-base font-normal">
        Nykytiedon valossa Suomen ensimmäisen valokuvan otti
        varsinaissuomalainen lääkäri Henrik Cajander 03.11.1842.
      </p>
    </section>
  );
}

export default Kamerataidetoimikunta;