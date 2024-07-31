/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "main":{
          "blue":"rgb(14,115,246)",
          "yellow":"rgb(248,197,27)",
        },
        "danger":"rgb(247,102,89)",
        "success":{
          "heavy":"rgb(34,195,72)",
          "light":"rgb(26,193,157)"
        }
      }
    },
  },
  plugins: [],
}

