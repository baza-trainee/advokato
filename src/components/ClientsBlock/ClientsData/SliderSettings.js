export const options = {
	autoplay: true,
	arrows: false,
	pagination: false,
	drag: "free",
	type: "loop",
	height: "180px",
	width: "100%",
	// gap: "32px",
	perMove: 1,
	perPage: 6,
	speed: 1000,
	interval: 4000,
	breakpoints: {
		700: {
			perPage: 1,
			width: "216px",
			height: "116px",
			gap: "32px",
		},
		768: {
			perPage: 2,
			width: "550px",
			height: "116px",
			gap: "10px",
		},
		1024: {
			perPage: 3,
			width: "900px",
			gap: "32px",
		},
		1440: {
			perPage: 5,
			width: "1640px",
			gap: "32px",
		},
		1670: {
			perPage: 5,
			width: "1640px",
			gap: "32px",
		},
		2000: {
			perPage: 6,
			width: "100%",
			gap: "0",
		},


	},
};
