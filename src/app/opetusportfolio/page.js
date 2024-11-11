import Image from "next/image";

import Epilogue from "@/pages/opetusportfolio/parts/epilogue";
import ArtTeacher from "@/pages/opetusportfolio/parts/art-teacher";
import PhotographyTeacher from "@/pages/opetusportfolio/parts/teaching-photography";
import WhoAmI from "@/pages/opetusportfolio/parts/who-am-i";
import EcologicalThinking from "@/pages/opetusportfolio/parts/ecological-thinking";
import Critic from "@/pages/opetusportfolio/parts/critic";
import Ending from "@/pages/opetusportfolio/parts/ending";
import Sources from "@/pages/opetusportfolio/parts/sources";
import LenisScroll from "@/components/lenis";
import CV from "@/pages/opetusportfolio/parts/cv";
import Marquee from "@/pages/opetusportfolio/parts/sub-parts/marquee";
import Hero from "@/pages/opetusportfolio/parts/sub-parts/hero";
import Education from "@/pages/opetusportfolio/parts/education";
import Philosophy from "@/pages/opetusportfolio/parts/philosophy";

export default function Protected() {
  return (
    <LenisScroll>
      <div className="p-8 overflow-hidden w-full bg-white dark:bg-neutral-900">
        <div className="flex flex-col">
          <div className="flex flex-col gap-40 lg:gap-72">
            <div className="flex flex-col relative h-[calc(100vh-2rem)] items-center justify-between pt-14 pb-8">
              <Marquee />
              <Hero />
            </div>
            <Epilogue />
            <CV />
            <Education />
            <ArtTeacher />
            <PhotographyTeacher />
            <WhoAmI />
            <EcologicalThinking />
            <Critic />
            <Ending />
            <Sources />
          </div>
        </div>
      </div>
    </LenisScroll>
  );
}
