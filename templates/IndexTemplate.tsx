import { Box } from "@mui/material";
import _ from "lodash";
import React from "react";
import { Home } from "../components/organisms";
import { SocialLink } from "../data/links";

interface IndexTemplateProps {
	socialLinks: SocialLink[];
}

const IndexTemplate: React.FC<IndexTemplateProps> = ({ socialLinks }) => {
	const sections = [
		<Home socialLinks={socialLinks} />,
		<Home socialLinks={socialLinks} />,
		<Home socialLinks={socialLinks} />,
		<Home socialLinks={socialLinks} />,
		<Home socialLinks={socialLinks} />,
	];

	return _.map(sections, (section, i) =>
		<Box boxSizing="border-box" display="block" height="100vh" key={`section-${i}`} width="100%">
			{section}
		</Box>,
	);
};

export default IndexTemplate;