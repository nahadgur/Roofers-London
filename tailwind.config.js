// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#F2F4F0',
          100: '#DEE4D9',
          200: '#BFCBB5',
          300: '#9AAD8B',
          400: '#6D8857',
          500: '#496B2D',
          600: '#3E5A26',
          700: '#31481E',
          800: '#233315',
          900: '#17220E',
          950: '#0D1308',
        },
      },
      fontFamily: {
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
        body: ['DM Sans', 'system-ui', 'sans-serif'],
        display: ['Fraunces', 'Georgia', 'serif'],
      },
      keyframes: {
        'backdrop-in':  { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        'backdrop-out': { '0%': { opacity: '1' }, '100%': { opacity: '0' } },
        'modal-in':  { '0%': { opacity: '0', transform: 'scale(0.9) translateY(20px)' }, '100%': { opacity: '1', transform: 'scale(1) translateY(0)' } },
        'modal-out': { '0%': { opacity: '1', transform: 'scale(1) translateY(0)' }, '100%': { opacity: '0', transform: 'scale(0.9) translateY(20px)' } },
      },
      animation: {
        'backdrop-in':  'backdrop-in 0.3s ease-out',
        'backdrop-out': 'backdrop-out 0.3s ease-in',
        'modal-in':     'modal-in 0.3s ease-out',
        'modal-out':    'modal-out 0.3s ease-in',
      },
    },
  },
  plugins: [],
};
