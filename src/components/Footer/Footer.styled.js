import { Link, NavLink } from "react-router-dom";
import styled from "@emotion/styled";
import { container, device, flexBox } from "../../styles/mixins";

export const FooterStyled = styled.footer`
	background-color: var(--darkBackground);
	border-radius: 24px 24px 0 0;
	margin-top: -140px;
`;

export const Container = styled.div`
	${container};

	@media screen and (${device.desktop}) {
		padding-top: 72px;
		padding-bottom: 28px;
	}
`;

export const FlexWraper = styled.div`
	display: flex;
	flex-direction: ${props => props.flexDirection || "row"};
	gap: ${props => props.gap || "140px"};
	justify-content: center;
`;

export const List = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 24px;
`;

export const SocialList = styled.ul`
	${flexBox};
	justify-content: start;
	gap: 29px;
	margin-top: 17px;
	margin-bottom: 25px;
	padding-left: 5px;
`;

export const SocialLink = styled(Link)`
	svg {
		fill: var(--lightText);
	}

	&:hover,
	&:focus {
		transition: fill var(--timing-function) var(--animation-duration),
			transform var(--timing-function) var(--animation-duration);

		svg {
			fill: var(--accentLink);
			transform: scale(1.05);
		}
	}
`;

export const LinkStyled = styled(NavLink)`
	font-family: var(--Montserrat);
	font-size: 18px;
	line-height: calc(32.4 / 18);
	color: var(--lightText);
	position: relative;
	transition: color 0.3s ease-in-out;

	&:hover,
	&:focus {
		color: var(--accentLink);
	}

	&::before {
		content: "";
		position: absolute;
		bottom: -2px;
		left: 0;
		width: 0;
		height: 2px;
		background-color: var(--accentLink);
		transition: width 0.3s ease-in-out;
	}

	&:hover::before {
		width: 100%;
	}

	&.active {
		color: var(--accentLink);
		&::before {
			width: 100%;
		}
	}
`;

export const Text = styled.p`
	margin-bottom: 16px;
	font-family: var(--Montserrat);
	line-height: calc(32.4 / 18);
	color: var(--lightText);
`;

export const TextLink = styled(Link)`
	margin-bottom: ${props => props.marginbottom || "16px"};
	font-family: var(--Montserrat);
	line-height: calc(32.4 / 18);
	color: var(--lightText);
	transition: color var(--timing-function) var(--animation-duration);

	&:hover,
	&:focus {
		color: var(--accentLink);
	}
`;

export const PolicyText = styled(Link)`
	display: flex;
	margin-bottom: 24px;
	font-family: var(--Montserrat);
	line-height: calc(32.4 / 18);
	color: var(--lightText);
	text-decoration: underline;
	text-underline-offset: 3.5px;
	transition: color var(--timing-function) var(--animation-duration);

	&:hover,
	&:focus {
		color: var(--accentLink);
	}
`;

export const Line = styled.div`
	margin-bottom: 28px;
	width: 100%;
	height: 1px;
	background-color: var(--lightText);
`;
