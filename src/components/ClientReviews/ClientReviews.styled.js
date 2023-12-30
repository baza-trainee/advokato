import styled from "@emotion/styled";
import {
	device,
	flexBox,
	fontReview,
	fontReviewName,
	fontSectionTitle,
	sliderArrow,
} from "../../styles/mixins";

export const SectionStyled = styled.section`
	height: fit-content;
	background: var(--darkBackground);
	position: relative;
	top: -0.2vh;
`;

export const Container = styled.div`
	max-width: 1440px;
	margin: 0 auto;
`;

export const ClientsBlockHeader = styled.h2`
	${fontSectionTitle};
	color: var(--lightText);
	@media screen and (${device.mobileL}) {
		padding: 60px 60px 40px 60px;
	}
	@media screen and (${device.tablet}) {
		padding: 120px 80px 40px;
		font-size: 32px;
        font-weight: 400;
        line-height: calc(44.8 / 32);  
	}
	@media screen and (${device.desktop}) {
		padding: 132px 151px 40px;
		font-size: 40px;
        font-weight: 500;
        line-height: calc(56 / 40);  
	}
`;

export const SliderWrapper = styled.div`
	${flexBox};
	gap: 32px;
	max-width: 1440px;
	margin: 0 auto;
	height: fit-content;
	overflow: hidden;
	position: relative;
	padding-bottom: 124px;
	.splide__slide {
		${flexBox}
		opacity: 1;
		transition: 1s;
	}

	.splide__slide.is-next + .splide__slide + .splide__slide,
	.splide__slide.is-active {
		opacity: 0.3;
	}
	@media screen and (${device.tablet}) {
		padding-bottom: 120px;
	}
	@media screen and (${device.desktop}) {
		padding-bottom: 124px;
	}
`;

export const ClientCardWrapper = styled.div`
	height: ${props => (props.heightText ? "fit-content" : "512px")};
	border-radius: 24px;
	border: 1px solid var(--reviewText);
	background-color: var(--darkGrey);
	color: var(--reviewText);
	@media screen and (${device.tablet}) {
		width: 372px;
		height: ${props => (props.heightText ? "fit-content" : "444px")};
		min-height: 444px;
		padding: 24px;
	}
	@media screen and (${device.desktop}) {
		width: 440px;
		height: ${props => (props.heightText ? "fit-content" : "512px")};
		padding: 48px 40px;
	}
`;

export const CardHeader = styled.div`
	${flexBox}
	align-items: start;
	justify-content: space-around;
	height: fit-content;
	gap: 20px;
	overflow: hidden;
	@media screen and (${device.tablet}) {
		width: 324px;
	}
	@media screen and (${device.desktop}) {
		width: 360px;
	}
`;
export const ImageWrapper = styled.div`
	width: 80px;
	height: 80px;
	border-radius: 50%;
	overflow: hidden;
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`;
export const CardRecvisits = styled.div`
	overflow: hidden;
	@media screen and (${device.tablet}) {
		width: 224px;
	}
	@media screen and (${device.desktop}) {
		width: 260px;
	}
`;

export const ClientName = styled.p`
	${fontReviewName};
	line-height: 32px;
	@media screen and (${device.tablet}) {
	margin-bottom: 8px;
		font-size: 22px;
	}
	@media screen and (${device.desktop}) {
		margin-bottom: 16px;
		font-size: 28px;
		line-height: calc(32 / 28);
	}
`;

export const ClientRole = styled.p`
	${fontReview}
	@media screen and (${device.tablet}) {
		font-size: 14px;
		line-height: calc(21 / 14);
	}
	@media screen and (${device.desktop}) {
		font-size: 18px;
		line-height: calc(27 / 18);
	}
`;

export const ClientReview = styled.p`
	${fontReview}
	margin-top: 24px;
	button {
		opacity: 50%;
	}
	@media screen and (${device.tablet}) {
		width: 324px;
		font-size: 14px;
		line-height: calc(21 / 14);
	}
	@media screen and (${device.desktop}) {
		width: 360px;
		font-size: 18px;
		line-height: calc(27 / 18);
	}
`;

export const SliderArrow = styled.div`
	${sliderArrow};
	position: absolute;
	top: calc(50%-40px);
	left: 5%;
	z-index: 10;
	&:last-of-type {
		left: 92%;
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
