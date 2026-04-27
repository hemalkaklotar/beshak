/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Base
        white: '#FFFFFF',
        black: '#181818',
        zinc: {
          900: '#18181B',
          500: '#71717A',
          300: '#A1A1AA',
          200: '#D4D4D8',
          100: '#F4F4F5',
        },

        // Primary (Green System)
        primary: {
          700: '#227340',
          600: '#26934E',
          500: '#33AB5F',
          400: '#5BCD85',
          300: '#93DFAF',
          200: '#C2F0D2',
          100: '#E0F8E8',
        },

        // Accent / Brand Colors
        blue: '#4285F4',
        red: '#EA4335',
        yellow: {
          500: '#FACC15',
          600: '#EAB308',
          400: '#FBBC05',
        },
        purple: '#7C3AED',
        green: '#34A853', // secondary green (Google style)
      },
      fontSize: {
        'display-lg': [
          'var(--text-display-lg)',
          { lineHeight: 'var(--leading-display-lg)', fontWeight: '700' }
        ],

        'display-md': [
          'var(--text-display-md)',
          { lineHeight: 'var(--leading-display-md)', fontWeight: '700' }
        ],

        'display-sm': [
          'var(--text-display-sm)',
          { lineHeight: 'var(--leading-display-sm)', fontWeight: '700' }
        ],

        'heading-lg': [
          'var(--text-heading-lg)',
          { lineHeight: 'var(--leading-heading-lg)', fontWeight: '700' }
        ],

        'heading-md': [
          'var(--text-heading-md)',
          { lineHeight: 'var(--leading-heading-md)', fontWeight: '500' }
        ],

        'body-md': [
          'var(--text-body-md)',
          { lineHeight: 'var(--leading-body-md)', fontWeight: '400' }
        ],

        'caption': [
          'var(--text-caption)',
          { lineHeight: 'var(--leading-caption)', fontWeight: '400' }
        ],
      },
      boxShadow: {
        card: '0px 8px 32px 0px rgba(0, 0, 0, 0.12)', // converted from #0000001F
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(90deg, theme(colors.primary.700), theme(colors.primary.500))',

        'gradient-light': 'linear-gradient(180deg, theme(colors.white), theme(colors.primary.100))',

        'gradient-zinc': 'linear-gradient(270deg, theme(colors.zinc.300), theme(colors.zinc.500))',
      },
      keyframes: {
        floatX: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(15px)' }, // move right
        },
        floatY: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' }, // move up
        },
      },
      animation: {
        'float-x': 'floatX 2s ease-in-out infinite',
        'float-y': 'floatY 2s ease-in-out infinite',

      },
      letterSpacing: {
        wide1: '1px',
      },
    },
  },
  plugins: [],
}

