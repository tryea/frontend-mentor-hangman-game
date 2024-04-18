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
        "main-play-gradient":
          "linear-gradient(to bottom, #FE71FE 0%, #7199FF 100% )",
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, addComponents, addUtilities, theme }) {
      addUtilities({
        ".text-heading-s": {
          fontSize: "32px",
          lineHeight: "1.2",
          fontWeight: theme("fontWeight.normal"),
          letterSpacing: "0.05em",
        },
      });
    }),
  ],
};
export default config;
