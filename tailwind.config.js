/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#005da7',
        'primary-soft': '#d4e3ff',
        'primary-mid': '#a4c9ff',
        secondary: '#006d36',
        'secondary-soft': '#83fba5',
        surface: '#fbf9f8',
        'surface-low': '#f5f7f8',
        'surface-card': '#ffffff',
        'surface-border': '#c1c7d3',
        text: '#1b1c1c',
        muted: '#414751',
        warning: '#7f5300',
        'warning-soft': '#ffddb4',
        danger: '#ba1a1a',
        'danger-soft': '#ffdad6',
      },
      fontFamily: {
        headline: ['Atkinson Hyperlegible Next', 'Inter', 'system-ui', 'sans-serif'],
        body: ['Source Sans 3', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 10px 30px rgba(74, 144, 226, 0.10)',
        glow: '0 0 22px rgba(0, 93, 167, 0.14)',
      },
    },
  },
  plugins: [],
};
