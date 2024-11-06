"use client"; // Ensures this component is treated as a client component

import { ReactLenis, useLenis } from "lenis/react";
import { useState, useEffect } from "react";

export default function LenisScroll({ children }) {
  const [scrollProgress, setScrollProgress] = useState(0);

  useLenis(({ progress }) => {
    setScrollProgress(progress);
  });

  return (
    <ReactLenis root>
      {/* Progress bar element */}
      <div
        className="fixed top-0 left-0 h-2 bg-slate-400 z-50"
        style={{ width: `${scrollProgress * 100}%` }}
      ></div>

      {children}
    </ReactLenis>
  );
}
