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

	@media screen and (${device.mobileL}) {
		bottom: 56px;
		padding: 28px 32px;
		max-width: 648px;

		font-size: 14px;
		line-height: 22px;
		text-align: left;
	}

	@media screen and (${device.tablet}) {
		padding: 46px 60px;
		max-width: 864px;

		font-size: 16px;
		line-height: 35px;
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

	@media screen and (${device.mobileL}) {
		font-size: 14px;
		line-height: 25px;
	}

	@media screen and (${device.tablet}) {
		font-size: 14px;
		line-height: 26px;
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

	@media screen and (${device.mobileL}) {
		flex-direction: row;
		gap: 67px;
	}

	@media screen and (${device.tablet}) {
		gap: 68px;
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

	@media screen and (${device.tablet}) {
		width: 24px;
		height: 24px;
		top: 24px;
		right: 24px;
	}
`;

export const ButtonOk = styled.button`
	min-width: 120px;
	height: 36px;
	border: 2px solid var(--reviewText);
	border-radius: 5px;

	font-family: var(--Montserrat);
	font-size: 16px;
	line-height: 24px;

	transition: all var(--animation-duration) var(--timing-function);

	&:hover,
	&:focus {
		background-color: var(--btnBgHover);
		color: var(--mainText);
	}

	@media screen and (${device.mobileL}) {
		min-width: 180px;
		height: 64px;
		font-size: 28px;
		line-height: 42px;
	}

	@media screen and (${device.tablet}) {
		min-width: 184px;
	}

	@media screen and (${device.desktop}) {
		min-width: 216px;
	}
`;
