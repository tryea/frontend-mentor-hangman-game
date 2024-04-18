import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: "#2463FF",
        dark_navy: "#261676",
        ube: "#887DC0",
      },
      boxShadow: {
        main_box_shadow:
          "inset 0px -8px 0px 4px #140E66 , inset 0px 6px 0px 8px #2463FF",
        main_play_shadow:
          "inset 0px -4px 0px 5px #243041 , inset 0px -12px 0px 11px #9D2DF5",
        main_how_to_shadow:
          "inset 0px -2px 0px 3px #140E66, inset 0px 1px 0px 6px #3C74FF",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "main-image-mobile": `url("/images/background-mobile.svg")`,
        "main-image-tablet": `url("/images/background-tablet.svg")`,
        "main-image-desktop": `url("/images/background-desktop.svg")`,
        "gradient-1":
          "linear-gradient(to bottom, #344ABA 0%, rgba(0, 20, 121, 0.83) 100% )",
        "pink-gradient":
          "linear-gradient(to bottom, #FE71FE 0%, #7199FF 100% )",
        "how-to-overlay-gradient":
          "linear-gradient(to bottom, #1A043A 0%, #151278 70%, #2B1677 100% )",
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar"),
    plugin(function ({ addBase, addComponents, addUtilities, theme }) {
      addUtilities({
        ".text-heading-s": {
          fontSize: "32px",
          lineHeight: "1.2",
          fontWeight: theme("fontWeight.normal"),
          letterSpacing: "0.05em",
        },

        ".text-heading-m": {
          fontSize: "48px",
          lineHeight: "1.2",
          fontWeight: theme("fontWeight.normal"),
          letterSpacing: "0.05em",
        },

        ".text-heading-l": {
          fontSize: "88px",
          lineHeight: "1.2",
          fontWeight: theme("fontWeight.normal"),
          letterSpacing: "0.05em",
        },

        ".text-heading-xl": {
          fontSize: "136px",
          lineHeight: "1.2",
          fontWeight: theme("fontWeight.normal"),
          letterSpacing: "0.05em",
        },

        ".text-body": {
          fontSize: "26px",
          lineHeight: "1.2",
          fontWeight: theme("fontWeight.normal"),
          letterSpacing: "0.05em",
        },

        ".text-gradient-with-stroke": {
          "-webkit-text-stroke-width": "2px",
          "-webkit-text-stroke-color": "#243041",
          "-webkit-background-clip": "text",
          backgroundClip: "text",
          backgroundImage:
            "linear-gradient(to bottom, #67B6FF 0%, #FFFFFF 100%)",
          color: "transparent",
          fill: "transparent",
          "paint-order": "stroke fill",
        },

        ".instruction-card-grid": {
          display: "grid",
          "grid-template-areas": `"number name" "content content"`,
          "grid-template-columns": "min-content auto",
          "grid-template-rows": "auto",
          "grid-gap": "16px",
        },

        ".instruction-card-grid-tablet": {
          "grid-template-areas": `"number name" "number content"`,
          "grid-template-columns": "min-content auto",
          "grid-column-gap": "40px",
          "grid-row-gap": "16px",
        },
        ".instruction-card-grid-desktop": {
          "grid-template-areas": `"number" "name" "content"`,
          "grid-template-columns": "auto",
          "grid-template-rows": "auto",
          "grid-column-gap": "40px",
          "grid-row-gap": "40px",
        },
      });
    }),
  ],
};
export default config;
