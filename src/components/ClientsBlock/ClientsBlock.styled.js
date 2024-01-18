import styled from "@emotion/styled";
import {
	device,
	flexBox,
	fontSectionTitle,
	sliderArrow,
} from "../../styles/mixins";

export const SectionStyled = styled.section`
	background: var(--darkBackground);
	padding: 28px 24px;

	
	@media screen and (${device.mobileL}) {
		height: 368px;
    padding: 60px 0px;
	}
	@media screen and (${device.tablet}) {
		height: 500px;
    padding: 120px 0px;
	}
	@media screen and (${device.desktop}) {
		height: 512px;
    padding: 132px 0px;
	}
`;

export const Container = styled.div`

	margin: 0 auto;

  @media screen and (${device.mobileL}) {
    max-width: 768px;
  }

  @media screen and (${device.tablet}) {
    max-width: 1024px;
  }
  @media screen and (${device.desktop}) {
    max-width: 1440px;
  }
`;

export const ClientsBlockHeader = styled.h2`
	${fontSectionTitle};
	padding-bottom: 20px;
	color: var(--lightText);
  font-size: 20px;
  font-weight: 500;

	
	@media screen and (${device.mobileL}) {
		padding-bottom: 40px;
		padding-left: 60px;
		font-size: 24px;
		line-height: calc(33.6 / 24);
	}
	@media screen and (${device.tablet}) {
    padding-bottom: 40px;
    padding-left: 80px;
		font-size: 32px;
		font-weight: 400;
		line-height: calc(44.8 / 32);
	}
	@media screen and (${device.desktop}) {
    padding-bottom: 40px;
    padding-left: 160px;
		font-size: 40px;
		font-weight: 500;
		line-height: calc(56 / 40);
	}
`;

export const SliderArrow = styled.div`
	${sliderArrow};

  svg {
    width: 20px;
    height: 20px;
  }
	position: absolute;
	z-index: 10;
	
  button {
    top: 50%;
  }
	
	@media screen and (${device.mobileL}) {

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

export const LeftSliderArrow = styled(SliderArrow)`
  left: 0;
  @media screen and (${device.mobileL}) {
    left: 60px;
  }

  @media screen and (${device.tablet}) {
    left: 20px;
  }

  @media screen and (${device.desktop}) {
    left: 54px;
  }
`;

export const RightSliderArrow = styled(SliderArrow)`
  right: 0;

  @media screen and (${device.mobileL}) {
    right: 60px;
  }

  @media screen and (${device.tablet}) {
    right: 20px;
  }

  @media screen and (${device.desktop}) {
    right: 54px;
  }
	
`;

export const ClientsSliderContainer = styled.div`
	${flexBox};
	margin: 0 auto;
	overflow: hidden;
	position: relative;
  max-width: 100%;
	
	.splide__slide {
		${flexBox}
		opacity: 1;
		transition: 1s;
	}
	
	@media screen and (${device.mobileL}) {
    gap: 32px;
		.splide__slide.is-active,.splide__slide.is-active+ .is-visible
			+ .is-visible {
			opacity: .3;
		}
	}
	@media screen and (${device.tablet}) {
		.splide__slide.is-active,.splide__slide.is-active+ .is-visible
			+ .is-visible {
			opacity: 1;
		}
		.splide__slide.is-active,.splide__slide.is-next+ .is-visible
			+ .is-visible {
			opacity: 0.3;
		}
	}
	@media screen and (${device.desktop}) {
		.splide__slide.is-active,.splide__slide.is-next+ .is-visible
			+ .is-visible {
			opacity: 1;
		}
		.splide__slide.is-active,.splide__slide.is-next+ .is-visible
			+ .is-visible+ .is-visible {
			opacity: .3;
		} 
	}
`;

export const ClientCardWrapper = styled.div`
	${flexBox};
  width: 216px;
  height: 115px;
	
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

  @media screen and (min-width: 700px) {
    width: 230px;
  }
	
  @media screen and (${device.mobileL}) {
    width: 300px;
    height: 180px;
  }
	
`;
