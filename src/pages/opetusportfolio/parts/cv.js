import Image from "next/image";
import Vantaa from "./sub-parts/cv/vantaa";
import Ylikyla from "./sub-parts/cv/ylikyla";
import Lyseonpuisto from "./sub-parts/cv/lyseonpuisto";
import Muurola from "./sub-parts/cv/muurola";
import Kaleva from "./sub-parts/cv/kaleva";

const CV = () => {
  return (
    <section
      id="services"
    >
      <div className="items-center flex flex-col gap-5 lg:gap-8 content-start relative">
        <h2 className="self-start leading-tight text-base">Opetuskokemus</h2>
        <ul className="w-screen">
          <Ylikyla />
          <Vantaa />
          <Kaleva />
          <Lyseonpuisto />
          <Muurola />
        </ul>
      </div>
    </section>
  );
}

export default CV;