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
		h2: {
			fontSize: 25,
		},
	},
}));

export default theme;