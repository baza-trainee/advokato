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
	@media screen and (${device.tablet}) {
	}	
`;

export const Container = styled.div`
	${container};
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
	@media screen and (${device.mobileL}) {
		padding-top: calc(60px + 80px);
	}	
	@media screen and (${device.tablet}) {
		padding-top: calc(120px + 100px);
	}
	@media screen and (${device.desktop}) {
		max-width: 1440px;
		padding-top: calc(132px + 140px);
	}
`;

export const MainTitleStyled = styled.h1`
	${fontHeroTitle};
	color: var(--lightText);
	overflow: hidden;
	@media screen and (${device.mobileL}) {
		height: 120px;
		margin-bottom: 60px;
		font-size: 48px;
        font-weight: 600;
		line-height: 58.51px;
	}
	@media screen and (${device.tablet}) {
		height: 180px;
		margin-bottom: 52px;
		font-size: 72px;
		line-height: 87.77px;
	}
	@media screen and (${device.desktop}) {
		margin-bottom: 68px;
		width: 820px;
		height: 244px;
		font-size: 100px;
        line-height: 121.9px;  
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
	overflow: hidden;
	@media screen and (${device.mobileL}) {
		width: 312px;
		height: 100px;
		font-size: 16px;
        font-weight: 400;
		line-height: 25.6px;
		:last-of-type {
			width: 258px;
		}
	}
	@media screen and (${device.tablet}) {
		width: 412px;
		height: 128px;
		font-size: 20px;
		line-height: 32px;
		:last-of-type {
			width: 344px;
		}
	}
	@media screen and (${device.desktop}) {
		width: 500px;
		height: 108px;
		:last-of-type {
			width: 480px;
		}
		${fontSectionText};
	}
`;
