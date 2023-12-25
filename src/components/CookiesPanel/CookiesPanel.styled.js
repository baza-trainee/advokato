import styled from "@emotion/styled";
import { Icon } from "../Icon";
import { device } from "../../styles/mixins";

export const Panel = styled.div`
	position: fixed;
	bottom: 27px;
	padding: 40px 30px 24px 30px;
	max-width: 272px;

	background: var(--darkBackground);

	font-family: var(--PTSans);
	color: var(--lightText);
	font-size: 12px;
	line-height: 19px;
	text-align: center;

	@media screen and (min-width: 768px) {
		bottom: 56px;
		padding: 28px 32px;
		max-width: 648px;

		font-size: 14px;
		line-height: 22px;
		text-align: left;
	}

	@media screen and (${device.desktop}) {
		bottom: 88px;
		padding: 68px 100px;
		max-width: 1280px;

		font-size: 22px;
		line-height: 35px;
	}
`;

export const PolicyLink = styled.a`
	font-family: var(--Montserrat);
	font-size: 12px;
	line-height: 22px;
	text-decoration: underline;

	@media screen and (min-width: 768px) {
		font-size: 14px;
		line-height: 25px;
	}

	@media screen and (${device.desktop}) {
		font-size: 18px;
		line-height: 32px;
	}
`;

export const BannerWrap = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	gap: 16px;

	@media screen and (min-width: 768px) {
		flex-direction: row;
		gap: 67px;
	}

	@media screen and (${device.desktop}) {
		gap: 36px;
	}
`;

export const IconClose = styled(Icon)`
	position: absolute;
	width: 16px;
	height: 16px;
	top: 16px;
	right: 16px;
	cursor: pointer;
	stroke: var(--lightText);

	@media screen and (${device.desktop}) {
		width: 24px;
		height: 24px;
		top: 27px;
		right: 27px;
	}
`;

export const ButtonOk = styled.button`
	min-width: 120px;
	height: 36px;
	border: 2px solid #fff;
	border-radius: 5px;

	font-family: var(--Montserrat);
	font-size: 16px;
	line-height: 24px;

	transition: all var(--animation-duration) var(--timing-function);

	&:hover,
	&:focus {
		background-color: #fff;
		color: var(--mainText);
	}

	@media screen and (min-width: 768px) {
		min-width: 180px;
		height: 64px;
		font-size: 28px;
		line-height: 42px;
	}

	@media screen and (${device.desktop}) {
		min-width: 216px;
	}
`;
