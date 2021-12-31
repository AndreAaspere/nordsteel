module.exports = {
  purge: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false,
  variants: {
    extend: {},
  },
  // mode: 'jit',
  plugins: [
    require('@tailwindcss/aspect-ratio') //not needed
  ],
  theme: {
    extend: {
      padding: {
        '1%': '1%',
        '2%': '2%',
        '3%': '3%',
        '4%': '4%',
        '5%': '5%',
        '10%': '10%',
        '6vh': '6vh'
      },
      margin: {
        '1%': '1%',
        '2%': '2%',
        '3%': '3%',
        '5%': '5%',
        '8%': '8%',
        '10%': '10%',
      },
      height: {
        '30vw': '30vw',
      },
      maxWidth: {
        '120%': '120%',
      },
      width: {
        '120%': '120%',
        '200%': '200%',
        '140vh': '140vh',
      }
    }
  },
  variants: {
    extend: {
     animation: ['hover', 'focus'],
    }
  }
};
  