/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'charcoal-black': '#111111',
        'warm-off-white': '#F4F1EA',
        'electric-lime': '#C7FF3D',
        'muted-grey': '#D9D9D4',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
};