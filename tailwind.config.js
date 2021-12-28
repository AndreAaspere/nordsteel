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
      spacing: {
        '15': '60vw', //not needed
      },
      animation: ['group-hover'],
    }
  },
  variants: {
    extend: {
     animation: ['hover', 'focus'],
    }
  }
};
  