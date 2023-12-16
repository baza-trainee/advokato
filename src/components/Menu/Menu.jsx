import { NavLinkStyled, UlStyled } from "./Menu.styled";
import { useTranslation } from "react-i18next";

export const Menu = ({side}) => {
	const [t, i18n] = useTranslation("global");
	return (
			<nav>
					<UlStyled sideMenu={side}>
						<li>
							<NavLinkStyled
								to="/"
								aria-label="home"
							>
								{t("header.nav.home")}
							</NavLinkStyled>
						</li>
						<li>
							<NavLinkStyled
								to="/company"
								aria-label="company"
							>
								{t("header.nav.company")}
							</NavLinkStyled>
						</li>
						<li>
							<NavLinkStyled
								to="/practice"
								aria-label="practice"
							>
								{t("header.nav.practice")}
							</NavLinkStyled>
						</li>
						<li>
							<NavLinkStyled
								to="#"
								aria-label="news"
							>
								{t("header.nav.news")}
							</NavLinkStyled>
						</li>
						<li>
							<NavLinkStyled
								to="#"
								aria-label="contacts"
							>
								{t("header.nav.contacts")}
							</NavLinkStyled>
						</li>
					</UlStyled>
				</nav>
	);
};
