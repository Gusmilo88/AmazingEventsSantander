/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./node_modules/tw-elements/dist/js/**/*.js"],
  theme: {
    extend: {
      colors: {
        "azulLogo": "#01acfc",
        "gradienteAzul": "linear-gradient(90deg, #01acfc, #00ffcc)",
        'gradient-principal': 'linear-gradient(90deg, #d53369 0%, #daae51 100%)',
      }
    },
  },
  plugins: [require("tw-elements/dist/plugin.cjs")],
  darkMode: "class"
}


