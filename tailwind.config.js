/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "Inter": '"Inter", sans-serif',
        "Roboto": '"Roboto", sans-serif',
        "Fahk": '"Fahkwang", sans-serif',
        "Mont": '"Montserrat", sans-serif'
      },     
      keyframes: {
        entrarMenu: {
          '0%': {
            transform: "translate(-50%, -100%)"
          },
          '100%': { 
            transform: "translate(-50%, 0px)"
           },
        },
        sairMenu: {
          '0%': {
            transform: "translate(-50%, 0px)"
          },
          '100%': { 
            transform: "translateY(-100%) translateY(-20px) translateX(-50%)"
           },
        }
      },
      animation:{
        entrarMenu: "entrarMenu .3s linear", 
        sairMenu: "sairMenu .3s linear", 
      },
      colors: {
        "cinzaTexto": "#0c2236"
      },
      padding: {
        "paddingXGeral": "80px",
        "paddingyGeral": "100px",
        "pTopGeral": "50px",
        "pBottomGeral": "150px",
        "paddingXCel": "20px",
        "pBottomCel": "80px"
      }
    },
  },
  plugins: [],
}

