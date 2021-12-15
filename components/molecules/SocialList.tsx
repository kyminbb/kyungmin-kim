import { IconButton, Stack } from "@mui/material";
import _ from "lodash";
import React from "react";
import { SocialLink } from "../../data/links";

interface SocialListProps {
	socialLinks: SocialLink[];
}

const SocialList: React.FC<SocialListProps> = ({ socialLinks }) => {
	return (
		<Stack direction="row" spacing={1}>
			{_.map(socialLinks, ({ icon, link }, i) => <IconButton href={link} key={`social-link-${i}`}>{icon}</IconButton>)}
		</Stack>
	);
};

export default SocialList;