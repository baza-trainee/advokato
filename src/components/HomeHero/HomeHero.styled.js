import styled from "@emotion/styled";
import {
	container,
	fontHeroTitle,
	fontSectionText,
	device,
	flexBox,
} from "../../styles/mixins";
import bgImage from "../../assets/images/homeHero-section/hero-bg.jpg";

export const SectionStyled = styled.section`
	height: 100vh;
	background-image: url(${bgImage});
	background-size: cover;
	background-position: center;
`;

export const Container = styled.div`
	${container};
	margin: 0 auto;
	padding-top: calc(132px + 140px);
	div {
		display: flex;
		justify-content: space-between;
	}
	@media screen and (${device.mobileS}) {
		max-width: 320px;
		padding-top: calc(40px + 48px);
	}
	@media screen and (${device.mobileL}) {
		max-width: 768px;
		padding-top: calc(72px + 68px);
	}
	@media screen and (${device.tablet}) {
		max-width: 1024px;
		padding-top: calc(144px + 76px);
	}
	@media screen and (${device.preburger}) {
		max-width: 1200px;
		padding-top: calc(172px + 80px);
	}
	@media screen and (${device.desktop}) {
		max-width: 1440px;
		padding-top: calc(182px + 88px);
	}
`;

export const MainTitleStyled = styled.h1`
	${fontHeroTitle};
	color: var(--lightText);
	overflow: hidden;
	@media screen and (${device.mobileS}) {
		width: 260px;
		height: 152px;
		margin-bottom: 36px;
		font-size: 40px;
		line-height: 48.76px;
	}
	@media screen and (${device.mobileL}) {
		height: 120px;
		width: 388px;
		margin-bottom: 56px;
		font-size: 48px;
		font-weight: 700;
		line-height: 58.51px;
	}
	@media screen and (${device.tablet}) {
		width: 592px;
		height: 180px;
		margin-bottom: 52px;
		font-size: 72px;
		line-height: 87.77px;
	}
	@media screen and (${device.preburger}) {
		margin-bottom: 100px;
	}
	@media screen and (${device.desktop}) {
		margin-bottom: 70px;
		width: 820px;
		height: 244px;
		font-size: 100px;
		line-height: 121.9px;
	}
`;
export const SubtitleWrapper = styled.div`
	@media screen and (${device.mobileS}) {
		${flexBox};
		flex-direction: column-reverse;
		gap: 20px;
		max-width: 200px;
	}
	@media screen and (${device.mobileL}) {
		flex-direction: row;
		align-items: flex-start;
		max-width: 648px;
		flex-direction: row;
	}
	@media screen and (${device.tablet}) {
		max-width: 860px;
	}
	@media screen and (${device.preburger}) {
		max-width: 930px;
	}
	@media screen and (${device.desktop}) {
		max-width: 1120px;
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
	@media screen and (${device.mobileS}) {
		width: 200px;
		height: 120px;
		font-size: 14px;
		font-weight: 400;
		line-height: 22.4px;
		:last-of-type {
			width: 200px;
			height: 92px;
		}
	}
	@media screen and (${device.mobileL}) {
		width: 312px;
		height: 104px;
		font-size: 16px;
		font-weight: 400;
		line-height: 25.6px;
		:last-of-type {
			width: 258px;
			height: 104px;
		}
	}
	@media screen and (${device.tablet}) {
		width: 412px;
		height: 128px;
		font-size: 20px;
		line-height: 32px;
		:last-of-type {
			width: 344px;
			height:96px;
		}
	}
	@media screen and (${device.desktop}) {
		width: 500px;
		height: 108px;
		:last-of-type {
			width: 480px;
			height:108px;
		}
		${fontSectionText};
	}
`;
