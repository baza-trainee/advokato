import { SectionStyled } from "./BurgerMenu.styled";
import { Menu } from "../Menu";

import { LangButton } from "../Layout/Layout.styled";
import { useRef } from "react";

export const BurgerMenu = ({
	activeLang,
	toggleLanguage,
	isOpen,
	setIsOpen,
}) => {
	const ref = useRef();
<<<<<<< HEAD
=======
	useEffect(() => {
		function ClickOut(e) {
			if (!ref.current.contains(e.target)) {
				setIsOpen(prev => !prev);
			}
		}
		document.body.addEventListener("mousedown", ClickOut);
		return () => {
			document.removeEventListener("mousedown", ClickOut);
		};
	}, []);
>>>>>>> 6f51b0661f4c6f3ed215bd14230982a5bcd6bc69
	return (
		<SectionStyled
			ref={ref}
			className={`${!isOpen ? "close" : ""}`}
		>
			<Menu
				setIsOpen={setIsOpen}
				side={true}
			/>
			<LangButton
				onClick={() =>
					activeLang === "ua" ? toggleLanguage("en") : toggleLanguage("ua")
				}
				aria-label="lang-ua"
				activeLang={activeLang}
				currentLang="ua"
				burger
			>
				{activeLang.toUpperCase()}
			</LangButton>
		</SectionStyled>
	);
};
