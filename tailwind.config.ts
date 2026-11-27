import type { Config } from 'tailwindcss'

// Paleta de marca v2.1 (netcore-marketing/brand/brand-guidelines-netcore.md).
const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: { DEFAULT: '#0A2540', light: '#103257', dark: '#071B30' },
        ink: '#111212',
        primario: '#47A1DD',
        acero: '#4780A7',
        enlace: '#2E6E99',
        cian: '#27ABCB',
        teal: '#0CB8B3',
        verde: '#9AC77D',
        niebla: '#F3F7FA',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-bricolage)', 'var(--font-inter)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
