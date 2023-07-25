/** @type {import('tailwindcss').Config} */
export default {
  daisyui: {
    themes: [
      {
        lightThemeRently: {
          // Colors settings
          primary: '#4A43EC',
          secondary: '#000000',
          tertiary: '#ffffff',
          text: '#000000',
          textLight: '#808191',
          textInput: 'rgba(128, 129, 145, 0.50)',
          info: '#44D2F1',
          success: '#20C745',
          warning: '#F4A74B',
          error: '#F45252',
          background: '#ffffff',
          transition: 'all 0.3s ease',

          // Logo settings
          '.logo': {
            height: '4rem',
          },

          // Button settings
          '.btn': {
            'border-radius': '7.5px',
            padding: '10px 14px',
          },

          // Card settings

          '.card': {
            'box-shadow': '-5px 5px 15px 0px rgba(0, 0, 0, 0.15)',
            padding: '14px',
            'border-radius': '15px',
            gap: '15px',
            'min-width': '250px',
          },
          '.card-body': {
            padding: '0',
          },
          '.card-body p': {
            'flex-grow': '0',
          },

          // Card image settings
          '.card figure img': {
            'border-radius': '7.5px',
          },

          // Searchbar for properties
          '.searchbar': {
            'border-radius': '15px',
            padding: '14px',
            'box-shadow': '-5px 5px 15px 0px rgba(0, 0, 0, 0.15)',
          },

          // Inputs settings
          '--padding-input': '15px 23px',
          '--border-radius-input': '15px',
          '--box-shadow-input': '-5px 5px 15px 0px rgba(0, 0, 0, 0.15)',

          // Call to action button settings
          '--bg-opacity-cta': '0.1',
          '--border-radius-cta': '15px',

          // Global settings
          '--def-padding': '15px',

          '.h1': {
            'font-size': '24px',
            'font-weight': '700',
          },
          '.h2': {
            'font-size': '20px',
            'font-weight': '700',
          },
          '.text': {
            'font-size': '18px',
            'font-weight': '500',
          },
          '.text-light': {
            'font-size': '18px',
            'font-weight': '400',
          },
          '.tiny-text': {
            'font-size': '14px',
            'font-weight': '400',
          },

          '--bg-gradiant':
            'linear-gradient(to right top, #fff4f5, #fff5f5, #fff6f5, #fff7f5, #fff8f5, #fff8f5, #fff8f5, #fff8f5, #fff6f6, #fff5f8, #fef4fb, #f9f4ff)',
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
  plugins: [require('daisyui')],
}
