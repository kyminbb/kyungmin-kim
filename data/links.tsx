import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import React from "react";

export type SocialLink = { icon: React.ReactElement; link: string }

export const FACEBOOK = { icon: <FacebookIcon />, link: "https://www.facebook.com/kyminbb/" };
export const LINKEDIN = { icon: <LinkedInIcon />, link: "https://www.linkedin.com/in/kyungmik/" };
export const GITHUB = { icon: <GitHubIcon />, link: "https://github.com/kyminbb" };