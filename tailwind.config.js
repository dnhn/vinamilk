/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        vnm: '#0213b0',
        main: '#fffff1',
        white: '#fffff1',
        note: '#8c8c8c',
      },
      fontFamily: {
        'sans-display-bold': ['VNM Sans Display Bold', ...defaultTheme.fontFamily.sans],
        'sans-display': ['VNM Sans Display', ...defaultTheme.fontFamily.sans],
        'sans-std': ['VNM Sans Std', ...defaultTheme.fontFamily.sans],
        'inter': ['Inter', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
