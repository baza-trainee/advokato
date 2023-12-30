import styled from "@emotion/styled";
import {
	container,
	device,
	flexBox,
	fontReview,
	fontSectionText,
	fontSectionTitle,
	fontSliderCardName,
	sliderArrow,
} from "../../styles/mixins";
import "@splidejs/react-splide/css";

export const SectionStyled = styled.section`
	height: 100vh;
	padding-top: 132px;
	background: var(--darkBackground);
	color: var(--lightText);
	overflow: hidden;
	position: relative;
	@media screen and (${device.tablet}) {
		padding: 120px 0 0px;
	}
	@media screen and (${device.desktop}) {
		padding-top: 132px;
	}
`;

export const Container = styled.div`
	${container};
	max-width: 1440px;
`;

export const TeamBlockHeader = styled.h1`
	${fontSectionTitle};
	max-width: 572px;
	@media screen and (${device.tablet}) {
		font-size: 32px;
		line-height: calc(44.8 / 32);
		letter-spacing: 0em;
	}
	@media screen and (${device.desktop}) {
		font-size: 40px;
		line-height: calc(56 / 40);
		letter-spacing: 0em;
	}
`;

export const TeamBlockSubTitle = styled.p`
	${fontSectionText};
	max-width: 552px;
	margin: 24px 0 20px;
	@media screen and (${device.tablet}) {
		margin: 24px 0;
		font-size: 20px;
		line-height: calc(32 / 20);
		letter-spacing: 0em;
	}
	@media screen and (${device.desktop}) {
		margin: 24px 0 20px;
		font-size: 22px;
		line-height: calc(35.2 / 22);
	}
`;

export const TeamSliderContainer = styled.div`
	${flexBox};
	max-width: 1440px;
	margin: 0 auto;
	height: fit-content;
	overflow: hidden;
	position: relative;
	.splide__slide {
		${flexBox}
		opacity: 1;
		transition: 1s;
	}
	.splide__slide.is-active:hover {
		transform: scale(1.01);
	}
	.splide__slide.is-next,
	.splide__slide.is-prev {
		opacity: 0.3;
	}
`;

export const SliderArrow = styled.div`
	${sliderArrow};
	position: absolute;
	top: 45%;
	left: 3%;
	z-index: 10;
	&:last-of-type {
		left: 93%;
	}

	@media screen and (${device.tablet}) {
		left: 2%;
		&:last-of-type {
			left: 94.5%;
		}
		svg {
			width: 40px;
			height: 40px;
		}
	}
	@media screen and (${device.desktop}) {
		position: absolute;
		top: 45%;
		left: 3%;
		z-index: 10;
		&:last-of-type {
			left: 93%;
		}
		svg {
			width: 60px;
			height: 60px;
		}
	}
`;

export const TeamMateCardWrapper = styled.div`
	position: relative;
	overflow: hidden;
	object-fit: cover;
	img {
		width: 1120px;
		height: 600px;
	}
	@media screen and (${device.tablet}) {
		img {
			width: 864px;
			height: 452px;
		}
	}
	@media screen and (${device.desktop}) {
		img {
			width: 1120px;
			height: 600px;
		}
	}
`;

export const CardRecvisiteWrapper = styled.div`
	position: absolute;
	left: 60px;
	bottom: 96px;
	width: 367px;
	height: 108px;
	@media screen and (${device.tablet}) {
		left: 32px;
		bottom: 30px;
	}
	@media screen and (${device.desktop}) {
		left: 60px;
		bottom: 96px;
	}
`;

export const CardName = styled.h3`
	${fontSliderCardName};
	color: var(--lightText);
	width: 100%;
	@media screen and (${device.tablet}) {
		font-size: 28px;
		line-height: calc(39.2 / 28);
		letter-spacing: 0em;
	}
	@media screen and (${device.desktop}) {
		font-size: 32px;
		line-height: calc(44.8 / 32);
	}
`;

export const CardRole = styled.div`
	${fontReview};
	color: var(--lightText);
	&::after {
		content: "";
		width: 80px;
		border: 2px solid var(--accentLink);
		border-radius: 10px;
		position: absolute;
		left: 0;
		top: 84px;
	}
	@media screen and (${device.tablet}) {
		font-size: 16px;
		line-height: calc(24 / 16);
		letter-spacing: 0em;
	}
	@media screen and (${device.desktop}) {
		font-size: 18px;
		line-height: calc(27 / 18);
	}
`;
