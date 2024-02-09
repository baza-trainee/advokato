
export const options = {
	autoplay: false,
	arrows: false,
	pagination: false,
	type: "loop",
	focus: "center",
	perMove: 1,
	speed: 1000,
	interval: 8000,
	breakpoints: {
		767: {
			// height: "300px",
			// width:"100%",
			fixedWidth: '100vw',
			perPage: 1,
		},
		1023: {
			// height: "324px",
			width:"648px",
			fixedWidth: '648px',
			perPage: 1,
		},
		1439: {
			// height: "452px",
			width: "864px",
			fixedWidth: '864px',
			perPage: 1,
		},
		2559: {
			// height: "600px",
			width: "1116px",
			fixedWidth: '1116px',
			perPage: 1,
		}
	},
};
