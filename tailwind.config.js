/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      titulo: ["lastica"],
      subtitulo: ["impact"],
      otromas: ["helvetica"]
    }
    ,extend: {},
  },
  plugins: [],
}