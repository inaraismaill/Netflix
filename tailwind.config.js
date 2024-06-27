/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-to-t': 'linear-gradient(to top, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.4) 60%, rgba(0, 0, 0, 0.936) 100%)',
        'gradient-to-b': 'linear-gradient(to top, rgba(0, 0, 0, 0.936) 0%, rgba(0, 0, 0, 0.4) 40%, rgba(0, 0, 0, 0.4) 100%)',
        'image': "url('/src/assets/img/mainbg.jpg')",
      },
      fontFamily: {
        'netflix-sans': ['Netflix Sans', 'Helvetica Neue', 'Segoe UI', 'Roboto', 'Ubuntu', 'sans-serif'],
      },
    },
  },
  plugins: [],
}