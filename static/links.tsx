import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import React from "react";

export type SocialLink = { icon: React.ReactElement; link: string }

const SOCIAL_LINKS = [
	{
		icon: <FacebookIcon />, link: "https://www.facebook.com/kyminbb/",
	}, {
		icon: <LinkedInIcon />, link: "https://www.linkedin.com/in/kyungmik/",
	}, {
		icon: <GitHubIcon />, link: "https://github.com/kyminbb",
	},
];

export default SOCIAL_LINKS;