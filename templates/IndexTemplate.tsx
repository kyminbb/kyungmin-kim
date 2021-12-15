import React from "react";
import { About, Education, Home, Projects, Work } from "../components/organisms";

const IndexTemplate: React.FC = () => {
	return (
		<>
			<Home />
			<About />
			<Education />
			<Work />
			<Projects />
		</>
	);
};

export default IndexTemplate;