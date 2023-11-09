import styled from "@emotion/styled";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  container,
  flexBox,
  fontReview,
  fontReviewName,
  fontSectionTitle,
} from "../../styles/mixins";

import arrowLeft from "../../assets/images/clients-section/arrowLeft.png";
import arrowRight from "../../assets/images/clients-section/arrowRight.png";

export const SectionStyled = styled.section`
  /* position: relative;
  top: -30.08vh; */
  width: 100%;
  height: 774px;
  padding: 140px 0;
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
  width: 74vw;
`;

export const StyledSlider = styled(Slider)`
  margin: 0 1vw;
  .slick-track {
    display: flex;
    align-items: center;
    margin-left: 4vw;
  }
  .slick-prev {
    background: url(${arrowLeft}) no-repeat;
    width: 8vw;
    height: 8vw;
    left: -1vw;
    top: 25vh;
    z-index: 1;
  }
  .slick-next {
    background: url(${arrowRight}) no-repeat;
    width: 8vw;
    height: 8vw;
    left: 68vw;
    top: 25vh;
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
    margin: 0 4vw;
    width: 440px;
    height: 442px;
    img {
      max-width: 100%;
    }
  }
`;

export const ClientCardWrapper = styled.div`
  width: 440px;
  height: 442px;
  border-radius: 12px;
  background-color: var(--darkGrey);
  color: var(--reviewText);
  padding: 20px 40px;
`;

export const CardHeader = styled.div`
  ${flexBox}
  gap:3vw;
  img {
    width: 5.9vw;
    height: 5.9vw;
  }
`;

export const CardRecvisits = styled.div`
  margin: 1vh auto;
`;

export const ClientName = styled.p`
  ${fontReviewName}
`;

export const ClientRole = styled.p`
  ${fontReview}
`;

export const ClientReview = styled.p`
  ${fontReview}
  padding:3vh auto;
`;
