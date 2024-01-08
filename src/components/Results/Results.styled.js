import styled from "@emotion/styled";
import {
	container,
	flexBox,
	fontSectionTitle,
	fontSectionText,
	device,
} from "../../styles/mixins";
import "../../index.css";

export const SectionStyled = styled.section`
	padding: 132px 160px;
	background-color: var(--lightBackground);
	color: var(--lightText);

	@media screen and (${device.mobileL}) {
		padding: 60px 55px;
	}

	@media screen and (${device.tablet}) {
		padding: 120px 80px;
	}

	@media screen and (${device.desktop}) {
		padding: 132px 160px;
	}
`;

export const Container = styled.div`
	${container};
	${flexBox};
	flex-direction: column;
	height: auto;

	@media screen and (${device.mobileL}) {
		gap: 40px;
		min-width: 648px;
		padding: 0;
	}

	@media screen and (${device.tablet}) {
		gap: 40px;
		min-width: 864px;
		padding: 0;
	}

	@media screen and (${device.desktop}) {
		gap: 40px;
		width: 1120px;
		padding: 0;
	}
`;

export const TitleBlock = styled.div`
	${flexBox};
	flex-direction: column;

	@media screen and (${device.mobileL}) {
		gap: 20px;
		width: 648px;
	}

	@media screen and (${device.tablet}) {
		gap: 24px;
		width: 857px;
	}

	@media screen and (${device.desktop}) {
		gap: 40px;
		width: 1120px;
	}
`;

export const TitleStyled = styled.h2`
	${fontSectionTitle};
	color: var(--mainText);

	@media screen and (${device.mobileL}) {
		font-size: 24px;
		line-height: 33.6px;
		width: 648px;
	}

	@media screen and (${device.tablet}) {
		font-size: 32px;
		line-height: 44.8px;
		width: auto;
	}

	@media screen and (${device.desktop}) {
		font-size: 40px;
		line-height: calc(56 / 40);
	}
`;

export const SubheadingStyled = styled.p`
	${fontSectionText};
	color: var(--mainText);

	@media screen and (${device.mobileL}) {
		font-size: 16px;
		line-height: 25.6px;
		
	}

	@media screen and (${device.tablet}) {
		font-size: 20px;
		line-height: 32px;
	}

	@media screen and (${device.desktop}) {
		font-size: 22px;
		line-height: 35.2px;
	}
`;

export const ResultBlock = styled.div`
	${flexBox};
	gap: 40px;
	flex-direction: column;
	width: 100%;
`;
