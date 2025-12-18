/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        dancing: ["'Dancing Script'", "cursive"],
         brand: ["Poppins", "sans-serif"],
      nav: ["Inter", "sans-serif"],  // 🚀 FINAL FIX
      },
    },
  },
  plugins: [],
};
