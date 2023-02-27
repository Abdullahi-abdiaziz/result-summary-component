/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
      screen: {
        mobile: '375px',
        desktop: '1440px',
      },
      fontFamily: {
        'body': ['"Hanken Grotesk"'],
      },
  extend: {
    colors: {
      lightRed: 'hsl(0, 100%, 67%)',
      orangeyYellow:'hsl(39, 100%, 56%)',
      greenTeal: 'hsl(166, 100%, 37%)',
      cobaltBlue: 'hsl(234, 85%, 45%)',
      grLightSlateBluebg: 'hsl(252, 100%, 67%)',
      grLightRoyalBluebg: 'hsl(241, 81%, 54%)',
      grVioletBlue: 'hsla(256, 72%, 46%, 1)',
      grPersianbBlue: 'hsla(241, 72%, 46%)',
      White: 'hsl(0, 0%, 100%)',
      paleBlue: 'hsl(221, 100%, 96%)',
      lightLavender: 'hsl(241, 100%, 89%)',
      darkGrayBlue: 'hsl(224, 30%, 27%)'
    },
    animation: {
      wiggle: 'spin .5s ease-in-out'
    }
  },
  },
  plugins: [],
}
