import { useEffect, useState } from "react";

import { IconClose } from "./ScrollUpButton.styled";

const ScrollUpButton = () => {
	const [showButton, setShowButton] = useState(false);

	useEffect(() => {
		window.addEventListener("scroll", () => {
			if (window.scrollY > 180) {
				setShowButton(true);
			} else {
				setShowButton(false);
			}
		});
	}, []);

	const handleClick = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	return (
		<>
			{showButton && (
				<IconClose
					id={"arrow-up"}
					onClick={() => handleClick()}
					aria-label="Скролл вгору"
				/>
			)}
		</>
	);
};

export { ScrollUpButton };
