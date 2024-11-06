const Sources = () => {
  return (
    <section id="sources" className="mb-[18.75rem]">
      <div className="flex flex-col md:grid md:grid-cols-12 gap-x-[1.5vw] gap-y-20">
        <h2 className="md:col-span-12 text-center text-6xl leading-none">
          Läh&shy;teet
        </h2>
        <div className="md:col-span-6 flex flex-col gap-5 lg:gap-8 text-sm font-normal">
          <p>
            Nurmenniemi, K. (2020). Polttava taide. EDIT. Haettu 31.10.2024
            https://editmedia.fi/polttava-taide/
          </p>
          <p>
            Richardson, J., Steffen W., Lucht, W., Bendtsen, J. & Cornell, S.E.,
            et.al. (2023). Earth beyond six of nine planetary boundaries.{" "}
            <em className="font-italic">Science Advances, 9</em>(37)
            https://doi.org/10.1126/sciadv.adh2458
          </p>
          <p>
            Salminen, A. (2015).{" "}
            <em className="font-italic">
              Kokeellisuudesta : Historiallisesta avantgardesta
              jälkifossiiliseen elämään
            </em>
            . Poesia.
          </p>
          <p>
            Zylinska, J. (2016).Photography After the Human.{" "}
            <em className="font-italic">Photographies, 9</em>(2), s. 167–186.
            https://doi.org/10.1080/17540763.2016.1182062
          </p>
        </div>
      </div>
    </section>
  );
}

export default Sources;