import styled from "@emotion/styled";
import { flexBox, device } from "../../styles/mixins";

export const CardWrap = styled.div`
	${flexBox};
	flex-direction: column-reverse;
	gap: 20px;

	@media screen and (${device.tablet}) {
		flex-direction: ${({ index }) =>
			index === 0 || index % 2 === 0 ? "row" : "row-reverse"};
		gap: 24px;
	}
	@media screen and (${device.desktop}) {
		gap: 72px;
	}
`;

export const PersonPhoto = styled.img`
	object-fit: cover;

	@media screen and (${device.mobileL}) {
		width: 648px;
		height: 384px;
	}

	@media screen and (${device.tablet}) {
		width: 420px;
		height: 612px;
	}
	@media screen and (${device.desktop}) {
		width: 524px;
		height: 640px;
	}
`;

export const Name = styled.h3`
	font-family: var(--Raleway);
	font-weight: 400;

	@media screen and (${device.mobileL}) {
		margin-bottom: 20px;
		font-size: 28px;
		line-height: 39px;
	}
	@media screen and (${device.desktop}) {
		margin-bottom: 28px;
		font-size: 32px;
		line-height: 45px;
	}
`;

export const Position = styled.h4`
	font-family: var(--Montserrat);
	font-weight: 400;

	@media screen and (${device.mobileL}) {
		margin-bottom: 20px;
		font-size: 22px;
		line-height: 33px;
	}
	@media screen and (${device.desktop}) {
		margin-bottom: 28px;
		font-size: 28px;
		line-height: 42px;
	}
`;

export const PersonInfo = styled.div`
	display: flex;
	flex-direction: column;
	align-items: start;
	gap: 0.5em;
	flex-grow: 1;

	font-family: var(--Raleway);
	font-weight: 400;

	@media screen and (${device.mobileL}) {
		font-size: 16px;
		line-height: 24px;
	}
	@media screen and (${device.desktop}) {
		font-size: 18px;
		line-height: 27px;
	}
`;
