/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        card: '0 10px 20px -5px rgba(2,6,23,0.1), 0 8px 10px -6px rgba(2,6,23,0.1)'
      }
    },
  },
  plugins: [],
}
