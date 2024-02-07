import "@splidejs/react-splide/css";

import {
	device,
	flexBox,
	fontReview,
	fontSectionText,
	fontSectionTitle,
	fontSliderCardName,
	sliderArrow,
} from "../../styles/mixins";

import styled from "@emotion/styled";

export const SectionStyled = styled.section`
  //height: 100vh;
  padding: 28px 0 0;
  background: var(--darkBackground);
  color: var(--lightText);
  overflow: hidden;
  position: relative;


  @media screen and (${device.mobileL}) {
    padding: 60px 0 0;
  }
  @media screen and (${device.tablet}) {
    padding: 100px 0 0;
  }
  @media screen and (${device.desktop}) {
    padding-top: 100px;
  }
`;

export const Container = styled.div`
  margin: 0 auto;
	padding: 0 24px;

  @media screen and (${device.mobileL}) {
    max-width: 648px;
    padding: 0;
  }

  @media screen and (${device.tablet}) {
    max-width: 864px;
  }

  @media screen and (${device.desktop}) {
    max-width: 1120px;
  }
`;

export const TeamBlockHeader = styled.h2`
  ${fontSectionTitle};
  max-width: 572px;
  font-size: 20px;
  font-weight: 500;
  line-height: 140%;

  @media screen and (${device.mobileL}) {
    font-size: 24px;
    line-height: calc(33.6 / 24);
    letter-spacing: 0;
  }
  @media screen and (${device.tablet}) {
    font-size: 32px;
    line-height: calc(44.8 / 32);
    letter-spacing: 0;
  }
  @media screen and (${device.desktop}) {
    font-size: 40px;
    line-height: calc(56 / 40);
    letter-spacing: 0;
  }
`;

export const TeamBlockSubTitle = styled.p`
  ${fontSectionText};
  max-width: 552px;
  margin: 24px 0 20px;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%;

  @media screen and (${device.mobileL}) {
    margin: 20px 0;
    font-size: 16px;
    line-height: calc(25.6 / 16);
    width: 400px;
  }
  @media screen and (${device.tablet}) {
    margin: 24px 0;
    font-size: 20px;
    line-height: calc(32 / 20);
    letter-spacing: 0em;
    width: 496px;
  }
  @media screen and (${device.desktop}) {
    margin: 24px 0 20px;
    font-size: 22px;
    line-height: calc(35.2 / 22);
    width: 552px;
  }
`;

export const TeamSliderContainer = styled.div`
  ${flexBox};
  max-width: 1440px;
  margin: 0 auto;
  height: fit-content;
  overflow: hidden;
  position: relative;
  gap: 4px;

  .splide__slide {
    ${flexBox};
    opacity: 1;
    transition: 1s;
  }

  .splide__slide.is-active:hover {
    transform: scale(1.01);
  }

  .splide__slide.is-next,
  .splide__slide.is-prev {
    opacity: 0.3;
  }

  @media screen and (${device.mobileL}) {
    gap: 10px;
    max-width: 768px;
  }

  @media screen and (${device.tablet}) {
    gap: 20px;
    max-width: 1024px;
  }

  @media screen and (${device.desktop}) {
    gap: 50px;
    max-width: 1440px;
  }
`;

export const SliderArrow = styled.div`
  ${sliderArrow};
  position: absolute;
  z-index: 10;


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
    left: 10px;
  }
  @media screen and (${device.tablet}) {
    left: 20px;
  }
  @media screen and (${device.desktop}) {
    left: 50px;
  }

`;

export const RightSliderArrow = styled(SliderArrow)`
  right: 24px;
  @media screen and (${device.mobileL}) {
    right: 10px;
  }
  @media screen and (${device.tablet}) {
    right: 20px;
  }
  @media screen and (${device.desktop}) {
    right: 50px;
  }

`;
export const TeamMateCardWrapper = styled.div`
  position: relative;
  height: 100%;


  img {
    //width: 100%;
    height: 100%;
    object-fit: cover;
    overflow: hidden;

  }

  @media screen and (${device.mobileL}) {
    width: 648px;
    height: 324px;
  }
  @media screen and (${device.tablet}) {
    width: 864px;
    height: 452px;
  }
  @media screen and (${device.desktop}) {
    width: 1120px;
    height: 600px;
  }
`;

export const CardRecvisiteWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  position: absolute;
  left: 26px;
  bottom: 20px;
  width: 367px;
  height: auto;

  @media screen and (${device.mobileL}) {
    width: 284px;
    left: 24px;
    bottom: 24px;
  }

  @media screen and (${device.tablet}) {
    width: 294px;
    left: 32px;
    bottom: 42px;
    gap: 16px;
  }
  @media screen and (${device.desktop}) {
    width: 360px;
    left: 60px;
    bottom: 96px;
    gap: 12px;
  }
`;

export const CardName = styled.h3`
  ${fontSliderCardName};
  color: var(--lightText);
  width: 100%;
  letter-spacing: 0;
  font-size: 14px;
  font-weight: 700;
  line-height: 140%;

  @media screen and (${device.mobileL}) {
    height: 32px;
    font-size: 22px;
    line-height: calc(30.8 / 22);
  }
  @media screen and (${device.tablet}) {
    font-size: 28px;
    line-height: calc(39.2 / 28);
  }
  @media screen and (${device.desktop}) {
    height: 36px;
    font-size: 32px;
    line-height: calc(44.8 / 32);
  }
`;

export const CardRole = styled.div`
  ${fontReview};
  color: var(--lightText);
  letter-spacing: 0em;
  font-size: 12px;
  font-weight: 700;
  line-height: 150%;
  font-variant-numeric: lining-nums proportional-nums;

  &:not(:empty)::after {
    content: "";
    width: 80px;
    height: 2px;
    border: 2px solid var(--accentLink);
    border-radius: 10px;
    position: absolute;
    left: 0;
    bottom: -8px;
  }


  @media screen and (${device.mobileL}) {
    font-size: 16px;
    font-weight: 600;
    line-height: calc(24 / 16);
    &:not(:empty)::after {
      content: "";
      border: 1px solid var(--accentLink);
      bottom: -8px;
    }
  }
  @media screen and (${device.tablet}) {
    font-size: 16px;
    font-weight: 400;
    line-height: calc(24 / 16);

    &:not(:empty)::after {
      content: "";
      border: 2px solid var(--accentLink);
      bottom: -16px;
      height: 2px;
    }
  }
  @media screen and (${device.desktop}) {
    font-size: 18px;
    line-height: calc(27 / 18);

    &:not(:empty)::after {
      bottom: -12px;

    }
  }
`;
