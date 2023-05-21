/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		fontFamily: {
			main: ["lucida sans"],
			logo: ["Times new roman"],
		},
		colors: {
			background: "#00ff9f",
			primary: "#001eff",
			secondary: "#00b8ff",
			contast: "#bd00ff",
			message: "#d600ff",
		},
		extend: {},
	},
	plugins: [],
};
