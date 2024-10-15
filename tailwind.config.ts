import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    colors: {
      primary: "#4C64E4",
      "border-light": "#c1c1c1",
      "border-dark": "#191919",
      "text-light": "#FFFFFF",
      "text-dark": "#010101",
      "text-secondary-light": "#222",
      "text-secondary-dark": "#c9c9c9",
      "bg-dark": "#010101",
      "bg-light-second": "#f1f1f1",
      "bg-light": "#ffffff",
    },
    fontSize: {
      sm: "0.8rem",
      base: "1rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "2.5rem",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      container: "1200px",
    },
    extend: {
      gridTemplateColumns: {
        main: "repeat(auto-fit, minmax(370px, 1fr))",
        "main-mob": "1fr 1fr",
      },
      maxWidth: {
        "1200": "1200px",
      },
      minHeight: {
        "180": "170px",
      },
      flex: {
        "80": "0 0 80%",
        "20": "0 0 20%",
      },
      opacity: {
        "1": "0.01",
      },
      backgroundImage: {
        "body-gradient":
          "radial-gradient(94.3% 175% at 93.8% 25%, rgba(0, 0, 0, 0.08) 0%, rgba(13, 71, 110, 0.12) 50%)",
        "spotify-gradient":
          "radial-gradient(94.3% 175% at 93.8% 25%, rgba(31, 214, 97, 0.07) 0%, rgba(255, 255, 255, 0.01) 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
