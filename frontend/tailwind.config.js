/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
  	extend: {
  		colors: {
  			main: '#FFDC58',
  			mainAccent: '#ffc800',
  			overlay: 'rgba(0,0,0,0.8)',
  			bg: '#FEF2E8',
  			text: '#000',
  			border: '#000',
  			darkBg: '#374151',
  			darkText: '#eeefe9',
  			darkBorder: '#000',
  			secondaryBlack: '#1b1b1b'
  		},
  		borderRadius: {
  			base: '5px',
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		boxShadow: {
  			light: '4px 4px 0px 0px #000',
  			dark: '4px 4px 0px 0px #000'
  		},
  		translate: {
  			boxShadowX: '4px',
  			boxShadowY: '4px',
  			reverseBoxShadowX: '-4px',
  			reverseBoxShadowY: '-4px'
  		},
  		fontWeight: {
  			base: '500',
  			heading: '700'
  		},
		fontFamily: {
			suse: ["Suse", "sans-serif"],
			nunito: ["Nunito", "sans-serif"],
			spirax: ["Spirax", "sans-serif"],
			roboto: ["Roboto", "sans-serif"],
			playfair: ["Playfair Display", "sans-serif"],
			poppins: ["Poppins", "sans-serif"],
		},
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
