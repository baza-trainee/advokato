import styled from "@emotion/styled";
import { device } from "../../styles/mixins";

export const SectionStyled = styled.div`
	display: block;
	position: absolute;	top: 0;
	right: 0;
	height: 100vh;
	width: 172px;
	z-index: 120;
	background: var(--darkGrey);
	border: none;
	border-radius: 24px 0 0 24px;
	transition: 1s;
	animation: 0.7s ease-in-out appearMenu forwards;

	svg {
		margin: 120px 0 0 24px;
		cursor: pointer;
	}
	&.close {
		display: none;
	}
	@media screen and (${device.mobileS}) {
		z-index: 120;
		width: 152px;
	}
	@media screen and (${device.mobileL}) {
		z-index: 120;
		width: 152px;
	}
	@media screen and (${device.tablet}) {
		z-index: 120;
		width: 172px;
	}
	@media screen and (${device.preburger}) {
		z-index: 120;
		width: 216px;
	}
	@keyframes appearMenu {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
`;

export const NavBurger = styled.nav``;
