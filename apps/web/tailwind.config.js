/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'cream': '#FFFFFF',
        'gold': '#F9B95C',
        'gold-light': '#F3F3F3',
        'charcoal': '#1F1F1F',
      },
      fontFamily: {
        'sans': ['Montserrat', 'system-ui', 'sans-serif'],
        'serif': ['Playfair Display', 'serif'],
      },
      letterSpacing: {
        'wide': '0.15em',
        'wider': '0.3em',
      },
    },
  },
  plugins: [],
}
