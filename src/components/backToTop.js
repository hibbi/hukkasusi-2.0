// components/BackToTopButton.js
"use client"
import { useState, useEffect } from "react";

export default function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show button when user scrolls down a certain distance
    const toggleVisibility = () => {
      if (window.scrollY > window.innerHeight * 2.5) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-2 bg-transparent text-black border-2 border-black"
        aria-label="Back to top"
      >
        Siirry alkuun
      </button>
    )
  );
}
