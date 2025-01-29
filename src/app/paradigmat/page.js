import Cajander from "@/pages/paradigmat/parts/cajander";
import LenisScroll from "@/components/lenis";
import Hero from "@/pages/paradigmat/parts/hero";
import TaikIltakoulu from "@/pages/paradigmat/parts/Taik-ilta";
import Lahti from "@/pages/paradigmat/parts/lahti";
import HAV from "@/pages/paradigmat/parts/HAV";
import Kansalaisopistot from "@/pages/paradigmat/parts/kansalaisopistot";
import Taik from "@/pages/paradigmat/parts/taik";
import Taiteeksi from "@/pages/paradigmat/parts/1970";
import Kamerataidetoimikunta from "@/pages/paradigmat/parts/kamerataidetoimikunta";
import Tohtorit from "@/pages/paradigmat/parts/doctors";
import TurkuArtsAcademy from "@/pages/paradigmat/parts/turku";
import UTA from "@/pages/paradigmat/parts/uta";
import Nykarleby from "@/pages/paradigmat/parts/nykarleby";
import Recent from "@/pages/paradigmat/parts/uudet";
import Finnfoto from "@/pages/paradigmat/parts/finnfoto";
import Showcase from "@/pages/paradigmat/parts/showcase";
import Vilho from "@/pages/paradigmat/parts/vilho";

const Paradigmat = () => {
  return (
    <LenisScroll>
      <main className="flex flex-col gap-[var(--section-gap)] p-[var(--global-padding)]">
        <Hero />
        <Showcase />
        <Cajander />
        <HAV />
        <Vilho />
        <TaikIltakoulu />
        <Lahti />
        <Kansalaisopistot />
        <Kamerataidetoimikunta />
        <Finnfoto />
        <Taik />
        <Taiteeksi />
        <Tohtorit />
        <Nykarleby />
        <TurkuArtsAcademy />
        <UTA />
        <Recent />
      </main>
    </LenisScroll>
  );
};

export default Paradigmat;
