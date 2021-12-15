import React from "react";
import EDUCATION_LIST from "../static/education";
import SOCIAL_LINKS from "../static/links";
import { IndexTemplate } from "../templates";

const IndexPage: React.FC = () => {
	return <IndexTemplate educationList={EDUCATION_LIST} socialLinks={SOCIAL_LINKS} />;
};

export default IndexPage;