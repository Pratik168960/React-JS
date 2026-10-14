/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  // NOTE: Changing darkMode to "class" allows us to toggle themes manually using JavaScript class injection
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [],
}