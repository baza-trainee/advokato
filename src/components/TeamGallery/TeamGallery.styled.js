import styled from "@emotion/styled";
import {
	container,
	fontReview,
	fontSectionText,
	fontSectionTitle,
	fontSliderCardName,
	sliderArrow,
} from "../../styles/mixins";
import "@splidejs/react-splide/css";

const index = () => {
	return `calc(1vw + 1vh)`;
};

export const SectionStyled = styled.section`
	height: 900px;
	padding-top: 132px;
	background: var(--darkBackground);
	color: var(--lightText);
	overflow: hidden;
	position: relative;
	top: -0.1vh;
`;

export const Container = styled.div`
	${container};
`;

export const TeamBlockHeader = styled.h1`
	${fontSectionTitle};
	max-width: 572px;
`;

export const TeamBlockSubTitle = styled.p`
	${fontSectionText};
	max-width: 552px;
	/* line-height: 25px; */
	margin: 24px 0 20px;
`;

export const TeamSliderContainer = styled.div`
	position: relative;
	.splide__slide.is-active {
		opacity: 1;
		transition: 1s;
	}
	.splide__slide.is-active:hover {
		transform: scale(1.01);
	}
	.splide__slide {
		opacity: 0.3;
	}
`;

export const SliderArrow = styled.div`
	${sliderArrow};
	position: absolute;
	top: 45%;
	left: 3.5%;
	z-index: 20;
	&:last-of-type {
		left: 92.5%;
	}
`;

export const TeamMateCardWrapper = styled.div`
	position: relative;
`;

export const CardRecvisiteWrapper = styled.div`
	position: absolute;
	left: 60px;
	bottom: 96px;
	width: 320px;
	height: 88px;
`;

export const CardName = styled.h3`
	${fontSliderCardName};
	color: var(--lightText);
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
`;
