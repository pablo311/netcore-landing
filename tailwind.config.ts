import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0A2540',
          light:   '#0D2E4E',
          dark:    '#071B30',
        },
        electric: {
          DEFAULT: '#00D1FF',
          dim:     '#00A8CC',
          glow:    '#00D1FF26',
        },
        brand: {
          50:  '#e0faff',
          100: '#b3f3ff',
          200: '#80ebff',
          300: '#4de3ff',
          400: '#1ADAFF',
          500: '#00D1FF',
          600: '#00A8CC',
          700: '#007F99',
          800: '#005566',
          900: '#002B33',
          950: '#001519',
        },
        slate: {
          300: '#B0C4D8',
          400: '#8BA3BC',
          500: '#627D98',
          600: '#486581',
          700: '#334E68',
          800: '#243B53',
          900: '#102A43',
          950: '#0A1929',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
