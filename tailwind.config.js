/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        hippiegreen: "#509051",
        wildsand: "#F4F4F4",
        gin: "#E7F2E9",
        dovegray: "#6F6F6F",
        alto: "#D7D7D7",
        emperor: "#545454",
        silverchalice: "#A4A4A4",
        emerald: "#2ACB48",
        gallery: "#EDEDED",
        killarney: "#3F7541",
        mineshaft: "#2C2C2C",
        bonjour: "#E3E0E0",
        cuttysark: "#578182",
        thunderbird: "#D51414",
        sunsetorange: "#FF5252",
        chateaugreen: "#32AD49",
        grayish: "#848484",
        seagreen: "#2C9F41",
        dustygray: "#989898",
        mercury: "#E3E3E3",
        lightMercury: "#EAEAEA",
        grayish2: "#939393",
        darkMineShaft: "#262626",
        lightMineShaft: "#2B2B2B",
        midMineShaft: "#303030",
        gallery: "#EBEBEB",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontSize: {
        xxs: "8pt",
      },
    },
  },
  //plugins: [require("tailwind-scrollbar")],
};
