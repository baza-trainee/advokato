import styled from "@emotion/styled";
import { flexBox, mainButton, device } from "../../styles/mixins";
import { Link } from "react-router-dom";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 0 60px;

	background-color: var(--lightBackground);
`;

export const TopBackground = styled.div`
	position: absolute;
	top: 0;
	left: 0;

	height: 140px;
	width: 100%;

	background-color: var(--darkBackground);
`;

export const Title = styled.p`
	margin-top: 92px;
	margin-bottom: 20px;

	font-family: var(--Montserrat);
	font-size: 100px;
	font-weight: 700;
	line-height: 122px;

	@media screen and (${device.tablet}) {
		margin-top: 200px;
		margin-bottom: 72px;
	}

	@media screen and (${device.desktop}) {
		margin-top: 240px;
		margin-bottom: 56px;
		font-size: 300px;
		line-height: 366px;
	}
`;

export const Text = styled.p`
	margin-bottom: 36px;
	text-align: center;
	font-family: var(--Raleway);
	font-size: 12px;
	font-weight: 400;
	line-height: 19px;

	@media screen and (${device.tablet}) {
		margin-bottom: 80px;
		font-size: 22px;
		line-height: 35px;
	}

	@media screen and (${device.desktop}) {
		margin-bottom: 88px;
		font-size: 32px;
		line-height: 45px;
	}
`;

export const Button = styled(Link)`
	margin-bottom: 36px;

	${mainButton};

	font-family: Raleway;
	font-size: 14px;
	font-weight: 600;
	line-height: 21px;

	${flexBox};
	gap: 8px;

	transition: all var(--timing-function) var(--animation-duration);

	@media screen and (${device.tablet}) {
		margin-bottom: 120px;

		font-size: 16px;
		line-height: 24px;
		gap: 12px;
	}

	@media screen and (${device.desktop}) {
		margin-bottom: 100px;

		font-size: 18px;
		line-height: 27px;
	}
`;
