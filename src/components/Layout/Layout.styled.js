import styled from "@emotion/styled";
import {
	flexBox,
	device,
	fontLayoutMenu,
	fontReview,
	fontLayoutCall,
	container,
} from "../../styles/mixins";

export const HeaderStyled = styled.header`
	position: sticky;
	top: 0;
	left: 0;
	height: 120px;
	${fontLayoutMenu}
	color: var(--lightText);
	background-color: var(--headerBackground);
	backdrop-filter: ${props => (props.top ? 0 : "blur(20px)")};
	z-index: 20;
	img {
		width: 180px;
		height: 80px;
	}
	@media screen and (${device.tablet}) {
		${flexBox};
		height: 76px;
		img {
			width: 152px;
			height: 60px;
		}
		svg {
			width: 52px;
			height: 52px;
		}
	}
	@media screen and (${device.burger}) {
		height: 88px;
		img {
			margin: 0;
			width: 152px;
			height: 56px;
		}
	}
`;
export const Container = styled.div`
	${flexBox};
	${container};
	justify-content: space-between;
	width: 100%;
	max-width: 1440px;
`;

export const HamburgerMenu = styled.div`
	${flexBox}
	position: relative;
	width: 42px;
	height: 10vh;
	transition-duration: 1s;
	cursor: pointer;
	@media screen and (${device.tablet}) {
		width: 52px;
		height: 52px;
	}
	@media screen and (${device.burger}) {
		display: none;
	}

	span {
		position: absolute;
		width: 39px;
		height: 2px;
		background-color: var(--lightText);
		border-radius: 20px;
		transition-duration: 0.25s;
		transition-delay: 0.25s;
		z-index: 50;
	}

	span:before {
		content: "";
		position: absolute;
		top: -10px;
		left: 0;
		width: 39px;
		height: 2px;
		background-color: var(--lightText);
		border-radius: 20px;
		transition-duration: 0.25s;
		transition: transform 0.25s, top 0.25s 0.25s;
<<<<<<< HEAD
=======
		z-index: 50;
>>>>>>> dev
	}

	span:after {
		content: "";
		position: absolute;
		top: 10px;
		left: 0;
		width: 39px;
		height: 2px;
		background-color: var(--lightText);
		border-radius: 20px;
		transition-duration: 0.25s;
		transition: transform 0.25s, top 0.25s 0.25s;
<<<<<<< HEAD
=======
		z-index: 50;
>>>>>>> dev
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
	display: ${props => (props.desktop === "desktop" ? "none;" : "block")};
	${fontReview};
	width: 48px;
	height: 48px;
	margin: ${props => (props.burger ? "136px 0 0 40px" : "0")};
	color: var(--lightText);
	background-color: inherit;
	border: 1px solid var(--lightText);
	border-radius: 8px;
	cursor: pointer;
	@media screen and (${device.tablet}) {
		width: 56px;
		height: 60px;
	}
	@media screen and (${device.burger}) {
		display: block;
	}
`;

export const ConsultElement = styled.div`
	display: none;
	@media screen and (${device.burger}) {
		${flexBox};
		flex-direction: column;
		width: 260px;
		margin-top: 12px;
		text-align: center;

		button,
		a {
			${fontLayoutCall}
			width:260px;
			height: 36px;
			padding: 8px 12px;
			color: var(--lightText);
			cursor: pointer;
		}
	}
`;

export const PhonesDiv = styled.div`
	max-width: 100%;
`;

export const PhoneBurger = styled.div`
	display: block;
	svg {
		fill: none;
		stroke: var(--reviewText);
		stroke-width: 2px;
	}
	@media screen and (${device.tablet}) {
		width: 52px;
		height: 52px;
	}
	@media screen and (${device.burger}) {
		display: none;
	}
`;

export const MainStyled = styled.main`
	min-height: calc(100dvh - 508px);
`;
