import { createTheme, responsiveFontSizes } from "@mui/material/styles";

declare module "@mui/material/styles" {
	interface Palette {
		sectionTitle: Palette["primary"];
	}

	interface PaletteOptions {
		sectionTitle: PaletteOptions["primary"];
	}
}

const theme = responsiveFontSizes(createTheme({
	palette: {
		primary: {
			main: "#b8a07e",
		},
		secondary: {
			main: "#999999",
		},
		sectionTitle: {
			main: "#292929",
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
		subtitle1: {
			fontSize: 13,
			fontWeight: 500,
		},
	},
}));

export default theme;