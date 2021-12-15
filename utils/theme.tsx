import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const theme = responsiveFontSizes(createTheme({
	palette: {
		primary: {
			main: "#b8a07e",
		},
		secondary: {
			main: "#898989",
		},
		text: {
			primary: "#292929",
			secondary: "#898989",
		},
	},
	typography: {
		h1: {
			fontSize: 40,
			fontWeight: 700,
		},
		h2: {
			fontSize: 25,
			fontWeight: 600,
		},
		h4: {
			fontSize: 19,
			fontWeight: 550,
		},
		subtitle1: {
			fontSize: 15,
			fontWeight: 500,
		},
		body2: {
			fontSize: 15,
			fontWeight: 400,
		},
	},
}));

export default theme;