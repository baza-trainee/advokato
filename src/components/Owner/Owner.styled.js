import styled from '@emotion/styled';
import {
  flexBox,
  container,
  secondaryButton,
  device,
  fontMobile,
  fontTablet,
  fontDesktop,
} from '../../styles/mixins';
import '../../index.css';

export const SectionStyled = styled.section`
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
  width: 484px;

  h3 {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 52px;

    font-family: var(--Raleway);
    font-size: 32px;
    font-weight: 400;
    line-height: calc(45 / 32);
    letter-spacing: 0em;
    text-align: left;
  }

  span {
    font-family: var(--Raleway);
    font-size: 64px;
    font-weight: 700;
    line-height: calc(90 / 60);
    letter-spacing: 0em;
    text-align: left;
  }

  p {
    margin-bottom: 72px;

    font-family: var(--PTSans);
    font-size: 22px;
    font-weight: 400;
    line-height: calc(35 / 22);
    letter-spacing: 0em;
    text-align: left;
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
  ${flexBox};
  flex-direction: column;
  width: 57.6%;
`;

export const ImageBoxStyled = styled.div`
  width: 42.4%;
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
/*   
  font-family: var(--Raleway);
  font-size: clamp(12px, 1.4vw, 24px);
  font-weight: 600;
  line-height: 27px;
  letter-spacing: 0px;
  text-align: left;

  background: var(--darkBackground);
  border: 1px solid var(--greyText); */

  svg {
    margin-left: 10px;
    fill: inherit;
  }
`;
