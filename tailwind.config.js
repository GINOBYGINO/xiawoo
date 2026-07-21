/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mc: {
          dark: '#0f172a',
          darker: '#020617',
          card: '#1e293b',
          accent: '#f59e0b',
          glow: '#fbbf24',
          muted: '#94a3b8',
        },
      },
      fontFamily: {
        sans: ['"Noto Sans TC"', 'system-ui', 'sans-serif'],
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'marquee': 'marquee 20s linear infinite',
        'glitch': 'glitch 3s infinite',
        'flicker': 'flicker 2.5s infinite',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(245, 158, 11, 0.4)' },
          '50%': { boxShadow: '0 0 40px rgba(245, 158, 11, 0.8)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        glitch: {
          '0%, 90%, 100%': { transform: 'translate(0)', clipPath: 'inset(0)' },
          '92%': { transform: 'translate(-3px, 1px)', clipPath: 'inset(20% 0 40% 0)' },
          '94%': { transform: 'translate(3px, -1px)', clipPath: 'inset(50% 0 10% 0)' },
          '96%': { transform: 'translate(-2px, 2px)', clipPath: 'inset(10% 0 60% 0)' },
        },
        flicker: {
          '0%, 100%': { opacity: '1' },
          '41%': { opacity: '1' },
          '42%': { opacity: '0.6' },
          '43%': { opacity: '1' },
          '45%': { opacity: '0.4' },
          '46%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
