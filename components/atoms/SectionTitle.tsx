import React from "react";
import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

interface SectionTitleProps {
	text: string;
}

const StyledSectionTitle = styled(Typography)(({ theme }) => ({
	color: theme.palette.sectionTitle.main,
	fontWeight: 600,
	letterSpacing: 2,
	textTransform: "uppercase",
}));

const SectionTitle: React.FC<SectionTitleProps> = ({ text }) => {
	return <StyledSectionTitle variant="h2">{text}</StyledSectionTitle>;
};

export default SectionTitle;