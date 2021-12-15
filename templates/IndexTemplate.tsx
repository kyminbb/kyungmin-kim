import { Box } from "@mui/material";
import _ from "lodash";
import React from "react";
import { Education, Home } from "../components/organisms";
import { EducationData } from "../static/education";
import { SocialLink } from "../static/links";

interface IndexTemplateProps {
	educationList: EducationData[];
	socialLinks: SocialLink[];
}

const IndexTemplate: React.FC<IndexTemplateProps> = ({ educationList, socialLinks }) => {
	const sections = [
		<Home socialLinks={socialLinks} />,
		<Education educationList={educationList} />,
	];

	return _.map(sections, (section, i) =>
		<Box boxSizing="border-box" display="block" height="100vh" key={`section-${i}`} width="100%">
			{section}
		</Box>,
	);
};

export default IndexTemplate;