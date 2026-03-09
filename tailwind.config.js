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
          cream: '#fff7ed',
          blush: '#ffe4e6',
          peach: '#ffedd5',
          mint: '#ecfdf5',
          cocoa: '#6b4f3a'
        }
      },
      boxShadow: {
        fairy: '0 10px 30px rgba(107, 79, 58, 0.12)'
      }
    }
  },
  plugins: []
};
