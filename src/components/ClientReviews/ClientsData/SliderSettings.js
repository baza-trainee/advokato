export const options = {
	autoplay: true,
	arrows: false,
	pagination: false,
	drag: "free",
	type: "loop",
	width: "1856px",
	gap: "32px",
	perPage: 4,
	perMove: 2,
	speed: 1000,
	interval: 4000,
	breakpoints: {
		768: {
			width: "1172px",
			perPage: 3,
			perMove: 1,
		},
		1024: {
			width: "1584px",
		},
		1440: {
			width: "1856px",
		},
	},
};
