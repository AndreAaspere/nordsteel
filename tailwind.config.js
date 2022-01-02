module.exports = {
  purge: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false,
  // mode: 'jit',
  theme: {
    extend: {
      colors: {
        'ns-green': '#8cc63f',
        'ns-blue': '#243c5a',
      },
      padding: {
        '1%': '1%',
        '2%': '2%',
        '3%': '3%',
        '4%': '4%',
        '5%': '5%',
        '8%': '8%',
        '10%': '10%',
        '11%': '11%',
        '80%': '80%',
        '4vh': '4vh'
      },
      margin: {
        '1%': '1%',
        '2%': '2%',
        '3%': '3%',
        'min4%': '-4%',
        '5%': '5%',
        '8%': '8%',
        '10%': '10%',
        '20%': '20%',
        'min30%': '-45%',
        '35%': '35%',
        '40%': '40%',
        '70%': '70%',
      },
      height: {
        '3%': '3%',
        '5%': '5%',
        '15%': '15%',
        '30%': '30%',
        '32%': '32%',
        '55%': '55%',
        '30vw': '30vw',
      },
      maxWidth: {
        '120%': '120%',
      },
      width: {
        '18%': '18%',
        '20%': '20%',
        '22%': '22%',
        '25%': '25%',
        '30%': '30%',
        '40%': '40%',
        '43%': '43%',
        '47%': '47%',
        '55%': '55%',
        '60%': '60%',
        '70%': '70%',
        '80%': '80%',
        '90%': '90%',
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
  