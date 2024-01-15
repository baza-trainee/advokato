export const options = {
	autoplay: false,
	arrows: false,
	pagination: false,
	drag: "free",
	type: "loop",
	focus: "center",
	// height: "600px",
	perMove: 1,
	speed: 1000,
	interval: 4000,
	breakpoints: {
		767: {
			height: "220px",
			width:"70%",
			perPage: 1,
		},
		1024: {
			height: "324px",
			width:"648px",
			perPage: 1,
		},
		1440: {
			height: "452px",
			width: "864px",
			perPage: 1,
		},
		2560: {
			height: "600px",
			width: "1116px",
			perPage: 1,
		}
	},
};
