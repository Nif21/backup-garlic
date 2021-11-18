module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["IBM Plex Sans", "ui-sans-serif", "system-ui"],
         },
      colors:{
        "coco":{
          "normal":"#948E68"
        },
        "primary":{
          "dark":"#125C13",
          "normal": "#3E7C17",
          "light": "#F4A442",
          "white": "#FEFDF9",
          "lesswhite": "#F0EEE7",
          "coco": "#F4A442",
          "darkcoco":"#E39A40"
        }
      
      }   
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('daisyui'), 

  ],
}
