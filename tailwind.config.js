/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				bgPrimary: "#3556AB",
				borderPrimary: "#123EB1",
				fontPrimary: "#071D55",
				bgSecondary: "#CDE53D",
				btnDanger: "#AB3535",
				borderDanger: "#720D0D",
			},
		},
	},
	plugins: [],
};
