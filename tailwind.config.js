/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        // ── Palette Vilumanque ──────────────────────────────
        // #A98B76  warm brown / leather
        // #BFA28C  sand / linen
        // #F3E4C9  parchment cream
        // #BABF94  muted sage green

        brown: {
          950: '#1C1108',
          900: '#2D1F14',
          800: '#4A3326',
          700: '#6B4C39',
          600: '#8A6652',
          500: '#A98B76',  // ← palette
          400: '#BFA28C',  // ← palette
          300: '#D4BCAA',
          200: '#E8D5C3',
          100: '#F5EBE0',
          50:  '#FDFAF7',
        },
        sage: {
          800: '#6B6F52',
          700: '#858969',
          600: '#9EA282',
          500: '#BABF94',  // ← palette
          400: '#CACED0',  // unused, kept for range
          300: '#D2D5B8',
          200: '#E2E5CF',
          100: '#EFF1E5',
          50:  '#F7F8F2',
        },
        cream: {
          DEFAULT: '#F3E4C9',  // ← palette
          dark:    '#E8D0AA',
          light:   '#FAF3E4',
          50:      '#FEFCF7',
        },
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        'card':       '0 2px 8px -2px rgba(28,17,8,0.07), 0 1px 3px -1px rgba(28,17,8,0.04)',
        'card-hover': '0 8px 24px -4px rgba(28,17,8,0.11), 0 2px 8px -2px rgba(28,17,8,0.05)',
        'warm':       '0 4px 16px -4px rgba(169,139,118,0.35)',
      },
    },
  },
  plugins: [],
}
