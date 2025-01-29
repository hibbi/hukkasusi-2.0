import Image from "next/image";

const Finnfoto = () => {
return (
  <section className="relative after:bg-black after:-bottom-[calc(var(--section-gap)*0.85)] after:h-[calc(var(--section-gap)/2)] after:left-1/2 after:absolute after:transform after:-translate-x-1/2 after:w-1">
    <div className="text-medium grid">
      <h2 className="col-span-4 lg:col-span-3 flex flex-col font-medium">
        <time className="underline decoration-2 underline-offset-4">1970</time>
        <span>Suomen Valokuvajärjestöjen Keskusliitto Finnfoto ry</span>
      </h2>
      <figure className="col-span-4 lg:col-start-4 lg:col-end-10">
        <Image
          className=""
          src="/paradigmat/d2004_9_33-1000x675.webp"
          width={1200}
          height={794}
          alt="Kuvituskuva: Suomen ensimmäinen valokuva, 3.11.1842"
        />
      </figure>
    </div>
    <Image
      src="/paradigmat/Finnfoto_eduskunnalle001.webp"
      width={1772}
      height={2203}
      alt="Kuvituskuva: Suomen ensimmäinen valokuva, 3.11.1842"
    />
  </section>
);
}

export default Finnfoto;