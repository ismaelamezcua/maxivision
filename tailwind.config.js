/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
<<<<<<< HEAD
    extend: {},
  },
  plugins: [],
=======
    fontFamily: {
      'sans': ['"Inter"', 'ui-sans-serif', 'system-ui'],
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
>>>>>>> sidebar-layout
}
