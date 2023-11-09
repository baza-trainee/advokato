import styled from "@emotion/styled";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { container, fontSectionTitle } from "../../styles/mixins";

import arrowLeft from "../../assets/images/clients-section/arrowLeft.png";
import arrowRight from "../../assets/images/clients-section/arrowRight.png";

export const SectionStyled = styled.section`
  position: relative;
  top: -30vh;
  width: 100%;
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

export const SliderWrapper = styled.div``;

export const StyledSlider = styled(Slider)`
  margin: 0 4.5vw;
  .slick-prev {
    background: url(${arrowLeft}) no-repeat;
    width: 8vw;
    height: 8vw;
    left: -4.5vw;
    top: 16vh;
    z-index: 1;
  }
  .slick-next {
    background: url(${arrowRight}) no-repeat;
    width: 8vw;
    height: 8vw;
    left: 64.5vw;
    top: 16vh;
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
  .slick-slide {
    margin: 0 1.2vw;
    img {
      max-width: 100%;
    }
  }
`;
