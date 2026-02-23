/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkBg: "#050505",    // Deep black
        cardBg: "#121212",    // Matte charcoal
        accentBlue: "#007BFF", // Electric Blue
        warrantyGold: "#FFD700", // For warranty text
      }
    },
  },
  plugins: [],
}