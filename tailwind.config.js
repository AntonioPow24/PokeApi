/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    screens: {
      'sm': {'max':'640px'},
    

      'md': {'max':'768px'},
    

      'lg': {'max':'970px'},
      

      'xl': '1280px',
      

      '2xl': '1536px',

    },

    extend: {
      gridTemplateColumns: {
        'auto-fill-200': 'repeat(auto-fill, minmax(200px, 1fr))',

      },
    },
  },
  plugins: [],
}