/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        hippiegreen: '#509051',
        wildsand: '#F4F4F4',
        gin: '#E7F2E9',
        dovegray: '#6F6F6F',
        alto: '#D7D7D7',
        emperor: '#545454',
        silverchalice: '#A4A4A4',
        emerald: '#2ACB48',
        gallery: '#EDEDED'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
