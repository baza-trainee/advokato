import styled from "@emotion/styled";

import { Icon } from "../Icon";

export const Overlay = styled.div`
	position: fixed;
	top: 0px;
	left: 0;
	width: 100vw;
	height: 100vh;

	display: flex;
	justify-content: center;
	align-items: center;

	opacity: ${props => (props.active ? 1 : 0)};
	pointer-events: ${props => (props.active ? "auto" : "none")};
	transition: opacity var(--animation-duration) var(--timing-function);

	background: linear-gradient(168deg, #0b0c0cf2 26%, #263f4ed1 58%, #333333c7 81%);
	backdrop-filter: blur(2px);

	z-index: 21;
`;

export const ModalContainer = styled.div`
	position: relative;
	padding: 60px 24px 24px 24px;
	width: 80vw;
	height: 80vh;
	background-color: var(--btnBgHover);
	border-radius: 5px;

	overflow-y: scroll;

	&::-webkit-scrollbar {
		width: 11px;
	}

	&::-webkit-scrollbar-thumb {
		background-color: var(--greyText);
		border-radius: 8px;
	}

	&::-webkit-scrollbar-thumb:hover {
		background-color: var(--btnBgPressed);
	}
`;

export const IconClose = styled(Icon)`
	position: absolute;
	top: 24px;
	right: 24px;
	cursor: pointer;
	stroke: var(--darkBackground);
`;
