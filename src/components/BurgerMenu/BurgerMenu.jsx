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
