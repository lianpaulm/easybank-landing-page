/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['"Public Sans"', 'sans-serif'],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      // primary
      'dark-blue': 'hsl(233, 26%, 24%)',
      'lime-green': 'hsl(136, 65%, 51%)',
      'bright-cyan': 'hsl(192, 70%, 51%)',
      // neutral
      'grayish-blue': 'hsl(233, 8%, 62%)',
      'light-grayish-blue': 'hsl(220, 16%, 96%)',
      'very-light-gray': 'hsl(0, 0%, 98%)',
      'white': 'hsl(0, 0%, 100%)',
    },
    extend: {
      screens: {
        'lg': '976px',
        'xl': '1110px',
        '2xl': '1440px',
      },
    },
  },
  plugins: [],
}