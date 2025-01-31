"use client";
import { useState } from "react";
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
import Sources from "@/pages/paradigmat/parts/sources";
import Dokumentarismi from "@/pages/paradigmat/parts/paradigm/1960";
import Kahdeksankymmenta from "@/pages/paradigmat/parts/paradigm/1980";
import Ysari from "@/pages/paradigmat/parts/paradigm/1990";
import Millenium from "@/pages/paradigmat/parts/paradigm/2000";
import Inha from "@/pages/paradigmat/parts/paradigm/inha";

const Paradigmat = () => {
  const [showHistory, setShowHistory] = useState(false);
  const [showParadigm, setShowParadigm] = useState(false);

  // Function to show "History"
  const toggleHistory = () => {
    setShowHistory(true);
    setShowParadigm(false); // Hide Paradigm when History is shown
  };

  // Function to show "Paradigm"
  const toggleParadigm = () => {
    setShowParadigm(true);
    setShowHistory(false); // Hide History when Paradigm is shown
  };
  return (
    <LenisScroll>
      <main className="flex flex-col gap-[var(--section-gap)] p-[var(--global-padding)]">
        <Hero onShowHistory={toggleHistory} onShowParadigm={toggleParadigm} />
        {showHistory && (
          <div id="history" className="flex flex-col gap-[var(--section-gap)]">
            <Showcase />
            <Cajander />
            <HAV />
            <Vilho />
            <TaikIltakoulu />

            <Kansalaisopistot />
            <Kamerataidetoimikunta />
            <Finnfoto />
            <Lahti />
            <Taik />
            <Taiteeksi />
            <Tohtorit />
            <Nykarleby />
            <TurkuArtsAcademy />
            <UTA />
            <Recent />
          </div>
        )}
        {showParadigm && (
          <div id="paradigm" className="flex flex-col gap-[var(--section-gap)]">
            <Inha />
            <Dokumentarismi />
            <Kahdeksankymmenta />
            <Ysari />
            <Millenium />
          </div>
        )}
      </main>
    </LenisScroll>
  );
};

export default Paradigmat;
