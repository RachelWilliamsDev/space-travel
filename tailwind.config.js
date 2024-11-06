/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          "blue-900": "#0B0D17",
          "blue-300": "#D0D6F9",
        },
      },
      backgroundImage: {
        homepage: "url('/images/homepage-background.png')",
        homepageMobile: "url('/images/homepage-background-mobile.png')",
        destination: "url('/images/destination-background.png')",
      },
      fontFamily: {
        barlow: ["Barlow", "sans-serif"],
        "barlow-condensed": ["Barlow Condensed", "sans-serif"],
        bellefair: ["Bellefair", "sans-serif"],
      },
    },
  },
  plugins: [],
};
