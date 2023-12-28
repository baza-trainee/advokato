import { SectionStyled } from "./BurgerMenu.styled";
import { Menu } from "../Menu";

import { LangButton } from "../Layout/Layout.styled";
import { useEffect, useRef } from "react";

export const BurgerMenu = ({
	activeLang,
	toggleLanguage,
	isOpen,
	setIsOpen,
}) => {
	const ref = useRef();
	useEffect(() => {
		function ClickOut(e) {
			if (!ref.current.contains(e.target)) {
				setIsOpen(false);
			}
		}
		document.body.addEventListener("mousedown", ClickOut);
		return () => {
			document.removeEventListener("mousedown", ClickOut);
		};
	}, []);
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
