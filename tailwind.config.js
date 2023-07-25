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

          // Inputs settings
          '.input': {
            border: 'none',
            'border-radius': '15px',
            padding: '15px 23px',
            'box-shadow': '-5px 5px 15px 0px rgba(0, 0, 0, 0.15)',
            height: '52.5px',
          },

          '.input:focus': {
            border: 'none',
            outline: 'none',
            'outline-offset': 'none',
          },

          // Select settings
          '.select': {
            border: 'none',
            'border-radius': '15px',
            padding: '15px 23px',
            'box-shadow': '-5px 5px 15px 0px rgba(0, 0, 0, 0.15)',
            height: '52.5px',
            'font-weight': '400',
            'font-size': '1rem',
          },

          '.select:focus': {
            border: 'none',
            outline: 'none',
            'outline-offset': 'none',
          },

          // Checkbox settings
          '.checkbox': {
            'border-radius': '5px',
            height: '20px',
            width: '20px',
            border: '2px solid #808191',
          },

          '.checkbox:checked': {
            'background-image':
              'linear-gradient(-45deg, transparent 65%, hsl(var(--chkbg)) 65.99%), linear-gradient(45deg, transparent 75%, hsl(var(--chkbg)) 75.99%), linear-gradient(-45deg, hsl(var(--chkbg)) 40%, transparent 40.99%), linear-gradient(45deg, hsl(var(--chkbg)) 30%, hsl(0, 0%, 100%) 30.99%, hsl(0, 0%, 100%) 40%, transparent 40.99%), linear-gradient(-45deg, hsl(0, 0%, 100%) 50%, hsl(var(--chkbg)) 50.99%)',
          },

          // Textarea settings
          '.textarea': {
            border: 'none',
            'border-radius': '15px',
            padding: '23px 23px',
            'box-shadow': '-5px 5px 15px 0px rgba(0, 0, 0, 0.15)',
            resize: 'none',
            'font-size': '1rem',
            'font-weight': '400',
          },

          '.textarea:focus': {
            border: 'none',
            outline: 'none',
            'outline-offset': 'none',
          },

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
