export const options = {
	autoplay: true,
	arrows: false,
	pagination: false,
	// drag: "free",
	type: "loop",
	width: "150%",
	fixedWidth: '440px',
	gap: "32px",
	perPage: 5,
	perMove: 2,
	speed: 1000,
	interval: 4000,
	breakpoints: {
		768: {
			gap: "30px",
			perPage: 1,
			perMove: 1,
		},
		1024: {
			width: "150%",
			gap: "30px",
			perPage: 3,
			fixedWidth: '364px',
		},
		1439: {
			width: "150%",
			gap: "20px",
			perPage: 4,
		},
		1856:{
			width: "150%",
			fixedWidth: '440px',
			perPage: 4,
		}
	},
};
