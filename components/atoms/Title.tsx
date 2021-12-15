import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";

interface TitleStyles {
	section: boolean;
}

const StyledTitle = styled(Typography)<TitleStyles>(({ theme, section }) => ({
	color: theme.palette.sectionTitle.main,
	letterSpacing: section ? 2 : 0,
	textTransform: "uppercase",
}));

interface TitleProps {
	section?: boolean;
	text: string;
}

const Title: React.FC<TitleProps> = ({ section, text }) => {
	return (
		<StyledTitle
			gutterBottom
			section={section}
			variant={section ? "h2" : "h1"}>{text}
		</StyledTitle>
	);
};

export default Title;