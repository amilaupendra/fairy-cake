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
          lemon: '#fef9c3',
          sunshine: '#fde047',
          meadow: '#dcfce7',
          leaf: '#16a34a'
        }
      },
      boxShadow: {
        fairy: '0 10px 30px rgba(34, 197, 94, 0.14)'
      }
    }
  },
  plugins: []
};
