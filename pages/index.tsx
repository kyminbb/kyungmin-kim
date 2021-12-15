import React from "react";
import { FACEBOOK, GITHUB, LINKEDIN } from "../data/links";
import { IndexTemplate } from "../templates";

const SOCIAL_LINKS = [FACEBOOK, LINKEDIN, GITHUB];

const IndexPage: React.FC = () => {
	return <IndexTemplate socialLinks={SOCIAL_LINKS} />;
};

export default IndexPage;