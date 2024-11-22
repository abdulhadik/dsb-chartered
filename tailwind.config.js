/** @type {import('tailwindcss').Config} */
export default {
  content: ["./public/index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      // => @media (max-width: 1279px) { ... }
      lg: { min: "925px" },
    },
  },
  plugins: [],
};