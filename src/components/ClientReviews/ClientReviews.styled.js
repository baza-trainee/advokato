import styled from "@emotion/styled";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  flexBox,
  fontReview,
  fontReviewName,
  fontSectionTitle,
} from "../../styles/mixins";

import arrowLeft from "../../images/ClientsBlock/arrowLeft.png";
import arrowRight from "../../images/ClientsBlock/arrowRight.png";

export const SectionStyled = styled.section`
  position: relative;
  top: -30vh;
  width: 100%;
  height: 774px;
  padding: 140px 110px;
  background: var(--darkBackground);
`;

export const ClientsBlockHeader = styled.h1`
  ${fontSectionTitle};
  color: var(--lightText);
  margin: 3vh -3vw;
`;

export const SliderWrapper = styled.div`
  margin: 0 auto;
  max-width: 80%;
`;

export const StyledSlider = styled(Slider)`
  .slick-track {
    display: flex;
    align-items: center;
    gap: 52px;
  }
  .slick-prev {
    background: url(${arrowLeft}) no-repeat;
    width: 8vw;
    height: 8vw;
    left: -11vw;
    top: 35vh;
    z-index: 1;
  }
  .slick-next {
    background: url(${arrowRight}) no-repeat;
    width: 8vw;
    height: 8vw;
    left: 73vw;
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
    width: 80px;
    height: 80px;
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
