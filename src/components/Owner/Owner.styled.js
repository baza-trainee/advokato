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
  max-width: 1440px;

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
    line-height: calc(42 / 56);
    letter-spacing: 0.006rem;
    text-align: left;
    margin-top: 32px;
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
  padding: 20px 32px;
  width: 364px;
  height: 64px;

  font-family: var(--Raleway);
  font-size: 18px;
  font-weight: 600;
  line-height: calc(27 / 18);
  letter-spacing: 0px;
  text-align: left;

  background: var(--darkBackground);
  border: 1px solid var(--greyText);

  svg {
    margin-left: 10px;
    fill: inherit;
  }
`;
