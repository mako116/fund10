/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors:{
        'royal-blue': '#0E349F',
        "blacks": '#2C2C2C',
        "linear1": '#21792E',
        "linear2": '#0E349F',
        "ladies-white": "#EAF0FF",
        "whiting": "#e5e7fd",
        "grayed": "#585858"
      },
      padding:{
        'padd': '18px, 29px, 18px, 29px',
        'paddi': '18.16px, 31.29px, 18.16px, 31.29px',
        "ban-pad": '19.01px, 32.76px, 19.01px, 32.76px'
      },
    
      gridTemplateColumns: {
        "grid-temp4": "grid-template-columns: repeat(4,1fr)",
        "grid-temp3": "grid-template-columns: repeat(3,1fr)",
        "grid-temp2": "grid-template-columns: repeat(2,1fr)",
      },
      backgroundColor:{
        "lightb": "#F0F4FF"
      }
    },
  },
  plugins: [],
}
