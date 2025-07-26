/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
        'display': ['Poppins', 'system-ui', '-apple-system', 'sans-serif'],
        'body': ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      letterSpacing: {
        'tight': '-0.025em',
        'normal': '0em',
        'wide': '0.025em',
      }
    },
  },
  plugins: [],
};
