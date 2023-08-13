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
            'text-transform': 'capitalize',
          },
          '.roundedBtn': {
            'border-radius': '15px',
            padding: '10px 14px',
            'text-transform': 'capitalize',
          },

          // Navbar settings
          '.navbar': {
            height: '75px',
          },

          // Card settings

          '.card': {
            'box-shadow': '-5px 5px 15px 0px rgba(0, 0, 0, 0.15)',
            padding: '14px',
            'border-radius': '15px',
            gap: '15px',
            width: '350px',
            'max-height': '320px',
          },
          '.card-body': {
            padding: '0',
          },
          '.card-body p': {
            'flex-grow': '0',
          },

          // Card image settings
          '.card figure': {
            'border-radius': '5.5px',
          },

          // Searchbar for properties
          '.searchbar': {
            'border-radius': '15px',
            padding: '14px',
            'box-shadow': '-5px 5px 15px 0px rgba(0, 0, 0, 0.15)',
          },

          // Inputs settings
          '.input': {
            border: 'none',
            borderRadius: '7.5px',
            padding: '15px 23px',
            'box-shadow': '-5px 5px 15px 0px rgba(0, 0, 0, 0.15)',
            height: '52.5px',
          },

          '.input-no-shadow': {
            'box-shadow': 'none',
            outline: 'none',
            transition: 'all 0.3s ease',
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

          // Alert settings
          '.alert': {
            'font-size': '1rem',
            'font-weight': '400',
            height: '75px',
            padding: '15px',
            'border-radius': '15px',
            background: '#FFFFFF',
            border: 'none',
            'box-shadow': '-5px 5px 15px 0px rgba(0, 0, 0, 0.15)',
          },

          // Modal settings
          '.modal-box': {
            width: '350px',
            height: '350px',
            background: '#FFFFFF',
            'border-radius': '15px',
            'box-shadow': '-5px 5px 15px 0px rgba(0, 0, 0, 0.15)',
            padding: '50px',
            display: 'flex',
            'flex-direction': 'column',
            'justify-content': 'space-between',
            'align-items': 'center',
          },

          // Call to action button settings
          '--bg-opacity-cta': '0.1',
          '--border-radius-cta': '15px',

          // Properties map container settings
          '.mapContainer': {
            'border-radius': '0 15px 15px 0',
            'box-shadow': '-5px 5px 15px 0px rgba(0, 0, 0, 0.15)',
          },

          '.blog': {
            'border-radius': '15px',
            'box-shadow': '-5px 5px 15px 0px rgba(0, 0, 0, 0.15)',
          },

          '.customPopup .leaflet-popup-content-wrapper .leaflet-popup-content':
            {
              margin: '0 !important',
              width: '250px',
              background: '#FFFFFF35',
            },

          '.customPopup .leaflet-popup-content-wrapper, .leaflet-popup-tip': {
            background: 'transparent',
            'box-shadow': 'none',
          },

          '.mobileMapContainer': {
            'border-radius': '15px 15px 0 0',
            'box-shadow': '0px -10px 10px 0px rgba(0, 0, 0, 0.15)',
            position: 'fixed',
            bottom: '32px',
            left: '0',
            zIndex: '1000',
          },

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
          '.textLight': {
            'font-size': '18px',
            'font-weight': '400',
          },
          '.tiny-text': {
            'font-size': '14px',
          },

          '.no-scrollbar::-webkit-scrollbar': {
            display: 'none',
          },

          '.topShadow': {
            'box-shadow': '0px -5px 12px 0px rgba(0, 0, 0, 0.15)',
          },

          '--bg-gradiant':
            'linear-gradient(to right top, #fff4f5, #fff5f5, #fff6f5, #fff7f5, #fff8f5, #fff8f5, #fff8f5, #fff8f5, #fff6f6, #fff5f8, #fef4fb, #f9f4ff)',

          animation: {
            openmap: 'openmap 1s ease-in',
            closemap: 'closemap 1s ease-in',
          },

          keyframes: {
            openmap: {
              // initial position
              '0%': { width: '0' },
              // final position
              '100%': { width: '100%' },
            },
            closemap: {
              // initial position
              '0%': { left: '100%' },
              // final position
              '100%': { left: '0%' },
            },
          },
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

          '.input-no-shadow': {
            'background-color': '#30314E',
            transition: 'all 0.3s ease',
          },
        },
      },
    ],
  },
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
}
