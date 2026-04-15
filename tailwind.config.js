/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          // Brand Guidelines exact values
          cyan:    '#00DFFC',   // Electric Cyan — primary CTA accent
          sky:     '#89CFE0',   // Soft Sky Blue — secondary accent
          navy:    '#082144',   // Deep Navy — dark backgrounds, headings
          gray:    '#867D93',   // Muted Gray — body/secondary text
          white:   '#FFFFFF',   // Pure White
          // Supporting tones
          dark:    '#050F1F',   // Deeper dark for hero bg
          teal:    '#0DACC9',   // Mid-tone cyan for gradients
          glow:    '#34D4F0',   // Lighter glow for effects
          light:   '#F4F8FF',   // Near-white light surface
          mist:    '#EAF6FF',   // Very light blue tint surface
        },
      },
      fontFamily: {
        display: ['var(--font-syne)', 'Syne', 'sans-serif'],
        sans:    ['var(--font-inter)', 'Inter', 'sans-serif'],
      },
      letterSpacing: {
        tight:   '-0.03em',
        display: '-0.04em',
        wide:    '0.08em',
        widest:  '0.16em',
      },
      lineHeight: {
        body:    '1.75',
        relaxed: '1.7',
        tight:   '1.1',
      },
      boxShadow: {
        card:         '0 1px 3px rgba(8,33,68,0.06), 0 4px 16px rgba(8,33,68,0.08)',
        'card-hover': '0 4px 12px rgba(8,33,68,0.10), 0 16px 40px rgba(8,33,68,0.14)',
        cyan:         '0 4px 24px rgba(0,223,252,0.35)',
        'cyan-lg':    '0 8px 48px rgba(0,223,252,0.40)',
        'cyan-glow':  '0 0 60px rgba(0,223,252,0.20)',
        inner:        'inset 0 1px 0 rgba(255,255,255,0.1)',
        float:        '0 20px 60px rgba(8,33,68,0.18), 0 4px 16px rgba(8,33,68,0.12)',
      },
      backgroundImage: {
        'hero-gradient':    'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(0,223,252,0.12) 0%, transparent 60%), radial-gradient(ellipse 60% 80% at 80% 50%, rgba(13,172,201,0.08) 0%, transparent 50%)',
        'cyan-gradient':    'linear-gradient(135deg, #00DFFC 0%, #0DACC9 100%)',
        'navy-gradient':    'linear-gradient(180deg, #082144 0%, #050F1F 100%)',
        'section-gradient': 'linear-gradient(180deg, #F4F8FF 0%, #FFFFFF 100%)',
      },
      animation: {
        'fade-up':      'fadeUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'fade-in':      'fadeIn 0.5s ease forwards',
        'slide-left':   'slideLeft 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'pulse-slow':   'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float':        'float 6s ease-in-out infinite',
        'float-delay':  'float 6s ease-in-out infinite 2s',
        'glow-pulse':   'glowPulse 3s ease-in-out infinite',
        'scan-line':    'scanLine 3s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideLeft: {
          '0%':   { opacity: '0', transform: 'translateX(24px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-10px)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.6', boxShadow: '0 0 20px rgba(0,223,252,0.3)' },
          '50%':      { opacity: '1',   boxShadow: '0 0 40px rgba(0,223,252,0.6)' },
        },
        scanLine: {
          '0%':   { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(400%)' },
        },
      },
    },
  },
  plugins: [],
};
