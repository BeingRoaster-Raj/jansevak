/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#36ff33ff',   // change to your desired primary color
        secondary: '#337aff', // change to your desired secondary color
      },
    },
  },
  plugins: [],
}