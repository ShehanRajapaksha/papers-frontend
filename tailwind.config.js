const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
     dark:'#3D3D3D',
     stone:'#a8a29e',
     back:'#556B2F',
    

    }
    },
  },
  plugins: [],
});
