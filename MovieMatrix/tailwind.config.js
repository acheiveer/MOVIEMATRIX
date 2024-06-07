/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pangolin: ['Pangolin', 'cursive'],
        roboto: ['Roboto', 'sans-serif'],
        lora: ['Lora', 'serif'],
      },
      boxShadow: {
        'custom': '12px 19px 62px -34px rgba(49, 29, 63, 0.18)',
      },
    },
  },
  plugins: [],
}