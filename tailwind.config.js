/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layout/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "600px",
      md: "700px",
      lg: "1025px",
    },
    extend: {
      fontSize: {
        xs: "var(--font-size-h5)",
        sm: "var(--font-size-h4)",
        base: "var(--font-size)",
        medium: "var(--font-size-medium)",
        xl: "var(--font-size-h3)",
        "2xl": "var(--font-size-h2)",
        "3xl": "var(--font-size-h1)",
        huge: "var(--font-size-huge)",
      },
      spacing: {
        grid: "var(--grid-gutter)", // Custom gap value
      },
      fontFamily: {
        nib: ["var(--font-nib)"],
      },
      colors: {
        background: "var(--silver-soft)",
        foreground: "var(--foreground)",
        coral: "var(--coral)",
        violet: "var(--violet)",
        yellow: "var(--yellow)",
        pink: "var(--pink)",
      },

      keyframes: {
        scroll: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
      },
      animation: {
        scroll: "scroll 40s linear infinite",
        wiggle: "wiggle 1s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
