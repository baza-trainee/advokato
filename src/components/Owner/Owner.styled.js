import styled from "@emotion/styled";
import {
  flexBox,
  container,
  secondaryButton,
  device,
  fontMobile,
  fontTablet,
  fontDesktop,
} from "../../styles/mixins";
import "../../index.css";

export const SectionStyled = styled.section`
  /* position: relative;
  top: -48vh; */
  /* height: 100vh; */
  background-color: var(--darkBackground);
  color: var(--lightText);
`;

export const Container = styled.div`
  ${container};
  display: flex;
  justify-content: space-between;
  @media screen and (${device.mobileL}) {
    padding: 0;
  }
`;

export const TextStyled = styled.div`
  h3 {
    font-family: var(--Raleway);
    font-size: clamp(18px, 2vw, 32px);
    font-weight: 400;
    line-height: 45px;
    letter-spacing: 0em;
    text-align: left;
  }

  span {
    font-family: var(--Raleway);
    font-size: clamp(32px, 3.5vw, 64px);
    font-weight: 700;
    line-height: 90px;
    letter-spacing: 0em;
    text-align: left;
  }

  p {
    font-family: var(--PTSans);
    font-size: clamp(14px, 1.5vw, 28px);
    font-weight: 400;
    line-height: 35px;
    letter-spacing: 0em;
    text-align: left;
    margin: 40px 0;
  }

  @media screen and (${device.mobileS}) {
    ${fontMobile};
  }

  @media screen and (${device.tablet}) {
    p {
      ${fontTablet};
    }
    max-width: 484px;
    width: 80%;
  }

  @media screen and (${device.desktop}) {
    p {
      ${fontDesktop};
    }
  }
`;

export const CompanyBox = styled.div`
  ${flexBox}
  flex-direction: column;
  width: 57.6%;
`;

export const ImageBoxStyled = styled.div`
  width: 42.4%;
  background: bisque;
`;

export const ImageStyled = styled.img`
  display: block;
  max-width: 100%;
  height: auto;
  object-fit: cover;
`;

export const ButtonStyled = styled.button`
  ${secondaryButton};
  ${flexBox};
  font-family: var(--Raleway);
  font-size: clamp(12px, 1.4vw, 24px);
  font-weight: 600;
  line-height: 27px;
  letter-spacing: 0px;
  text-align: left;

  background: var(--darkBackground);
  border: 1px solid var(--greyText);

  svg {
    margin-left: 10px;
  }

  &:active {
    background: #e1e1e1 !important;
    color: var(--mainText);

    svg {
      fill: var(--mainText);
    }
  }

  &:hover {
    color: var(--mainText) !important;
  }

  &:hover svg {
    fill: var(--mainText);
    transition: fill var(--timing-function) var(--animation-duration);
  }

  &[disabled] {
    color: var(--greyText);
    background: var(--darkBackground);

    svg {
      fill: var(--greyText);
    }
  }
`;
