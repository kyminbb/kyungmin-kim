import { Avatar, Box, Link, Stack, Typography } from "@mui/material";
import React from "react";
import { EducationData } from "../../static/education";
import { Title } from "../atoms";

interface EducationItemProps {
	education: EducationData;
}

const EducationItem: React.FC<EducationItemProps> = ({ education }) => {
	const { description, img, link, period, title } = education;

	return (
		<Stack alignItems="center" justifyContent="center" spacing={2}>
			<Link href={link}>
				<Avatar src={img} sx={{ height: 200, width: 200 }} />
			</Link>
			<Box paddingBottom="25px" paddingTop="25px">
				<Title text={title} variant="h4" />
				<Typography variant="body2">{description}</Typography>
				<Typography color="text.secondary" variant="body2">{period}</Typography>
			</Box>
		</Stack>
	);
};

export default EducationItem;