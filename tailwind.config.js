/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#52057B',
        'secondary': '#892CDC',
        'accent-clr': '#fff',

        //for gradients
        'clr-1': '#52057B',
        'clr-2': '#892CDC',
        'clr-3': '#BC6FF1' 
      }
    },
  },
  plugins: [],
}

