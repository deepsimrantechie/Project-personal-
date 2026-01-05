/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        spinSlow: "spin 20s linear infinite",
        spinReverse: "spin 20s linear infinite reverse",
      },
    },
  },
  plugins: [],
};
