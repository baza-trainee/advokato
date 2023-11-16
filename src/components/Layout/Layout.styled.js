import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import {
	flexBox,
	secondaryButton,
	device,
	fontLayoutMenu,
	fontReview,
	fontLayoutCall,
} from "../../styles/mixins";

export const HeaderStyled = styled.header`
	${flexBox};
	flex-wrap: wrap;
	justify-content: space-around;
	position: sticky;
	top: 0;
	left: 0;
	height: 140px;
	${fontLayoutMenu}
	color: var(--lightText);
	background-color: var(--headerBackground);
	backdrop-filter: ${props => (props.top ? 0 : "blur(20px)")};
	z-index: 20;
	img {
		width: 152px;
		height: auto;
	}
`;

export const UlStyled = styled.ul`
	${flexBox};
	gap: 44px;
	width: 600px;
	height: 28px;
	a {
		color: var(--lightText);
	}
`;

export const NavLinkStyled = styled(NavLink)`
	&.active {
		color: var(--accentLink);
	}
`;

export const HamburgerMenu = styled.div`
	display: block;
	position: relative;
	top: 5vh;
	width: 50px;
	height: 10vh;
	transition-duration: 1s;
	cursor: pointer;

	@media screen and (${device.laptop}) {
		display: none;
	}

	span {
		position: absolute;
		width: 40px;
		height: 5px;
		background-color: var(--lightText);
		border-radius: 20px;
		transition-duration: 0.25s;
		transition-delay: 0.25s;
	}

	span:before {
		content: "";
		position: absolute;
		top: -10px;
		left: 0;
		width: 40px;
		height: 5px;
		background-color: var(--lightText);
		border-radius: 20px;
		transition-duration: 0.25s;
		transition: transform 0.25s, top 0.25s 0.25s;
	}

	span:after {
		content: "";
		position: absolute;
		top: 10px;
		left: 0;
		width: 40px;
		height: 5px;
		background-color: var(--lightText);
		border-radius: 20px;
		transition-duration: 0.25s;
		transition: transform 0.25s, top 0.25s 0.25s;
	}

	span.open {
		transition-duration: 0.1s;
		transition-delay: 0.3s;
		background: transparent;
	}

	span.open:before {
		top: 0;
		transform: rotateZ(-45deg);
		transition: top 0.25s, transform 0.25s 0.25s;
	}

	span.open:after {
		top: 0;
		transform: rotateZ(45deg);
		transition: top 0.4s, transform 0.25s 0.25s;
	}
`;

export const LangButton = styled.button`
	${fontReview};
	width: 52px;
	height: 48px;
	color: var(--lightText);
	background-color: inherit;
	border: 1px solid var(--lightText);
	border-radius: 8px;
	cursor: pointer;
`;

export const ConsultElement = styled.div`
	width: 288px;

	button,
	a {
		${fontLayoutCall}
		color: var(--lightText);
		cursor: pointer;
	}
`;

export const ConsultButton = styled.button`
	${secondaryButton};
	${flexBox};
	gap: 10px;
	width: 288px;
	height: 52px;
	padding: 16px 24px;
	background: none;
	border: 1px solid var(--lightText);
	border-radius: 48px;
`;

export const PhonesDiv = styled.div`
	${flexBox};
	justify-content: space-evenly;
	margin: 1vh auto 0;
	max-width: 100%;
`;
