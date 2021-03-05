import { createMuiTheme } from "@material-ui/core/styles"

const globalTheme = createMuiTheme({
	typography: {
		fontFamily: "Inter",
	},
})

export const lightTheme = createMuiTheme({
	...globalTheme,
	palette: {
		type: "light",
		primary: {
			// main: "#79FFE1",
			main: "#000",
		},
		divider: "#EAEAEA",
		background: {
			default: "#FAFAFA",
			paper: "#FFF",
		},
	},
})

export const darkTheme = createMuiTheme({
	...globalTheme,
	palette: {
		text: {
			primary: "#FFF",
			secondary: "#CCC",
			disabled: "#CCC",
			hint: "#CCC",
		},
		type: "dark",
		primary: {
			// main: #79FFE1,
			main: "#FFF",
		},
		divider: "#333",
		background: {
			default: "#000",
			paper: "#111",
		},
	},
})
