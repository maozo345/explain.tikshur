/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        deep: {
          950: '#0a0514', // Main bg
          900: '#150a26',
          800: '#220f3f',
          700: '#341a5b',
        },
        spiritual: {
          50: '#f4f0ff',
          100: '#ebdffc',
          200: '#d7bff9',
          300: '#c49ff5',
          400: '#a960ee', // Highlight purple
          500: '#9135e0',
          600: '#7a22c9',
        },
        gold: {
          100: '#fff9e6',
          300: '#ffdf80',
          400: '#ffc107', // Button base
          500: '#ff9800', // Button gradient end
          600: '#e68900',
          glow: '#ffb700',
        }
      },
      fontFamily: {
        sans: ['Assistant', 'sans-serif'],
        serif: ['Frank Ruhl Libre', 'serif'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 8s ease-in-out infinite',
        'float-delayed': 'float 8s ease-in-out 4s infinite',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      },
      backgroundImage: {
        'hero-glow': 'radial-gradient(circle at 50% 0%, rgba(120, 50, 255, 0.25) 0%, rgba(10, 5, 20, 0) 70%)',
      }
    },
  },
  plugins: [],
}