/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: {
          950: '#050505',
          900: '#090909', // primary background
          850: '#0d0d0d',
          800: '#111111', // secondary background
          750: '#151515',
          700: '#191919', // surface
          600: '#222222', // elevated surface
          500: '#333333',
          400: '#444444',
          border: 'rgba(255, 255, 255, 0.08)',
          'border-bright': 'rgba(255, 255, 255, 0.16)',
          'border-accent': 'rgba(167, 139, 250, 0.25)',
        },
        editorial: {
          primary: '#F2F0EB',
          secondary: '#969696',
          muted: '#626262',
          metallic: '#D5D5D5',
        },
        cyber: {
          accent: '#A78BFA', // Obsidian Violet Accent
          'accent-glow': 'rgba(167, 139, 250, 0.4)',
          'accent-dim': '#8B5CF6',
          gold: '#B99B72',   // Secondary Accent (Champagne / Metallic Gold-Bronze)
          'gold-dim': 'rgba(185, 155, 114, 0.15)',
          emerald: '#34D399',
          amber: '#FBBF24',
          rose: '#F43F5E',
          cyan: '#38BDF8',
        }
      },
      fontFamily: {
        sans: ['Space Grotesk', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        display: ['Space Grotesk', 'Syne', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Courier New', 'monospace'],
      },
      letterSpacing: {
        tighter: '-0.04em',
        tight: '-0.02em',
        widest: '0.25em',
        ultra: '0.4em',
      },
      animation: {
        'pulse-subtle': 'pulseSubtle 4s ease-in-out infinite',
        'float-slow': 'floatSlow 7s ease-in-out infinite',
        'scanline': 'scanline 8s linear infinite',
      },
      keyframes: {
        pulseSubtle: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.02)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(1000%)' },
        }
      }
    },
  },
  plugins: [],
}
