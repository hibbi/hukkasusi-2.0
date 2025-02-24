import Image from "next/image";

const HAV = () => {
  return (
    <section className="relative after:bg-black after:-bottom-[calc(var(--section-gap)*0.85)] after:h-[calc(var(--section-gap)/2)] after:left-1/2 after:absolute after:transform after:-translate-x-1/2 after:w-1">
      <div className="text-medium grid">
        <h2 className="col-span-4 lg:col-span-3 flex flex-col font-medium">
          <time className="underline decoration-2 underline-offset-4">
            1921–
          </time>
          <span>Helsingin Amatööri-valokuvaajat ry (HAV)</span>
        </h2>
        <figure className="col-span-4 lg:col-start-4 lg:col-end-6">
          <Image
            className=""
            src="/paradigmat/1201_lampen_o_perustajajas.jpg"
            width={700}
            height={928}
            alt="HAV ry perustamiskokous"
          />
          <figcaption className="font-normal text-xs mt-3">
            Helsingin Amatööri-valokuvaajat ry:n perustamiskokous (1929).
            Kameraseuran arkisto.
          </figcaption>
        </figure>
        <p className="col-span-4 lg:col-span-6 lg:col-start-7 font-normal">
          Vuonna 1922 Helsingissä perustettu amatöörivalokuvaajien yhdistys HAV
          järjesti jäsenilleen ensimmäisen valokuvakurssinsa
          bromiöljymenetelmästä ja muutti nimensä vuonna 1929 Kameraseura
          ry:ksi.
        </p>
      </div>
    </section>
  );
}

export default HAV;