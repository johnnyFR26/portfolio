/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        neon: '#00ffff',
        background: '#0a0a0a',
      },
      boxShadow: {
        neon: '0 0 10px #00ffff, 0 0 20px #00ffff',
      },
      backgroundImage: {
        'grid': "linear-gradient(#111 1px, transparent 1px), linear-gradient(90deg, #111 1px, transparent 1px)",
      },
      backgroundSize: {
        'grid': '40px 40px',
      },
    },
  },
  plugins: [],
}
