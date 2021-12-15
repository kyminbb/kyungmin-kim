import { Box, Container } from "@mui/material";
import React from "react";
import { Title } from "../atoms";

interface SectionTitleProps {
	text: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ text }) => {
	return (
		<Container>
			<Box boxSizing="border-box" display="block" marginBottom="70px" textAlign="center">
				<Title text={text} variant="h2" />
			</Box>
		</Container>
	);
};

export default SectionTitle;