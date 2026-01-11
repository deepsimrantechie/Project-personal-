/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      /* 🎨 BRAND COLORS – SYNCROSOFT */
      colors: {
        brandBlue: "#0B5ED7", // Primary blue (logo)
        brandOrange: "#F59E0B", // Accent orange (logo)
        brandDark: "#0F172A", // Heading text
        brandText: "#334155", // Body text
        brandLight: "#F8FAFC", // Light background
      },

      /* ✨ EXISTING ANIMATIONS (UNCHANGED) */
      animation: {
        spinSlow: "spin 20s linear infinite",
        spinReverse: "spin 20s linear infinite reverse",
      },
    },
  },
  plugins: [],
};
