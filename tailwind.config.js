/** @type {import('tailwindcss').Config} */
export default {
  daisyui: {
    themes: [
      {
        lightThemeRently: {
          primary: '#4A43EC',
          secondary: '#000000',
          tertiary: '#ffffff',
          info: '#44D2F1',
          success: '#20C745',
          warning: '#F4A74B',
          error: '#F45252',
          background: '#ffffff',
          transition: 'all 0.3s ease',
        },
        darkThemeRently: {
          primary: '#4A43EC',
          secondary: '#ffffff',
          tertiary: '#000000',
          info: '#44D2F1',
          success: '#20C745',
          warning: '#F4A74B',
          error: '#F45252',
          background: '#30314E',
          transition: 'all 0.3s ease',
        },
      },
    ],
    darkTheme: 'darkTheme',
  },
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography'), , require('daisyui')],
}
