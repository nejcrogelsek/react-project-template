/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	mode: 'jit',
	media: false,
	theme: {
		extend: {
			colors: {
				primary: '#0369d7'
			},
			keyframes: {
				'slide-down': {
					'0%': {
						'-webkit-transform': 'translateY(-20px)',
						transform: 'translateY(-20px)',
					},
					'100%': {
						'-webkit-transform': 'translateY(0px)',
						transform: 'translateY(0px)',
					},
				},
				'slide-in': {
					'0%': {
						'-webkit-transform': 'translateX(-120%)',
						transform: 'translateX(-120%)',
					},
					'100%': {
						'-webkit-transform': 'translateX(0%)',
						transform: 'translateX(0%)',
					},
				},
				'slide-out': {
					'0%': {
						'-webkit-transform': 'translateX(0%)',
						transform: 'translateX(0%)',
					},
					'100%': {
						'-webkit-transform': 'translateX(-120%)',
						transform: 'translateX(-120%)',
					},
				},
				'opacity': {
					'0%': {
						'-webkit-opacity': '0',
						opacity: '0',
					},
					'100%': {
						'-webkit-opacity': '1',
						opacity: '1',
					},
				},
			},
			animation: {
				'slide-in': 'slide-in 0.5s ease-out',
				'slide-out': 'slide-out 0.5s ease-out',
				'slide-down': 'slide-down 0.5s ease-out',
				'opacity': 'opacity 0.5s ease-out',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [require('@tailwindcss/forms')],
}
