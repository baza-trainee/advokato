import styled from "@emotion/styled";
import {
  container,
  fontSectionText,
  fontSectionTitle,
} from "../../styles/mixins";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import arrowLeft from "../../assets/images/clients-section/arrowLeft.png";
import arrowRight from "../../assets/images/clients-section/arrowRight.png";

export const SectionStyled = styled.section`
  position: relative;
  top: -30vh;
  background: var(--darkBackground);
  color: var(--lightText);
  width: 100%;
  height: 94vh;
  color: var(--lightText);
  padding-top: 10vh;
`;

export const Container = styled.div`
  ${container};
`;

export const TeamBlockHeader = styled.div`
  ${fontSectionTitle};
`;

export const TeamBlockSubTitle = styled.p`
  ${fontSectionText}
  margin: 0 0 1vh;
  max-width: 552px;
`;

export const SliderWrapper = styled.div`
  margin: 0 auto;
  max-width: 100%;
`;

export const StyledSlider = styled(Slider)`
  .slick-track {
    display: flex;
    align-items: center;
  }
  .slick-prev {
    background: url(${arrowLeft}) no-repeat;
    width: 8vw;
    height: 8vw;
    left: 5vw;
    top: 35vh;
    z-index: 1;
  }
  .slick-next {
    background: url(${arrowRight}) no-repeat;
    width: 8vw;
    height: 8vw;
    left: 90vw;
    top: 35vh;
    z-index: 1;
  }
  .slick-next::before {
    content: "";
    display: block;
    height: 15px;
    width: 15px;
  }
  .slick-prev::before {
    content: "";
    display: block;
    height: 15px;
    width: 15px;
  }
  .slick-slide:not(.slick-active) {
    opacity: 0.3;
  }
  .slick-slide {
    img {
      display: block;
      max-width: 100%;
      height: auto;
      object-fit: cover;
      position: relative;
      top: -5vh;
    }
  }
  .slick-active {
    transition: 2.5s;
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
  top: 45%;
  left: 5%;
`;

export const CardRole = styled.div`
  position: absolute;
  top: 50%;
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
