module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./comps/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'standard' : 'var(--standard-mode)',
        'primary': 'var(--color-primary)',
        'secondary': 'var(--color-secondary)',
      },
    },
  },
  plugins: [],
}