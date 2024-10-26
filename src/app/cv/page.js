const Curriculum = () => {
  return (
    <div className="flex flex-col md:grid md:grid-cols-12 gap-x-[1.5vw] mx-8 py-12">
      <ul className="md:col-span-6 md:col-start-3">
        <h2>Koulutus:</h2>
        <li>2017–2022 Aalto-yliopisto, valokuvataide, taiteen maisteri</li>
        <li>2020– Lapin yliopisto, kuvataidekasvatus, taiteen maisteri</li>
        <li>2013–2017 Turun taideakatemia, kuvataide</li>
        <li>2016 Viron taideakatemia, valokuvataide</li>
      </ul>
      <ul className="md:col-span-5 md:col-start-3 md:row-start-2 py-8">
        <h2>Valitut näyttelyt:</h2>
        <li>2017 Even Share, Viron nykytaiteen museo (EKKM)</li>
        <li>2017 15cm – 3,6m, ARSi projektiruum</li>
        <li>2015 Kalevatron</li>
        <li>2015 6th Space, Turku</li>
      </ul>
    </div>
  );
}

export const metadata = {
  title: "Samuli Susihukka – cv",
  description:
    "Olen kiinnostunut pienistä eleistä taiteessa.",
};

export default Curriculum;