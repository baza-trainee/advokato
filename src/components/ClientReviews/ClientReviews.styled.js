import styled from "@emotion/styled";
import {
	flexBox,
	fontReview,
	fontReviewName,
	fontSectionTitle,
	sliderArrow,
} from "../../styles/mixins";

export const SectionStyled = styled.section`
	min-height: 864px;
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
	padding: 132px 151px 40px;
	color: var(--lightText);
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
`;

export const ClientCardWrapper = styled.div`
	min-width: 440px;
	height: ${props => (props.heightText ? "fit-content" : "512px")};
	border-radius: 24px;
	border: 1px solid var(--reviewText);
	background-color: var(--darkGrey);
	color: var(--reviewText);
	padding: 48px 40px;
`;

export const CardHeader = styled.div`
	${flexBox}
	align-items: start;
	justify-content: space-around;
	width: 360px;
	height: fit-content;
	gap: 20px;
	overflow: hidden;
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
<<<<<<< HEAD

=======
>>>>>>> dev
export const CardRecvisits = styled.div`
	width: 260px;
`;

export const ClientName = styled.p`
	${fontReviewName};
	line-height: 32px;
	margin-bottom: 16px;
`;

export const ClientRole = styled.p`
	${fontReview}
`;

export const ClientReview = styled.p`
	${fontReview}
	width:360px;
	margin-top: 24px;
	button {
		opacity: 50%;
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
`;
