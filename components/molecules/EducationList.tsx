import { Container, Stack } from "@mui/material";
import _ from "lodash";
import React from "react";
import { EducationItem } from ".";
import { EducationData } from "../../static/education";

interface EducationListProps {
	educationList: EducationData[];
}

const EducationList: React.FC<EducationListProps> = ({ educationList }) => {
	return (
		<Container>
			<Stack alignItems="center" direction="row" justifyContent="space-evenly" spacing={4}>
				{_.map(educationList, (education, i) => <EducationItem education={education} key={`education-${i}`} />)}
			</Stack>
		</Container>
	);
};

export default EducationList;