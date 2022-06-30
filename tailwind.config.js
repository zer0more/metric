// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.vue"],
  theme: {
    fontFamily: {
      'slab' : 'Roboto Slab, serif', 
      'condensed' : 'Roboto Condensed, sans-serif'
    },
    extend: {
      colors: {
        'header-menu': '#222222',
        'hero-bg': '#4dbd90',
        'text': '#333333',
        'pricing-bg': '#dde7ed',
        'footer-bg': '#2b2c2e',
        'nav-hover': 'rgba(181,181,181,0.5)'
      },
      spacing: {
        'header': '72px',
        'y': '70px'
      },
      height: {
        'header': '72px',
      },
      boxShadow: {
        'header': '0 1px 0 0 rgba(0,0,0,0.13)',
        'header-hover': 'inset 0 3px 0 0 rgba(181,181,181,0.5)',
        'hero-btn': '0 2px 1px 0 rgb(0 0 0 / 12%), inset 0 0 0 2px #000',
      },
      backgroundImage: {
        'hero': "url('../images/hero-bg.png')",
      }
    },
  },
  plugins: [],
}
