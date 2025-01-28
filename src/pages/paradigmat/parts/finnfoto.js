import Image from "next/image";

const Finnfoto = () => {
return (
  <section className="relative flex flex-col min-h-screen p-4 justify-between text-white after:bg-black after:-bottom-[calc(var(--section-gap)*0.85)] after:h-[calc(var(--section-gap)/2)] after:left-1/2 after:absolute after:transform after:-translate-x-1/2 after:w-1">
    <div className="absolute leading-none text-pink mix-blend-difference">
      <time className="font-sans text-huge font-black">1970</time>
      <h2 className="grave text-huge flex flex-col">
        <span>Suomen Valokuvajärjestöjen</span>
        <span>Keskusliitto Finnfoto</span>
        <span>(nyk. Finnfoto ry)</span>
      </h2>
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