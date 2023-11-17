import styled from "@emotion/styled";
import { Icon } from "../Icon";

export const Panel = styled.div`
	position: fixed;
	bottom: 80px;
	padding: 68px 100px;
	max-width: 1280px;

	background: var(--darkBackground);

	font-family: var(--PTSans);
	color: var(--lightText);
	font-size: 22px;
	line-height: 35px;
`;

export const IconClose = styled(Icon)`
	position: absolute;
	top: 24px;
	right: 24px;
	cursor: pointer;
	stroke: var(--lightText);
`;

export const ButtonOk = styled.button`
	min-width: 216px;
	height: 64px;
	border: 2px solid #fff;
	border-radius: 5px;

	font-family: var(--Montserrat);
	font-size: 28px;
	line-height: 42px;

	transition: all var(--animation-duration) var(--timing-function);

	&:hover,
	&:focus {
		background-color: #fff;
		color: var(--mainText);
	}
`;

export const BannerWrap = styled.div`
	display: flex;
	gap: 36px;
	align-items: center;
`;

export const PolicyLink = styled.a`
	font-family: var(--Montserrat);
	font-size: 18px;
	line-height: 32px;
	text-decoration: underline;
`;
