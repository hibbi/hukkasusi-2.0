// components/ConditionalHeader.js
"use client"; // Mark this as a client component


import { usePathname } from "next/navigation";
import Header from "@/layout/header";
import Link from "next/link";
import { useLenis } from "lenis/react";

export default function ConditionalHeader() {
  const pathname = usePathname();

  const lenis = useLenis(); // Access the existing Lenis instance

  // Scroll to top function
  const scrollToTop = () => {
    if (lenis) {
      lenis.scrollTo(0); // Scroll to top position (0)
    }
  };

  // Only render Header if the pathname is not "/opetusportfolio"
  if (pathname === "/paradigmat") return;
  else 
    if (pathname === "/opetusportfolio")
      return (
        <header className="fixed w-full pt-8 px-8 z-50 mix-blend-difference text-sm leading-none text-blue-700">
          <div className="flex flex-row justify-between">
            <div className="">
              <Link className="" href="/">
                Samuli Susihukka
              </Link>
            </div>
            <div className="flex relative">
              <ul className="flex flex-row flex-wrap gap-4 lg:gap-5">
                <li>
                  <Link href="/portfolio">Portfolio</Link>
                </li>
                <li>
                  <Link href="/cv">Curriculum</Link>
                </li>
                <li>
                  <button onClick={scrollToTop}>↑</button>
                </li>
              </ul>
            </div>
          </div>
        </header>
      );

  return <Header />;
}
