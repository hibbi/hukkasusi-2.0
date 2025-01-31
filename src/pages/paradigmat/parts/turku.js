import Image from "next/image";

const TurkuArtsAcademy = () => {
  return (
    <section className="relative after:bg-black after:-bottom-[calc(var(--section-gap)*0.85)] after:h-[calc(var(--section-gap)/2)] after:left-1/2 after:absolute after:transform after:-translate-x-1/2 after:w-1">
      <div className="text-medium grid">
        <h2 className="col-span-4 lg:col-span-3 flex flex-col font-medium">
          <time className="underline decoration-2 underline-offset-4">
            1992–
          </time>
          <span>Turun taiteen ja viestinnän oppilaitos</span>
        </h2>
        <figure className="col-span-4 lg:col-start-4 lg:col-end-10">
          <Image
            className=""
            src="/paradigmat/tmk.161026912438800-0-original.jpg"
            width={1023}
            height={680}
            alt="Turun taideyhdistyksen piirustuskoulu. Taiteilija H. Henriksson
            opettaa etsausta."
          />
          <figcaption className="font-normal text-xs mt-3">
            Turun taideyhdistyksen piirustuskoulu. Taiteilija H. Henriksson
            opettaa etsausta. Turun museokeskus.
          </figcaption>
        </figure>
      </div>
      <div className="grid mt-[var(--sub-gap)] font-normal text-medium">
        <p className="col-span-4 lg:col-span-6">
          Turun valokuva-alan koulutus keskittyy valokuvauksen teknisiin ja
          taiteellisiin osa-alueisiin, ja se on kehittynyt vuosien varrella
          monimuotoiseksi ja ammatilliseksi valokuvauskoulutukseksi, jossa
          painotetaan sekä luovuutta että alan käytännön taitoja.
        </p>
        <p className="col-span-4 lg:col-span-6">
          Vuonna 1996 Turun taiteen ja viestinnän oppilaitos siirtyi Turun
          ammattikorkeakoulun alle muodostaen Turun ammattikorkeakoulun
          Taideakatemian.
        </p>
      </div>
    </section>
  );
};

export default TurkuArtsAcademy;
