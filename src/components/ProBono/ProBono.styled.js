import styled from "@emotion/styled";
import {
	container,
	device,
	flexBox,
	fontSectionText,
	fontSectionTitle,
} from "../../styles/mixins";

export const SectionStyled = styled.section`
	${flexBox};
	width: 100%;
	height: fit-content;
	background: var(--darkBackground);
	color: var(--lightText);
	position: relative;
	top: -0.2vh;
`;

export const Container = styled.div`
	${container};
	max-width: 1440px;
	padding: 132px 160px;
	overflow: hidden;
	@media screen and (${device.tablet}) {
		padding: 120px 80px;
	}
	@media screen and (${device.desktop}) {
		padding: 132px 160px;
	}
`;

export const BlockWrapper = styled.div`
	${flexBox};
	justify-content: space-between;

	margin: 40px auto 0;
	@media screen and (${device.tablet}) {
		width: 864px;
		height: 552px;
	}
	@media screen and (${device.desktop}) {
		width: 1120px;
		height: 572px;
	}

  `;

export const LeftSide = styled.div`
	position: relative;
	width: 500px;
	height: 572px;
	overflow: hidden;
	img {
		border-radius: 24px;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	@media screen and (${device.tablet}) {
		width: 400px;
		height: 552px;
	}
	@media screen and (${device.desktop}) {
		width: 500px;
		height: 572px;
	}
`;

export const RightSide = styled.div`
	position: relative;
	width: 500px;
	height: 572px;

	overflow: hidden;
	img {
		border-radius: 24px;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	@media screen and (${device.tablet}) {
		width: 400px;
		height: 552px;
	}
	@media screen and (${device.desktop}) {
		width: 500px;
		height: 572px;
	}
`;

export const TextWrapper = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 100%;

	ul {
		list-style: disc;
		margin-left: 22px;
	}
`;

export const BonoHeader = styled.h2`
		${fontSectionTitle};
	@media screen and (${device.tablet}) {
		font-size: 32px;
		line-height: calc(44.8 / 32);
	}
	@media screen and (${device.desktop}) {
		font-size: 40px;
		line-height: calc(56 / 40);  
	}
`;

export const BonoText = styled.div`
	${fontSectionText};
	p {
		margin-top: 10px;
	}
	@media screen and (${device.tablet}) {
		font-size: 20px;
		line-height: calc(32 / 20);
	}
	@media screen and (${device.desktop}) {
		font-size: 22px;
		line-height: 35.2px;  
	}
`;
