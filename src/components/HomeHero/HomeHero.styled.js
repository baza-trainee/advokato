import styled from "@emotion/styled";
import {
	container,
	fontHeroTitle,
	fontSectionText,
	device,
} from "../../styles/mixins";
import bgImage from "../../assets/images/homeHero-section/hero-bg.jpg";

export const SectionStyled = styled.section`
	height: 100vh;
	background-image: url(${bgImage});
	background-size: cover;
`;

export const Container = styled.div`
	${container};
	max-width: 1440px;
	margin: 0 auto;
	padding-top: calc(132px + 140px);
	div {
		display: flex;
		justify-content: space-between;
	}
	${container};
	padding-top: calc(132px + 120px);
	div {
		display: flex;
		justify-content: space-between;
	}

	@media screen and (${device.desktop}) {
		max-width: 1440px;
		padding-top: calc(132px + 140px);
	}
`;

export const MainTitleStyled = styled.h1`
	${fontHeroTitle};
	width: 592px;
	height: 180px;
	font-size: 72px;
	line-height: 87.77px;
	margin-bottom: 100px;
	color: var(--lightText);
	@media screen and (${device.desktop}) {
		${fontHeroTitle};
		width: 820px;
		height: 244px;
		margin-bottom: 68px;
	}
`;

export const SubtitleStyled = styled.h2`
	${fontSectionText};
	width: 412px;
	height: 128px;
	font-size: 20px;
	line-height: 32px;
	:last-of-type {
		width: 344px;
	}
	color: var(--lightText);
	@media screen and (${device.desktop}) {
		width: 500px;
		height: 108px;
		:last-of-type {
			width: 480px;
		}
		${fontSectionText};
	}
`;
