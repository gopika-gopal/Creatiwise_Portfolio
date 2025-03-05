/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', 
  ],
  theme: {
    extend: {
      fontFamily: {
        antonio: ["Syne", "sans-serif"],      },
    },
  },
  plugins: [require('@tailwindcss/typography')], 
};
