import { NavBurger, SectionStyled } from "./BurgerMenu.styled";

import { LangButton } from "../Layout/Layout.styled";
import { Menu } from "../Menu";

export const BurgerMenu = ({
	activeLang,
	toggleLanguage,
	isOpen,
	setIsOpen,
}) => {
	return (
		<SectionStyled className={`${!isOpen ? "close" : ""}`}>
			<NavBurger>
				<Menu
					setIsOpen={setIsOpen}
					side={true}
				/>
			</NavBurger>
			{/* <LangButton
				onClick={() =>
					activeLang === "ua" ? toggleLanguage("en") : toggleLanguage("ua")
				}
				aria-label="перемикач мови"
				activeLang={activeLang}
				currentLang="ua"
				burger
				disabled
			>
				{activeLang.toUpperCase()}
			</LangButton> */}
		</SectionStyled>
	);
};
