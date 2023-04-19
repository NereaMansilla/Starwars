/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [  "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
     colors:{
      'primary':{
        'background': 'bg-slate-100'
      }
     }
    },
  },
  plugins: [],
}
