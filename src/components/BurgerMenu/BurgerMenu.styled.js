import styled from "@emotion/styled";
import { device } from "../../styles/mixins";

export const SectionStyled = styled.div`
	display: block;
	position: absolute;
	top: 0;
	right: 0;
	height:100vh;
	width: 172px;
	background:var(--darkGrey); 
	border: none;
	border-radius: 24px 0 0 24px;
	z-index: 3000;
	transition: 1s;
	animation:.7s ease-in-out appearMenu forwards;
	nav {
			display: block;
		}
	svg {
		margin: 120px 0 0 24px;
		cursor: pointer;
	}
	&.close {
		display: none;
	}
	@media screen and (${device.mobileL}) {
		width: 152px;
	}
	@media screen and (${device.tablet}) {
		width: 172px;
	}
	@media screen and (${device.preburger}) {
		width: 216px;
	}
	@keyframes appearMenu {
	from{opacity:0};
	to{opacity:1}
}
`;
