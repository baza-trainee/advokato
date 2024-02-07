export const options = {
	autoplay: false,
	arrows: false,
	pagination: false,
	// drag: "free",
	type: "loop",
	width: "100%",
	gap: "32px",
	perPage: 4,
	perMove: 2,
	speed: 1000,
	interval: 4000,
	breakpoints: {
		768: {
			width: "220px",
			height: "348",
			gap: "1px",
			perPage: 1,
			perMove: 1,
		},
		1024: {
			width: "1164px",
			perPage: 3,
		},
		1440: {
			width: "1556px",
			perPage: 4,
		},
		1856:{
			width: "1856px",
			perPage: 4,
		}
	},
};
