import daisyui from 'daisyui'
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,svelte,ts}",
    "./index.html",
  ],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
		logs: false,
		themes: [
			{
				light: {
					...daisyui.themes['light'],
					'primary-focus': 'mediumblue',
				},
			},
		],
	},
} 