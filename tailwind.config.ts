import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#eef2f5",
          100: "#d9e2ea",
          200: "#b3c6d4",
          300: "#84a3b8",
          400: "#5a819e",
          500: "#3d6a86",
          600: "#2c546e",
          700: "#22445a",
          800: "#182f40",
          900: "#101f2b",
        },
        ember: {
          DEFAULT: "#e06a1f",
          dark: "#b94f12",
          light: "#fdeede",
        },
        ivory: "#f7f4ee",
        sand: "#efe9dc",
        gold: "#d9a441",
        amberstar: "#e8a33d",
        ink: "#1a222b",
        muted: "#55606b",
      },
      fontFamily: {
        serif: ['"Fraunces"', "Georgia", '"Times New Roman"', "serif"],
        sans: ['"Inter"', "-apple-system", "BlinkMacSystemFont", '"Segoe UI"', "Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
