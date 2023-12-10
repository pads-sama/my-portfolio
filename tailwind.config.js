/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#0c0c1d',
        'secondary': '#00EEFF',
        'accent-clr': '#d3d3d3',

        //for gradients
        'clr-1': '#52057B',
        'clr-2': '#892CDC',
        'clr-3': '#BC6FF1' 
      },
      fontFamily:{
        noto: ['Noto Serif', 'serif'],
        roboto: ['Roboto', 'sans-serif']
      }

    },
  },
  plugins: [],
}

