import { Box, Typography } from "@mui/material";
import React from "react";
import { Title } from "../atoms";

const HomeContent: React.FC = () => {
	return (
		<Box marginBottom="30px" paddingLeft="8px">
			<Title text="Kyungmin Kim" />
			<Typography letterSpacing="3px" variant="subtitle1">
				Software Engineering, Machine Learning, Computer Systems
			</Typography>
		</Box>
	);
};

export default HomeContent;