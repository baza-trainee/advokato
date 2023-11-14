import styled from "@emotion/styled";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
	container,
	flexBox,
	fontSectionTitle,
	sliderArrow,
} from "../../styles/mixins";

export const SectionStyled = styled.section`
	height: 512px;
	padding: 132px 0;
	background: var(--darkBackground);
`;

export const Container = styled.div`
	${container};
`;

export const ClientsBlockHeader = styled.h2`
	${fontSectionTitle};
	line-height: 56px;
	color: var(--lightText);
	margin-bottom: 40px;
`;

export const SliderWrapper = styled.div`
	min-width: 0px;
`;

export const SliderArrow = styled.div`
	${sliderArrow};
`;

export const ClientsSliderContainer = styled.div`
	${flexBox};
	align-items: center;
	justify-content: space-evenly;
`;

export const StyledSlider = styled(Slider)`
	width: 970px;
	margin-left: 20px;
	margin-right: 0px;
	.slick-slide {
		width: 300px;
		height: 180px;
		border: 1px solid var(--reviewText);
		border-radius: 20px;
		margin-right: 24px;
	}
	.slick-slide img {
		width: 300px;
		height: 180px;
	}
	.slick-slide img:hover {
		transform: scale(1.2);
		transition: 1s;
	}
	.slick-slider {
		overflow: hidden;
	}
`;
