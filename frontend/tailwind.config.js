/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        dark:'#1b1f27',
        gray:'#afafaf',
        darkgray:'#1b1a1a',
      }
    },
  },
  plugins: [],
}
