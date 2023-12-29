import styled from "@emotion/styled";
import { flexBox, fontSectionTitle, sliderArrow } from "../../styles/mixins";

export const SectionStyled = styled.section`
	height: 512px;
	background: var(--darkBackground);
`;

export const Container = styled.div`
	max-width: 1440px;
	margin: 0 auto;
`;

export const ClientsBlockHeader = styled.h2`
	${fontSectionTitle};
	color: var(--lightText);
	padding: 132px 160px 40px;
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
