/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,jsx,mdx}',
    './components/**/*.{js,jsx,mdx}',
    './context/**/*.{js,jsx,mdx}',
    './data/**/*.{js,jsx,mdx}',
    './styles/**/*.css'
  ],
  theme: {
    extend: {
      colors: {
        fairy: {
          white: '#ffffff',
          blush: '#fce7f3',
          petal: '#fdf2f8',
          rose: '#f43f5e',
          roseDark: '#e11d48',
          gold: '#f59e0b',
          goldLight: '#fef3c7',
          cream: '#fff7ed'
        }
      },
      boxShadow: {
        fairy: '0 10px 30px rgba(244, 63, 94, 0.14)'
      }
    }
  },
  plugins: []
};
