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

// Я як користувач що перебуває на сайті читаю контент і пізніше опиняюсь внизу сторінки. Хочу швидко повернутись вгору.

// Acceptance criteria:
// - коли відбувався скролінг сторінки, то зʼявляється кнопка у правому нижньому куті екрану
// - кнопка завжди на одному місці і не зміщується разом з контентом.
// - натискання на кнопку робить скролл сторінки вгору до головної секції, та зникає
// - кнопка не доступна у відкритих модальних вікнах (документи, запис на консультацію)
