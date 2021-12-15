import { Box } from "@mui/material";
import React from "react";
import { EducationData } from "../../static/education";
import { EducationList, SectionTitle } from "../molecules";


interface EducationProps {
	educationList: EducationData[];
}

const Education: React.FC<EducationProps> = ({ educationList }) => {
	return (
		<Box boxSizing="border-box" display="block" paddingBottom="60px" paddingTop="90px" position="relative" width="100%">
			<SectionTitle text="Education" />
			<EducationList educationList={educationList} />
		</Box>
	);
};

export default Education;
