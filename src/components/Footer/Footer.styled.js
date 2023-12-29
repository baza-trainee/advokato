import { Link, NavLink } from "react-router-dom";
import styled from "@emotion/styled";
import { device } from "../../styles/mixins";

export const FooterStyled = styled.footer`
	background-color: var(--darkBackground);
	border-radius: 24px 24px 0 0;
	margin-top: -140px;
`;

export const Container = styled.div`
	@media screen and (${device.desktop}) {
		padding-top: 72px;
		padding-bottom: 28px;
		max-width: 1120px;
		margin: 0 auto;
	}
`;

export const FlexWraper = styled.div`
	display: flex;
	flex-direction: ${props => props.flexDirection || "row"};
	gap: ${props => props.gap || "140px"};
	justify-content: ${({ path }) =>
		path === "/contacts" ? "space-between" : "center"};
`;

export const List = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 24px;
`;

export const LinkStyled = styled(NavLink)`
	font-family: var(--Montserrat);
	font-size: 18px;
	line-height: calc(32.4 / 18);
	color: ${({ current, active }) =>
		current === active ? "var(--accentLink)" : "var(--lightText)"};
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
		width: ${({ current, active }) => (current === active ? "0" : "100%")};
	}
`;

export const Text = styled.p`
	margin-bottom: ${props => props.marginbottom || "16px"};
	font-family: var(--Montserrat);
	line-height: calc(32.4 / 18);
	color: var(--lightText);

	margin-left: ${({ path }) => (path === "/contacts" ? "100px" : null)};
`;

export const DocsWrp = styled.div`
	margin-right: ${({ path }) => (path === "/contacts" ? "100px" : null)};
	margin-bottom: ${({ path }) => (path === "/contacts" ? "48px" : null)};
`;

export const TextLink = styled(Link)`
	margin-bottom: ${props => props.marginbottom || "16px"};
	width: 290px;
	font-family: var(--Montserrat);
	line-height: calc(32.4 / 18);
	color: var(--lightText);
	transition: color var(--timing-function) var(--animation-duration);

	&:hover,
	&:focus {
		color: var(--accentLink);
	}
`;

export const DivStyled = styled.div`
	display: flex;
`;

export const PolicyText = styled(Link)`
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
	margin-top: -10px;
	margin-bottom: 28px;
	width: 100%;
	height: 1px;
	background-color: var(--lightText);
`;
