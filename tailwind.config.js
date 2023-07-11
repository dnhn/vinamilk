/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans-display-bold': ['VNM Sans Display Bold', ...defaultTheme.fontFamily.sans],
        'sans-std': ['VNM Sans Std', ...defaultTheme.fontFamily.sans],
        'sans-display': ['VNM Sans Display', ...defaultTheme.fontFamily.sans],
        'inter': ['Inter', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
