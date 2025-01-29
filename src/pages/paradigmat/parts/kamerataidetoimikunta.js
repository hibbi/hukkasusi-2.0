import Image from "next/image";

const Kamerataidetoimikunta = () => {
  return (
    <section className="relative after:bg-black after:-bottom-[calc(var(--section-gap)*0.85)] after:h-[calc(var(--section-gap)/2)] after:left-1/2 after:absolute after:transform after:-translate-x-1/2 after:w-1">
      <div className="text-medium grid">
        <h2 className="col-span-4 lg:col-span-3 flex flex-col font-medium">
          <time className="underline decoration-2 underline-offset-4">
            1965
          </time>
          <span>Kamerataidetoimikunta</span>
        </h2>
        <figure className="col-span-4 lg:col-start-4 lg:col-end-10">
          <Image
            className=""
            src="/paradigmat/1A66623E-0B1E-4B1C-A644-AEAEE5FF55AF.jpg"
            width={1200}
            height={794}
            alt="Kuvituskuva: Suomen ensimmäinen valokuva, 3.11.1842"
          />
        </figure>
      </div>
      <div className="grid mt-[var(--sub-gap)] font-normal text-medium">
        <p className="col-span-4 lg:col-span-6">
          Vuonna 1965 perustettu Kamerataidetoimikunta (myös
          Valokuvataidetoimikunta) oli suomalainen asiantuntijaelin, joka toimi
          valokuvataiteen edistämiseksi. Sen perusti Suomen Taiteilijaseuran
          aloitteesta Suomen Kulttuurirahasto yhdessä muiden tahojen kanssa.
        </p>
        <p className="col-span-4 lg:col-span-6">
          Toimikunnan tarkoituksena oli kehittää ja tukea valokuvataidetta
          Suomessa muun muassa apurahoin, näyttelytoiminnalla ja muilla
          edistämistoimilla. Se oli merkittävä valokuvauksen aseman
          vahvistamisessa taidemuotona Suomessa. Myöhemmin sen tehtävät
          siirtyivät osaksi valokuvataiteen muita instituutioita, kuten Valtion
          valokuvataidetoimikuntaa ja myöhemmin Taiteen keskustoimikuntaa.
        </p>
      </div>
    </section>
  );
};

export default Kamerataidetoimikunta;
