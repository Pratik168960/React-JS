/** @type {import('tailwindcss').Config} */
export default {
  // INITIAL CODE (Removed):
  // content: [],
  
  // FINAL CODE: Updated to scan HTML and JSX files.
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}