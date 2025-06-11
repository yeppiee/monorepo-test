/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,svelte,ts}",
    "./index.html",
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
		logs: false,
		themes: [
			{
				light: {
					...require('daisyui/src/theming/themes')['light'],
					'primary-focus': 'mediumblue',
				},
			},
		],
	},
} 