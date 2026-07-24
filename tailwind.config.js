/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgDark: '#f3f4fc',
        cardBg: '#ffffff',
        primary: '#4422EF',
        secondary: '#AEF31F',
        accent: '#AEF31F',
      },
      fontFamily: {
        poppins: ['Noto Sans', 'sans-serif'],
        inter: ['Noto Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
