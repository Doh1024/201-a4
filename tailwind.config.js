/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    letterSpacing:{
      tightest: '-.075em',
      tighter: '-.05em',
      tight: '-.025em',
      normal: '0',
      wide: '.025em',
      wider: '.5rem',
      widest: '.8rem',
    },

    screens: {
      'sm': '650px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },

    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      med: '1.5rem',
      xl: '1.25rem',
      xxl: '2rem',
      xxxl: '1.953rem',
      xxxxl: '2rem',
      big: '5rem',
      xxxxxl: '7rem',
    },
    fontFamily:{
      'font1' :['Inter Tight', 'Lato', 'sans-serif'],
      'font2' :['Playfair Display', 'Inter Tight', 'Lato']
    },
    borderRadius:{
      'md': '5px'
    },
    color: {
      'light-grey': '#A9A9A9',
      'lightred': '#FF3B3F',
    },
    extend: {
      padding:{
        'md': '.3em .5em'
      },
      transitionDuration: {
        '0.4': '0.4s'
      },
      
    },
  },
  plugins: [],
}
