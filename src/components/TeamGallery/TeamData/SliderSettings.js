export const options = {
	autoplay: true,
	arrows: false,
	pagination: false,
	drag: "free",
	type: "loop",
	focus: "center",
	height: "600px",
	autoWidth: true,
	perPage: 3,
	perMove: 1,
	speed: 1000,
	interval: 4000,
	breakpoints: {
		320: {
			perPage: 1,
		},
		768: {
			height: "324px",
			perPage: 3,
		},
		1024: {
			height: "452px",
		},
		1440: {
			height: "600px",
		},
	},
};
