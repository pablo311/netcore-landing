import type { Config } from 'tailwindcss'

// Colores de brand guidelines v2.1 (netcore-marketing/brand/brand-guidelines-netcore.md)
const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        ink:   '#111212',
        navy:  { DEFAULT: '#0A2540', light: '#0D2E4E' },
        mist:  '#F3F6F9',
        line:  '#E1E6EC',
        muted: '#4A5562',
        nc: {
          blue:  '#47A1DD',
          steel: '#4780A7',
          link:  '#2E6E99',
          cyan:  '#27ABCB',
          teal:  '#0CB8B3',
          green: '#9AC77D',
        },
        abocato:  { navy: '#081A32', panel: '#12294A', gold: '#DCBA6C', light: '#F1D584', deep: '#C49C51', dark: '#887339' },
        vendalia: { violet: '#9A06FE', indigo: '#6B68FC', ink: '#5B31C9', tint: '#F5F2FF' },
        syskore:  { charcoal: '#1A1F2E', panel: '#232A3D', navy: '#263E6B', silver: '#CCCCCD' },
        safety:   { navy: '#0A1628', panel: '#13243A', teal: '#00B4A6', deep: '#00796F' },
      },
      fontFamily: {
        sans: ['Inter', '"Segoe UI"', 'system-ui', 'sans-serif'],
        display: ['"Bricolage Grotesque"', 'Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
