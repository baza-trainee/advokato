import styled from '@emotion/styled';
import {
	container,
	fontSectionText,
	fontSectionTitle,
} from "../../styles/mixins";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const SectionStyled = styled.section`
	background: var(--darkBackground);
	color: var(--lightText);
	height: 92vh;
	color: var(--lightText);
	overflow: hidden;
	position: relative;
	top: -0.1vh;
	button {
		position: absolute;
		top: 55%;
	}
	.next {
		right: 3vw;
	}
	.prev {
		left: 3vw;
	}

`;

export const Container = styled.div`
	${container};
`;

export const TeamBlockHeader = styled.div`
	${fontSectionTitle};
	max-width: 572px;
	padding: 2vh 0 1vh;
`;

export const TeamBlockSubTitle = styled.p`
	${fontSectionText}
	max-width: 552px;
`;

export const SliderWrapper = styled.div`
	margin: 2vh 0;
`;

export const StyledSlider = styled(Slider)`
	.slick-slide:not(.slick-active) {
		opacity: 0.3;
	}
	.slick-slide {
		width: 1120px;
		img {
			display: block;
			max-width: 100%;
			height: auto;
			object-fit: cover;
		}
	}
	.slick-center {
		width: 1120px;
	}
	.slick-center img {
		max-width: 1120px;
	}
	.slick-active {
		transition: 2s;
	}
	.slick-active:hover {
		transform: scale(1.01);
		transition: 0.5s;
	}

`;

export const TeamMateCardWrapper = styled.div`
	position: relative;
`;

export const CardName = styled.h3`
	position: absolute;
	top: 55%;
	left: 5%;
`;

export const CardRole = styled.div`
	position: absolute;
	top: 60%;
	left: 5%;
	&::after {
		content: "";
		width: 80px;
		height: 4px;
		border: 3px solid var(--accentLink);
		border-radius: 10px;
		position: absolute;
		left: 0;
		top: 4.5vh;
	}
`;
