export const options = {
	autoplay: true,
	arrows: false,
	pagination: false,
	drag: "free",
	type: "loop",
	height: "180px",
	width: "1640px",
	gap: "32px",
	perMove: 1,
	speed: 1000,
	interval: 4000,
	breakpoints: {
		768: {
			perPage: 2,
			width: "520px",
			height: "148px",
			gap: "24px",
		},
		1024: {
			perPage: 4,
			width: "1296px",
			gap: "32px",
		},
		1440: {
			perPage: 5,
			width: "1628px",
			gap: "32px",
		},
	},
};
