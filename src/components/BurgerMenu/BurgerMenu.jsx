import { SectionStyled } from "./BurgerMenu.styled";
import { Menu } from "../Menu";

import { LangButton } from "../Layout/Layout.styled";

export const BurgerMenu = ({
	activeLang,
	toggleLanguage,
	isOpen,
	setIsOpen,
}) => {
	return (
		<SectionStyled className={`${!isOpen ? "close" : ""}`}>
			<Menu
				setIsOpen={setIsOpen}
				side={true}
			/>
			<LangButton
				onClick={() =>
					activeLang === "ua" ? toggleLanguage("en") : toggleLanguage("ua")
				}
				aria-label="перемикач мови"
				activeLang={activeLang}
				currentLang="ua"
				burger
			>
				{activeLang.toUpperCase()}
			</LangButton>
		</SectionStyled>
	);
};
