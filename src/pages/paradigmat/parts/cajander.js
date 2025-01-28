import Image from "next/image";

const Cajander = () => {
  return (
    <section className="relative flex flex-col min-h-screen p-4 justify-between text-white after:bg-black after:-bottom-[calc(var(--section-gap)*0.85)] after:h-[calc(var(--section-gap)/2)] after:left-1/2 after:absolute after:transform after:-translate-x-1/2 after:w-1">
      <div className="leading-none text-pink mix-blend-color-dodge">
        <time className="font-sans text-huge font-black">3.11.1842</time>
        <h2 className="grave text-huge">
          <span>Suomen ensimmäinen valokuva</span>
        </h2>
      </div>
      <p className="px-8 text-base text-white">
        Nykytiedon valossa Suomen ensimmäisen valokuvan otti
        varsinaissuomalainen lääkäri Henrik Cajander 03.11.1842.
      </p>
      <Image
        className="absolute object-cover w-[calc(100%-2rem)] h-full -z-10"
        src="/paradigmat/Turku_1842_-_Henrik_Cajander.jpg"
        width={700}
        height={928}
        alt="Kuvituskuva: Suomen ensimmäinen valokuva, 3.11.1842"
      />
    </section>
  );
};

export default Cajander;
