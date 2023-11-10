import styled from "@emotion/styled";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { container, flexBox, fontSectionTitle } from "../../styles/mixins";

export const SectionStyled = styled.section`
	height: 512px;
	padding: 112px 0;
	background: var(--darkBackground);
`;

export const Container = styled.div`
	${container};
`;

export const ClientsBlockHeader = styled.h1`
	${fontSectionTitle};
	color: var(--lightText);
	margin: 2vh 0;
`;

export const SliderWrapper = styled.div`
	min-width: 0px;
`;

export const SliderArrow = styled.div``;

export const ClientsSliderContainer = styled.div`
	${flexBox};
	align-items: center;
	justify-content: space-evenly;
`;

export const StyledSlider = styled(Slider)`
	width: 970px;
	margin-left: 23px;
	margin-right: 0px;
	.slick-slide {
		width: 300px;
		height: auto;
		margin-right: 24px;
	}
`;
