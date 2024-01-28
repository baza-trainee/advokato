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
	padding: 28px 0;

  @media screen and (${device.mobileL}) {
    padding-top: 60px;
		padding-bottom: 16px;
    
  }

  @media screen and (${device.tablet}) {
    padding: 40px 0;
  }

  @media screen and (${device.laptop}) {
    padding: 60px 0;
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
  color: var(--lightText);
  padding-bottom: 20px;
  padding-left: 24px;
  font-size: 20px;
  max-width: 768px;

  @media screen and (${device.mobileL}) {
    padding-left: 60px;
    font-size: 24px;
    font-weight: 500;
    line-height: calc(33.6 / 24);
    max-width: 768px;
  }
	
  @media screen and (${device.tablet}) {
    padding-bottom: 40px;
    padding-left: 80px;
    font-size: 32px;
    font-weight: 400;
    line-height: calc(44.8 / 32);
    max-width: 1024px;
  }
  @media screen and (${device.desktop}) {
    padding-left: 160px;
    font-size: 40px;
    font-weight: 500;
    line-height: calc(56 / 40);
    max-width: 1440px;
  }
`;

export const SliderWrapper = styled.div`
  ${flexBox};
  gap: 32px;
  margin: 0 auto;
  height: fit-content;
  overflow: hidden;
  position: relative;

  .splide__slide {
    ${flexBox};
    opacity: 1;
    transition: 1s;
  }

  @media screen and (${device.mobileL}) {
    padding-bottom: 16px;
		
    .splide__slide.is-next + .splide__slide {
      opacity: 0.3;
    }

    .splide__slide.is-active, .splide__slide.is-active+.is-visible+.is-visible {
      opacity: .3;
    }
  }
  @media screen and (${device.tablet}) {
    padding-bottom: 100px;

    .splide__slide.is-active, .splide__slide.is-active+.is-visible+.is-visible {
      opacity: 1;
    }
		
    .splide__slide.is-next + .splide__slide {
      opacity: 1;
    }

    .splide__slide.is-next + .splide__slide + .splide__slide,
    .splide__slide.is-active {
      opacity: 1;
    }
  }
  @media screen and (${device.desktop}) {
    padding-bottom: 60px;
  }
`;

export const ClientCardWrapper = styled.div`
	
	border-radius: 24px;
	border: 1px solid var(--reviewText);
	background-color: var(--darkGrey);
	color: var(--reviewText);
  width: 216px;
  height: 348px;
	padding: 16px 8px;
	display: flex;
	flex-direction: column;
	gap: 8px;
	
	@media screen and (${device.mobileL}) {
		width: 364px;
		height: ${props => (props.heightText ? "fit-content" : "380px")};
		min-height: 380px;
		padding: 20px 16px;
	}
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
	${flexBox};

	justify-content: space-around;
	height: fit-content;
	gap: 4px;
	overflow: hidden;
	
	@media screen and (${device.mobileL}) {
    gap: 20px;
		width: 332px;
    align-items: start;

	}
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

	width: 112px;
	
	@media screen and (${device.mobileL}) {
		width: 232px;
	}
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
  font-size: 14px;
	
	@media screen and (${device.mobileL}) {
	margin-bottom: 8px;
		font-size: 20px;
		line-height: calc(32 / 20);
	}
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
	${fontReview};
  font-size: 10px;
  line-height: 150%;
	
	
	@media screen and (${device.mobileL}) {
		font-size: 14px;
		line-height: calc(21 / 14);
	}
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
	${fontReview};
  font-size: 10px;
  line-height: 150%;
	
	button {
		opacity: 50%;
	}
	@media screen and (${device.mobileL}) {
		width: 332px;
		margin-top: 16px;
		font-size: 14px;
		line-height: calc(21 / 14);
	}
	@media screen and (${device.tablet}) {
		width: 324px;
		margin-top: 20px;
		font-size: 14px;
		line-height: calc(21 / 14);
	}
	@media screen and (${device.desktop}) {
		width: 360px;
		margin-top: 24px;
		font-size: 18px;
		line-height: calc(27 / 18);
	}
`;

export const SliderArrow = styled.div`
	${sliderArrow};
	position: absolute;
	top: calc(50%-40px);
	z-index: 10;
  width: 22px;
  height: 22px;

  svg {
    width: 20px;
    height: 20px;
  }
	
	@media screen and (${device.mobileL}) {

		svg {
			width: 40px;
			height: 40px;
		}
	}
	@media screen and (${device.tablet}) {

		svg {
			width: 40px;
			height: 40px;
		}
	}
	@media screen and (${device.desktop}) {

		svg {
			width: 60px;
			height: 60px;
		}
	}
`;

export const LeftSliderArrow = styled(SliderArrow)`
  left: 24px;

  @media screen and (${device.mobileL}) {
    left: 56px;
  }
  @media screen and (${device.tablet}) {

  }
  @media screen and (${device.desktop}) {
   
  }

`

export const RightSliderArrow = styled(SliderArrow)`
  right: 24px;

  @media screen and (${device.mobileL}) {
    right: 56px;
  }
  @media screen and (${device.tablet}) {

  }
  @media screen and (${device.desktop}) {

  }

`
