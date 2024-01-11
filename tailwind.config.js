/** @type {import('tailwindcss').Config} */
module.exports = {
  // darkMode: ['class'],
  // corePlugins: {
  //   preflight: false,
  // },
  important: '#root',
  content: [
    '.index.html',
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
        sm: '480px',
        md: '868px',
        lg: '976px',
        xl: '1440px',
      },
    },
    extend: {
      backgroundColor: {
        'theme-primary': 'var(--bg-primary)',
        'theme-secondary': 'var(--bg-secondary)',
        'theme-thirdary': 'var(--bg-thirdary)',

        'theme-btn-primary': 'var(--btn-bg-primary)',

        primary: '#464e5b',
      },

      colors: {
        'theme-primary': 'var(--text-primary)',
        'theme-secondary': 'var(--text-secondary)',

        'theme-btn-primary': 'var(--btn-text-primary)',
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
      },
    },
  },
};
