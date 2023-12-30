import styled from "@emotion/styled";
import {
	device,
	flexBox,
	fontSectionTitle,
	sliderArrow,
} from "../../styles/mixins";

export const SectionStyled = styled.section`
	background: var(--darkBackground);
	@media screen and (${device.mobileL}) {
		height: 336px;
	}
	@media screen and (${device.tablet}) {
		height: 500px;
	}
	@media screen and (${device.desktop}) {
		height: 512px;
	}
`;

export const Container = styled.div`
	max-width: 1440px;
	margin: 0 auto;
`;

export const ClientsBlockHeader = styled.h2`
	${fontSectionTitle};
	color: var(--lightText);
	@media screen and (${device.mobileL}) {
		padding: 60px 0 40px;
	}
	@media screen and (${device.tablet}) {
		padding: 120px 80px 40px;
		font-size: 32px;
		font-weight: 400;
		line-height: calc(44.8 / 32);
	}
	@media screen and (${device.desktop}) {
		padding: 132px 160px 40px;
		font-size: 40px;
		font-weight: 500;
		line-height: calc(56 / 40);
	}
`;

export const SliderArrow = styled.div`
	${sliderArrow};
	position: absolute;
	button {
		top: 50%;
	}
	left: 5%;
	z-index: 10;
	&:last-of-type {
		left: 92%;
	}
	@media screen and (${device.mobileL}) {
		left: 8%;
		&:last-of-type {
			left: 87%;
		}
		svg {
			width: 40px;
			height: 40px;
		}
	}
	@media screen and (${device.tablet}) {
		left: 2%;
		&:last-of-type {
			left: 94%;
		}
		svg {
			width: 40px;
			height: 40px;
		}
	}
	@media screen and (${device.desktop}) {
		left: 5%;
		&:last-of-type {
			left: 92%;
		}
		svg {
			width: 60px;
			height: 60px;
		}
	}
`;

export const ClientsSliderContainer = styled.div`
	${flexBox};
	max-width: 1440px;
	margin: 0 auto;
	gap: 32px;
	overflow: hidden;
	position: relative;
	.splide__slide {
		${flexBox}
		opacity: 1;
		transition: 1s;
	}
	.splide__slide.is-next + .splide__slide + .splide__slide + .splide__slide,
	.splide__slide.is-active {
		opacity: 0.3;
	}
	@media screen and (${device.tablet}) {
		.splide__slide.is-active
			+ .is-visible
			+ .is-visible
			+ .is-visible {
			opacity: 0.3;
		}
	}
	@media screen and (${device.desktop}) {
	.splide__slide.is-active+.is-visible+.is-visible+.is-visible {
			opacity: 1;
		} 
	}
`;

export const ClientCardWrapper = styled.div`
	${flexBox};
	width: 300px;
	height: 180px;
	border-radius: 20px;
	border: 1px solid var(--reviewText);
	box-sizing: border-box;
	cursor: pointer;
	overflow: hidden;
	img {
		object-fit: cover;
		&:hover {
			transform: scale(1.1);
			transition: 1s;
		}
	}
`;
