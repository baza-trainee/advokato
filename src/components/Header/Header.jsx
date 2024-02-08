
import {
	ConsultElement,
	Container,
	HamburgerMenu,
	HeaderStyled,
	PhoneBurger,
	PhonesDiv,
} from "./Header.styled.js";
import { Icon } from "../Icon/index.jsx";
import { NavLink } from "react-router-dom";
import logoImg from "../../assets/images/layout-section/Logo.svg";
import { Menu } from "../Menu/index.jsx";
import { BurgerMenu } from "../BurgerMenu/index.jsx";
import { ButtonConsultation } from "../ButtonConsultation/index.jsx";
import { useEffect, useState } from "react";
import { useScreenWidth } from "../../hooks/useScreenWidth.js";

const Header = ({ activeLang, toggleLanguage }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [top, setTop] = useState(true);
	const [modalActive, setModalActive] = useState(false);
	const activePath = location.pathname;
	const screenWidth = useScreenWidth();

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


	return (
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
				<nav className={screenWidth > 1200 ? "" : "close"}>
					<Menu setIsOpen={setIsOpen} />
				</nav>

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
	);
};

export default Header;