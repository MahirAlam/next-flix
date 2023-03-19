/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable global-require */
/** @type {import('tailwindcss').Config} */

const { fontFamily } = require("tailwindcss/defaultTheme")

module.exports = {
  content: ["node_modules/preline/dist/*.js", "./src/**/*.{js,ts,jsx,tsx}"],
  future: {
    hoverOnlyWhenSupported: true,
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", ...fontFamily.sans],
      },
      colors: {
        light: {
          50: "#FCFDFD",
          100: "#FAFAFA",
          200: "#F5F5F5",
          300: "#EFF0F0",
          400: "#EAEBEB",
          500: "#E5E6E6",
          600: "#B6B9B9",
          700: "#878C8C",
          800: "#5A5E5E",
          900: "#2D2F2F",
        },
        dark: {
          50: "#E7E9EE",
          100: "#CFD4DD",
          200: "#9FA9BC",
          300: "#6F7D9A",
          400: "#4C566C",
          500: "#2A303C",
          600: "#222630",
          700: "#191D24",
          800: "#111318",
          900: "#080A0C",
        },
        primary: {
          50: "#F0E8FC",
          100: "#E0D1FA",
          200: "#C1A3F5",
          300: "#A275F0",
          400: "#8347EB",
          500: "#661AE6",
          600: "#5014B8",
          700: "#3C0F8A",
          800: "#280A5C",
          900: "#14052E",
        },
        info: {
          50: "#EBF3FE",
          100: "#D8E6FD",
          200: "#B1CEFB",
          300: "#8AB5FA",
          400: "#639CF8",
          500: "#3B82F6",
          600: "#0B60EA",
          700: "#0848B0",
          800: "#053075",
          900: "#03183B",
        },
        success: {
          50: "#E4FBED",
          100: "#C5F7D7",
          200: "#8FF0B2",
          300: "#54E88A",
          400: "#1EDC64",
          500: "#16A34A",
          600: "#12823B",
          700: "#0D632D",
          800: "#09431E",
          900: "#041F0E",
        },
        warning: {
          50: "#FFF9EB",
          100: "#FEF2D2",
          200: "#FDE4A5",
          300: "#FDD87D",
          400: "#FCCB50",
          500: "#FBBD23",
          600: "#E1A304",
          700: "#AA7B03",
          800: "#6E5002",
          900: "#372801",
        },
        error: {
          50: "#FDECEC",
          100: "#FCD9D9",
          200: "#F9B4B4",
          300: "#F58E8E",
          400: "#F26969",
          500: "#EF4444",
          600: "#E11313",
          700: "#A90F0F",
          800: "#710A0A",
          900: "#380505",
        },
      },
      height: {
        "1/2": "50%",
      },
      scale: {
        30: ".3",
      },
      boxShadow: {
        outline: "0 0 0 3px rgba(101, 31, 255, 0.4)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("preline/plugin")],
}
