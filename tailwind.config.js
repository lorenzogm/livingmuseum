/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
        'dm-sans': ['DM Sans', 'sans-serif'],
        'primary': ['Roboto', 'sans-serif'],
        'secondary': ['DM Sans', 'sans-serif'],
      },
      colors: {
        'lm-primary': '#000000',
        'lm-secondary': '#FFCE10',
        'lm-text': '#292929',
        'lm-accent': '#E6E3E0',
        'lm-white': '#FFFFFF',
        'lm-black': '#000000',
      },
      fontSize: {
        'hero': ['4rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'section': ['2rem', { lineHeight: '1.2', letterSpacing: '0.05em' }],
        'heading': ['1.25rem', { lineHeight: '1.4', letterSpacing: '0.02em' }],
      },
      letterSpacing: {
        'tighter': '-0.05em',
        'tight': '-0.025em',
        'normal': '0em',
        'wide': '0.025em',
        'wider': '0.05em',
        'widest': '0.1em',
      },
      lineHeight: {
        'none': '1',
        'tighter': '1.1',
        'tight': '1.2',
        'snug': '1.3',
        'normal': '1.4',
        'relaxed': '1.6',
      }
    },
  },
  plugins: [],
}
