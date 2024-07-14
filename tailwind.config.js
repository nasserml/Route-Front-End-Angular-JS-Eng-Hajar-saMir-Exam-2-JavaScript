/** @type {import('tailwindcss').Config} */

const content = ['./index.html', './src/**/*.{html,js}']


const colors = {
  'color-hexa-0D0D0D': '#0D0D0D',
  'color-hexa-alpha-f9f6f6ca': '#f9f6f6ca',
  'black':'rgb(0,0,0)',
  'white':'#FFFFFF',
  'color-rgb-249-246-246':'rgb(249, 246, 246)',
  'color-rgb-206-212-218': 'rgb(206, 212, 218)',
  'color-hexa-86b7fe': '#86b7fe',
  'color-rgba-13-110-253-025':'rgba(13,110,253,0.25)',
  'color-rgb-207-244-252':'rgb(207,244,252)',
  'color-rgb-182-239-251':'rgb(182,239,251)',
  'color-rgb-5-81-96':'rgb(5,81,96)',
  'color-rgb-21-115-71': 'rgb(21,115,71)',
  'color-rgb-20-108-67':'rgb(20,108,67)',
  'color-rgb-25-135-84': 'rgb(25,135,84)',
  'color-rgb-220-53-69':'rgb(220,53,69)',
  'color-rgb-187-45-59':'rgb(187,45,59)',
  'color-rgb-176-42-55':'rgb(176,42,55)',
  'color-rgb-33-37-41': 'rgb(33,37,41)',
  'color-hexa-86b7fe': '#86b7fe',
  'color-rgb-248-215-218':'rgb(248,215,218)',
  'color-rgb-245-194-199':'rgb(245,194,199)',
  'color-hexa-dc3545':'#dc3545',
}

const fontSize = {
  '16px':'1rem',
  '28px':'1.75rem',
  '32px': '2rem',
  '38px': '2.375rem',
  '64px': '4rem',
}

const lineHeight = {
  '34px': '2.125rem',
  '32px': '2rem',
  '24px': '1.5rem',
  '16px':'1rem',
  '38px': '2.375rem',
  '64px': '4rem'
}

const fontWeight = {
  '400':'400',
  '500': '500',
  '700':'700',
  '900': '900',
}

const container = {
  center:true,
  padding: '0.75rem'
}

const width = {
  
  '50px': '3.125rem',
  '66px': '4.125rem'
}

const inset = {
  '247px': '247px'
}

const boxShadow = {
  'input-box-shadow': '0 0 0 0.25rem rgba(13,110,253,0.25)'
}


const spacing = {
  '6px': '0.375rem',
  '12px': '0.75rem'
}

const borderWidth = {

  '1.5px':'0.094rem' 

}

const borderRadius = {
  '6px' : '0.375rem'
};

const transitionDuration = {
  '0.15s' : '0.15s'
};


const minHeight = {
  '100vh':'100vh'
};

module.exports = {
  content,
  
  theme: {

    container,
    extend: {
      colors,
      fontSize,
      lineHeight, 
      fontWeight,
      width, 
      inset,
      boxShadow,
      spacing, 
      borderWidth,
      borderRadius, 
      transitionDuration,
      minHeight
    },
  },
  plugins: [],
}



