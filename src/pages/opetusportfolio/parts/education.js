export default function Education() {
  return (
    <section id="education" className="relative">
      <div className="flex flex-col md:grid md:grid-cols-12 gap-x-[1.5vw] gap-y-12">
        <h2 className="md:col-span-3 items-start text-5xl leading-none md:flex-col md:flex md:content-start font-nib">
          <span>Taiteen &shy;koulutus</span>
        </h2>
        <ul className="flex flex-col gap-10 md:gap-20 md:col-start-8 md:col-span-5">
          <li className="flex flex-col md:flex-row justify-between">
            <h3 className="text-base leading-snug md:w-3/5">Lapin yliopisto</h3>
            <div className="flex flex-col text-sm font-normal md:w-2/5">
              <span>2020–</span>
              <span>Taiteen maisteri</span>
              <span>Kuvataidekasvatus</span>
            </div>
          </li>
          <li className="flex flex-col md:flex-row justify-between">
            <h3 className="text-base leading-snug md:w-3/5">Aalto-yliopisto</h3>
            <div className="flex flex-col text-sm font-normal md:w-2/5">
              <span>2022</span>
              <span>Taiteen maisteri</span>
              <span>Valokuvataide</span>
              <span>
                https://aaltodoc.aalto.fi/items/449e8c29-7493-499e-8126-206b8f72e3e4
              </span>
            </div>
          </li>
          <li className="flex flex-col md:flex-row justify-between">
            <h3 className="text-base leading-snug md:w-3/5">
              Turun taideakatemia
            </h3>
            <div className="flex flex-col text-sm font-normal md:w-2/5">
              <span>2017</span>
              <span>Kuvataiteilija</span>
              <span>Valokuvataide</span>
            </div>
          </li>
          <li className="flex flex-col md:flex-row justify-between">
            <h3 className="text-base leading-snug md:w-3/5">
              Viron taideakatemia (EAA)
            </h3>
            <div className="flex flex-col text-sm font-normal md:w-2/5">
              <span>2016</span>
              <span>Vaihto-opinnot</span>
              <span>Valokuvataide</span>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}