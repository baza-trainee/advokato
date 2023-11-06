import styled from "@emotion/styled";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { container, flexBox, fontSectionTitle } from "../../styles/mixins";
import { index } from "../HomeHero/variables";
import { device } from "../../styles/mixins";

import arrowLeft from "../../images/ClientsBlock/arrowLeft.png"
import arrowRight from "../../images/ClientsBlock/arrowRight.png"


export const SectionStyled = styled.section`
  width:100%;
  height:512px;
  padding: 112px 0;
background:var(--darkBackground);
`
export const Container = styled.div`
  ${container};
  ${flexBox};
  flex-direction: column;
  `
export const ClientsBlockHeader = styled.h1`
${fontSectionTitle};
color:var(--lightText);
margin:1vh 5vw;
`

export const SliderWrapper = styled.div`
margin:0 auto;
max-width: 80%;
`
export const StyledSlider = styled(Slider)`
  .slick-dots li button:before {
  color:white;
 }
 .slick-prev {
  background: url(${arrowLeft}) no-repeat;
  width:8vw;
  height:8vw;
  left: -5vw;
  top: 18vh;
  z-index: 1;
}
.slick-next {
  background: url(${arrowRight}) no-repeat;
  width:8vw;
  height:8vw;
  left: 80vw;
  top: 18vh;
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

  & .slick-slide img {
      max-width: 24vw;
    margin:0 20px;
    }

    
      
  
`;
