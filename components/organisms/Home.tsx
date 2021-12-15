import { Box, Container } from "@mui/material";
import React from "react";
import { SocialLink } from "../../static/links";
import { HomeContent, SocialList } from "../molecules";

interface HomeProps {
	socialLinks: SocialLink[];
}

const Home: React.FC<HomeProps> = ({ socialLinks }) => {
	return (
		<Container>
			<Box display="flex" flexDirection="column" height="100vh" justifyContent="center" textAlign="left" width="100%">
				<HomeContent />
				<SocialList socialLinks={socialLinks} />
			</Box>
		</Container>
	);
};

export default Home;
