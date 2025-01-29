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
            alt="Kuvituskuva: Suomen ensimmäinen valokuva, 3.11.1842"
          />
        </figure>
        <p className="col-span-4 lg:col-span-6 lg:col-start-7 font-normal">
          Vuonna 1922 Helsingissä perustettu amatöörivalokuvaajien yhdistys HAV
          järjesti jäsenilleen ensimmäisen valokuvakurssinsa,{" "}
          <em>opastuskurssin bromiöljymenetelmässä</em>, ja vuonna 1929 se
          muutti nimensä Kameraseura ry:ksi.
        </p>
      </div>
    </section>
  );
}

export default HAV;