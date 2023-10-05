/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#375CAA',
        'secondary': '#FCBC7B',
        'accent': '#252466',
        'highlight': '#B1D0ED'
      }
    }
  },
  plugins: [],
}
