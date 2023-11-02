import styled from "@emotion/styled";
import { container, secondaryButton } from "../../styles/mixins";
import "../../index.css";

export const SectionStyled = styled.section`
  height:100vh;
  background-color: var(--darkBackground);
  color: var(--white);
`;

export const Container = styled.div`
  ${container};
  height: 100vh;
  display: flex;
  justify-content: space-between;
  padding: 0 !important;
  max-width: inherit !important;

  @media screen and (min-width: 1440px){
    padding: 0;
  }
  @media screen and (min-width: 768px){
    padding: 0;
  }

`;

export const TextStyled = styled.div`
  h3 {
    font-family: "Raleway";
    font-size: clamp(18px, 2vw, 32px);
    font-weight: 400;
    line-height: 45px;
    letter-spacing: 0em;
    text-align: left;
  }

  span {
    font-family: "Raleway";
    font-size: clamp(32px, 3.5vw, 64px);
    font-weight: 700;
    line-height: 90px;
    letter-spacing: 0em;
    text-align: left;
  }

  p {
    font-family: "PT Sans";
    font-size: clamp(14px, 1.2vw, 22px);
    font-weight: 400;
    line-height: 35px;
    letter-spacing: 0em;
    text-align: left;
    width: 484px;
    margin: 40px 0;
  }
  @media screen and (min-width: 768px) {
    padding:  40px;
  }
`;

export const CompanyBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const ImageStyled = styled.img`
  display: block;
  background-image: url("/src/assets/images/homePage/photo-owner.jpg");
  background-repeat: no-repeat;
  object-fit: cover;
  -webkit-background-size: cover;
  background-size: cover;
  min-width: 611px;
  width: clamp(200px, 35vw, 611px);
  height: auto;
`;

export const ButtonStyled = styled.button`
  ${secondaryButton};
  background: var(--darkBackground);
  border: 1px solid var(--white);
  font-family: "Raleway";
  font-size: clamp(12px, 1.4vw, 24px);
  font-weight: 600;
  line-height: 27px;
  letter-spacing: 0em;
  text-align: left;
  display: flex;
  align-items: center;

  svg {
    fill: var(--white);
    width: 16px;
    height: 12px;
    margin-left: 10px;
  }

  &:hover svg {
    fill: var(--darkBackground);
    transition: fill var(--timing-function) var(--animation-duration);
  }
`;
