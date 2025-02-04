/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',

      'primary': {
        100: '#194bff',
        200: '#525dff',
        300: '#7170ff',
        400: '#8b83ff',
        500: '#a197ff',
        600: '#b6abff'
      },
      'surface': {
        100: '#07022e',
        200: '#1f1e42',
        300: '#524f6e',
        400: '#524f6e',
        500: '#6d6a84',
        600: '#89869c',
        700: '#000000'
      },
      'on-background': '#ffffff',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    fontFamily: {
      'body': ['"Inter"', 'Helvetica', 'sans-serif']
    }
  },
  plugins: [],
}
