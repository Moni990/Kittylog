/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'yellow-100': '#FFFCF2',
        'yellow-200': '#722405',
      },
      fontSize: {
        'fs-xs': '10px',
        'fs-sm': '14px',
        'fs-md': '16px',
        'fs-lg': '20px',
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}


