/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'resume-dark': '#121212',
        'resume-gray': '#1e1e1e',
      }
    },
  },
  plugins: [],
}