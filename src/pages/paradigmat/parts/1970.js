import Image from "next/image";

const Taiteeksi = () => {
  return (
    <section className="relative after:bg-black after:-bottom-[calc(var(--section-gap)*0.85)] after:h-[calc(var(--section-gap)/2)] after:left-1/2 after:absolute after:transform after:-translate-x-1/2 after:w-1">
      <div className="text-medium grid">
        <h2 className="col-span-4 lg:col-span-3 flex flex-col font-medium">
          <time className="underline decoration-2 underline-offset-4">
            1970-luku
          </time>
          <span>Valokuvan taiteelliset mahdollisuudet</span>
        </h2>
        <figure className="col-span-4 lg:col-start-4 lg:col-end-6">
          <Image
            className=""
            src="/paradigmat/D2447C1D-8384-38F8-9F1C-8CBCC83B52D4.jpg"
            width={1024}
            height={985}
            alt="Kuvituskuva: Suomen ensimmäinen valokuva, 3.11.1842"
          />
        </figure>
        <p className="col-span-4 lg:col-span-6 lg:col-start-7 font-normal">
          Valokuvataide vakiintui osaksi suomalaista taidekenttää: Helsingin
          valokuvakeskus (1974) ja Valokuvagalleria Hippolyte (1978) tarjosivat
          foorumeita valokuvataiteelle.
        </p>
      </div>
    </section>
  );
}

export default Taiteeksi;