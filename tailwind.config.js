module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  purge: [
  ],
  theme: {
    colors: {
      'dark-green': '#006663',
      'green': '#00807C',
      'red': '#C64E3F',
      'yellow': '#FFCB70',
      'pink': '#FCC8AC',
      'dark-gray': '#393C3B',
      'cream': '#FAF4EE',
    },
    fontFamily: {
      serif: ['PV'],
      sans: ['RH'],
      brand: ['PT']
    },
    fontWeight: {
      'medium': 600
    },
    backgroundImage: {
      'hero': "url('assets/images/hero-collage.png')",
    },
    extend: {
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
