/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'earboom-primary': '#FF4500',
        'earboom-secondary': '#333333',
      },
    },
  },
  plugins: [],
}