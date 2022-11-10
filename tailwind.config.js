/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#FFC952',
        secondary: '#82868B',
        success: '#28C76F',
        danger: '#EA5455',
        warning: '#EB7E17',
        info: '#00CFE8',
        dark: '#4B4B4B',
        light: '#A5A29E',
      },
    },
  },
  plugins: [],
  purge: {
    content: ['./src/**/*.{js,jsx,ts,tsx}', './src/components/**/*.styled.tsx'],
  },
};
