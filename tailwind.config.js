/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './resources/**/*.blade.php',
    './resources/**/*.js',
    './resources/**/*.vue',
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto-slab': ['"Roboto Slab"', 'serif']
      },
    },
  },
  plugins: [],
}
