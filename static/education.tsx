export type EducationData = {
	description: string
	img: string
	period: string
	link: string
	title: string
}

const EDUCATION_LIST = [
	{
		description: "B.S. in Computer Science | Minor in Machine Learning",
		img: "/static/images/cmu.png",
		period: "Aug 2016 - Present",
		link: "https://www.cs.cmu.edu",
		title: "Carnegie Mellon University",
	}, {
		description: "High School Diploma",
		img: "/static/images/kmla.png",
		period: "March 2013 - Feb 2016",
		link: "https://www.minjok.hs.kr",
		title: "Korean Minjok Leadership Academy",
	},
];

export default EDUCATION_LIST;