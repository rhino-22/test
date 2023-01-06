/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    screens: {
      tab: "640px",
      // => @media (min-width: 640px) { ... }

      lap: "1024px",
      // => @media (min-width: 1024px) { ... }

      des: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [],
};
