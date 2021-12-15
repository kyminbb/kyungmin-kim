import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Variant } from "@mui/material/styles/createTypography";
import React from "react";

interface TitleStyles {
	section: boolean;
}

const StyledTitle = styled(Typography)<TitleStyles>(({ section }) => ({
	letterSpacing: section ? 2 : 1,
	textTransform: "uppercase",
}));

interface TitleProps {
	text: string;
	variant: Variant;
}

const Title: React.FC<TitleProps> = ({ text, variant }) => {
	return (
		<StyledTitle
			color="text.primary"
			gutterBottom
			section={variant == "h2"}
			variant={variant}>{text}
		</StyledTitle>
	);
};


export default Title;