
import {
	ConsultElement,
	Container,
	HamburgerMenu,
	HeaderStyled,
	MainStyled,
	PhoneBurger,
	PhonesDiv,
} from "./Layout.styled";
import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import { Suspense, useEffect, useState } from "react";

import { BurgerMenu } from "../BurgerMenu/index.jsx";
import { ButtonConsultation } from "../ButtonConsultation";
import { Footer } from "../Footer/Footer";
import { Icon } from "../Icon";
import { LoadingAnimated } from "../LoadingAnimated";
import { Menu } from "../Menu";
import { ScrollUpButton } from "../ScrollUpButton/index.js";
import logoImg from "../../assets/images/layout-section/Logo.svg";
import { useTranslation } from "react-i18next";

export const Layout = ({ activeLang, toggleLanguage }) => {
	const [t, i18n] = useTranslation("global");
	const [isOpen, setIsOpen] = useState(false);
	const [top, setTop] = useState(true);
	const location = useLocation();
	const navigate = useNavigate();
	const [modalActive, setModalActive] = useState(false);

	const activePath = location.pathname;

	useEffect(() => {
		const scrollHandler = () => {
			setTop(window.scrollY <= 200);
		};
		window.addEventListener("scroll", scrollHandler);
		scrollHandler();
		return () => {
			window.removeEventListener("scroll", scrollHandler);
		};
	}, []);

	const handleClickLogoButton = () => {
		if (location.pathname === "/" && location.hash === "") {
			return window.location.reload();
		}

		if (location.pathname === "/" && location.hash !== "") {
			navigate("/");
			return window.location.reload();
		}
	};

	const screenSize = () => {
		const [screenWidth, setScreenWidth] = useState(window.innerWidth);
		useEffect(() => {
			const handleSize = e => {
				setScreenWidth(e.target.innerWidth);
			};
			window.addEventListener("resize", handleSize);
			return () => {
				window.removeEventListener("resize", handleSize);
			};
		}, []);
		return screenWidth;
	};

	return (
		<>
			<HeaderStyled
				top={top}
				activePath={activePath}
			>
				<Container>
					<PhoneBurger onClick={() => setModalActive(prev => !prev)}>
						<Icon
							id={"phoneButton"}
							className="animate__animated animate__pulse animate__infinite infinite animate__slower 3s"
							width={56}
							height={56}
						/>
					</PhoneBurger>

					<NavLink
						to="/"
						aria-label="home"
					>
						<img
							onClick={handleClickLogoButton}
							width={152}
							height={60}
							src={logoImg}
							alt="logoImage"
						/>
					</NavLink>
					<nav className={screenSize() > 1200 ? "" : "close"}>
						<Menu setIsOpen={setIsOpen} />
					</nav>
					{/* <LangButton
						onClick={() =>
							activeLang === "ua" ? toggleLanguage("en") : toggleLanguage("ua")
						}
						aria-label="перемикач мови"
						activeLang={activeLang}
						currentLang="ua"
						desktop="desktop"
						disabled
					>
						{activeLang.toUpperCase()}
					</LangButton> */}

					<HamburgerMenu
						className={`${isOpen ? "open" : ""}`}
						onClick={() => setIsOpen(!isOpen)}
					>
						<span className={`${isOpen ? "open" : ""}`}></span>
					</HamburgerMenu>

					<BurgerMenu
						isOpen={isOpen}
						setIsOpen={setIsOpen}
						top={top}
						activeLang={activeLang}
						toggleLanguage={toggleLanguage}
					/>

					<ConsultElement>
						<ButtonConsultation
							modalActive={modalActive}
							setModalActive={setModalActive}
							className={'animated'}
						/>
						<PhonesDiv>
							<a href="tel:+38 (093) 373 73 03">+38 (093) 373 73 03</a>
						</PhonesDiv>
					</ConsultElement>
				</Container>
			</HeaderStyled>

			<MainStyled>
				<Suspense fallback={<LoadingAnimated />}>
					<Outlet />
				</Suspense>
			</MainStyled>
			<Footer />

			<ScrollUpButton />

			{/* <CookiesPanel /> */}
		</>
	);
};
