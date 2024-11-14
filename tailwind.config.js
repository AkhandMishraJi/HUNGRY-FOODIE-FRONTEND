/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {
      animation:{
        'spin-slow': 'spin 10s linear infinite',
        "cart": "cart 3s linear infinite"
      }
      ,
      keyframes: {
      "cart": {
          '0%': { transform: 'rotate(-5deg)' },
          '10%': { transform: 'rotate(0deg)' },
          '15%': { transform: 'rotate(10deg)' },
          '40%': { transform: 'rotate(15deg)' },
          '50%': { transform: 'rotate(20deg)' },
          '60%': { transform: 'rotate(25deg)' },
          '100%': { transform: 'rotate(0deg)' },
        }
    },
  },
  plugins: [],
}
}
