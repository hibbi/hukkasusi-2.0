import Image from "next/image";

const Lahti = () => {
  return (
    <section className="relative after:bg-black after:-bottom-[calc(var(--section-gap)*0.85)] after:h-[calc(var(--section-gap)/2)] after:left-1/2 after:absolute after:transform after:-translate-x-1/2 after:w-1">
      <div className="text-medium grid">
        <h2 className="col-span-4 lg:col-span-3 flex flex-col font-medium">
          <time className="underline decoration-2 underline-offset-4">
            1971–
          </time>
          <span>Lahden taideoppilaitos</span>
        </h2>
        <figure className="col-span-4 lg:col-start-4 lg:col-end-6">
          <Image
            className=""
            src="/paradigmat/murhakopla.jpg"
            width={640}
            height={480}
            alt="Lahden Muotoiluinstituutti - brändi-taideoppilaitos"
          />
          <figcaption className="font-normal text-xs mt-3">
            Lahden Muotoiluinstituutti - brändi-taideoppilaitos
          </figcaption>
        </figure>
        <p className="col-span-4 lg:col-span-6 lg:col-start-7 font-normal">
          Lahdessa valokuvauksen koulutus alkoi itsenäisenä opinto-ohjelmana
          vuonna 1971, minkä myötä ammatillinen valokuvaajakoulutus kehittyi.
          Nykyisin koulutus on osa LAB-ammattikorkeakoulua.
        </p>
      </div>
    </section>
  );
};

export default Lahti;
