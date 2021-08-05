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
