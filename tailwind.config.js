// const { join } = require('path');
// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [join(__dirname,"./src/**/*.{html,js}")],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {   colors: {
      primary: '#FF6363',
      rondap:'#1F1F1F',
      web_black:'#252525',
      hex:'#1a1a1a',
      secondary: {
        100: '#E2E2D5',
        200: '#888883',
        300:'#E812B9',

      },
      linkedin:'#006699'
    },
    fontFamily: {
      body: ['Poppins']
    },
    width: {
      '400':'400px',
      '834':'834px',
      '484': '484px',
      '415':'415px',
      '436': '436px',
      '607':'607px',
      '545':'545px',
      '1440':'1440px',
      'konga-jumia': '252px',
      '364':'364px',
      '783':'783px'
     },
     maxWidth: {
      '1440': '1440px',
    },lineHeight: {
      '30': '30px',
    },height:{
      '418':'418px',
      '472':'472px'
    },
  }, 
  },
  variants: {
    extend: {
      visibility: ["group-hover"],
      display:["hover"]
    },
   },
  plugins: [],
}