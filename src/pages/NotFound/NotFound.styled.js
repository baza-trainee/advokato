import styled from "@emotion/styled";
import { mainButton, device } from "../../styles/mixins";
import { Link } from "react-router-dom";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 0 24px;

	background-color: var(--lightBackground);

	@media screen and (${device.mobileL}) {
		padding: 0 80px;
	}
	@media screen and (${device.tablet}) {
		padding: 0 208px;
	}

	@media screen and (${device.desktop}) {
		padding: 0 280px;
	}
`;

export const TopBackground = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	height: 48px;
	width: 100%;

	background-color: var(--darkBackground);

	@media screen and (${device.mobileL}) {
		height: 68px;
	}
	@media screen and (${device.tablet}) {
		height: 76px;
	}
	@media screen and (${device.burger}) {
		height: 80px;
	}
	@media screen and (${device.desktop}) {
		height: 88px;
	}
`;

export const Title = styled.p`
	margin-top: 92px;
	margin-bottom: 20px;

	font-family: var(--Montserrat);
	font-weight: 700;
	font-size: 100px;
	line-height: 122px;

	@media screen and (${device.mobileL}) {
		margin-top: 200px;
		margin-bottom: 72px;
	}

	@media screen and (${device.tablet}) {
		margin-top: 224px;
		margin-bottom: 60px;
		font-size: 140px;
		line-height: 170px;
	}

	@media screen and (${device.desktop}) {
		margin-top: 240px;
		margin-bottom: 56px;
		font-size: 300px;
		line-height: 366px;
	}
`;

export const Text = styled.p`
	margin-bottom: 28px;
	max-width: 200px;

	font-family: var(--Raleway);
	font-weight: 400;
	font-size: 12px;
	line-height: 17px;
	text-align: center;

	@media screen and (${device.mobileL}) {
		margin-bottom: 84px;
		max-width: 100%;
		font-size: 22px;
		line-height: 31px;
	}
	@media screen and (${device.tablet}) {
		margin-bottom: 68px;
	}
	@media screen and (${device.desktop}) {
		margin-bottom: 88px;
		font-size: 32px;
		line-height: 45px;
	}
`;

export const Button = styled(Link)`
	${mainButton};
	display: flex;
	justify-content: center;
	align-items: center;

	margin-bottom: calc(44px + 24px);
	min-width: 272px;
	height: 44px;

	padding: 16px 20px;

	font-family: var(--Montserrat);
	font-weight: 500;
	font-size: 14px;
	line-height: 17px;

	transition: all var(--timing-function) var(--animation-duration);

	@media screen and (${device.mobileL}) {
		margin-bottom: calc(168px + 24px);
		min-width: 260px;
		height: 44px;

		font-weight: 500;
		line-height: 17px;
	}

	@media screen and (${device.tablet}) {
		margin-bottom: calc(148px + 24px);
		min-width: 312px;
		height: 60px;
		padding: 20px;

		font-size: 16px;
		line-height: 20px;
	}

	@media screen and (${device.desktop}) {
		margin-bottom: calc(100px + 24px);
		min-width: 364px;
		height: 64px;
		padding: 20px 32px;

		font-size: 18px;
		line-height: 22px;
	}
`;
