import Image from "next/image";

const Kansalaisopistot = () => {
  return (
    <section className="relative flex flex-col min-h-screen p-4 justify-between text-white after:bg-black after:-bottom-[calc(var(--section-gap)*0.85)] after:h-[calc(var(--section-gap)/2)] after:left-1/2 after:absolute after:transform after:-translate-x-1/2 after:w-1">
      <div className="leading-none text-pink mix-blend-color-dodge">
        <time className="font-sans text-huge font-black">1960-luku</time>
        <h2 className="grave text-huge">
          <span>Kansalaisopistot</span>
        </h2>
      </div>

      <p className="px-8 text-base text-white">
        Kansalaisopistot alkoivat tarjota valokuvauskursseja 1960-luvulla.
      </p>
      <Image
        className="absolute object-cover w-[calc(100%-2rem)] h-full -z-10"
        src="/paradigmat/galleria0115.jpg"
        width={700}
        height={928}
        alt="Kuvituskuva: Suomen ensimmäinen valokuva, 3.11.1842"
      />
    </section>
  );
}

export default Kansalaisopistot;