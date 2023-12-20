import styled from "@emotion/styled";
import {
	container,
	flexBox,
	fontReview,
	fontSectionText,
	fontSectionTitle,
	fontSliderCardName,
	sliderArrow,
} from "../../styles/mixins";
import "@splidejs/react-splide/css";

export const SectionStyled = styled.section`
	height: 1096px;
	padding-top: 132px;
	background: var(--darkBackground);
	color: var(--lightText);
	overflow: hidden;
	position: relative;
	top: -0.2vh;
`;

export const Container = styled.div`
	${container};
	max-width: 1440px;
`;

export const TeamBlockHeader = styled.h1`
	${fontSectionTitle};
	max-width: 572px;
`;

export const TeamBlockSubTitle = styled.p`
	${fontSectionText};
	max-width: 552px;
	margin: 24px 0 20px;
`;

export const TeamSliderContainer = styled.div`	
	${flexBox};
	max-width: 1856px;
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
	.splide__slide.is-next,.splide__slide.is-prev {
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
`;

export const TeamMateCardWrapper = styled.div`
	position: relative;
	img{
		width:100%;
		height:100%;
		object-fit: cover;
	}
`;

export const CardRecvisiteWrapper = styled.div`
	position: absolute;
	left: 61px;
	bottom: 96px;
	width: 367px;
	height: 108px;
`;

export const CardName = styled.h3`
	${fontSliderCardName};
	color: var(--lightText);
	width:100%;
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
