/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        "mybg":"url('/src/assets/bannermiddle-removebg-preview.png')",
        'network-bg': "url('/src/assets/bannermiddle-removebg-preview.png')",
      },
      fontFamily:{
        "myfont":["'Montserrat', sans-serif"]
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

