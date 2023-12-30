import styled from '@emotion/styled';
import {
  flexBox,
  fontSectionTitle,
  secondaryButton,
  device,
} from '../../styles/mixins';

export const SectionStyled = styled.section`
  @media screen and (min-width: 768px) {
  }

  @media screen and (${device.tablet}) {
    margin: 100px auto;
    width: 864px;
  }

  @media screen and (${device.desktop}) {
    margin: 132px auto;
    width: 1120px;
  }
`;

export const TitleStyled = styled.h2`
  display: flex;
  flex-direction: column;

  ${fontSectionTitle};

  span {
    width: 504px;
    text-decoration-line: underline;
    text-decoration-thickness: 2px;
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (${device.tablet}) {
    height: 112px;
    width: 504px;
    margin-bottom: 28px;

    font-size: 32px;
    line-height: calc(44 / 32);
  }

  @media screen and (${device.desktop}) {
    margin-bottom: 56px;

    font-size: 40px;
    line-height: calc(56 / 40);
  }
`;

export const StyledForm = styled.form`
  div {
    display: flex;

    @media screen and (min-width: 768px) {
    }

    @media screen and (${device.tablet}) {
      margin-bottom: 48px;
      gap: 48px;
    }

    @media screen and (${device.desktop}) {
      gap: 62px;
    }
  }

  label {
    display: flex;
    flex-direction: column;
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (${device.tablet}) {
    width: 864px;
  }

  @media screen and (${device.desktop}) {
    width: 1024px;
  }
`;

export const ButtonStyled = styled.button`
  ${flexBox};
  ${secondaryButton};
  margin-top: 48px;

  &:hover,
  &:focus {
    border: 1px solid #1c1c21;
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (${device.tablet}) {
    width: 292px;
    height: 52px;
    font-size: 14px;
    line-height: calc(17 / 14);
  }

  @media screen and (${device.desktop}) {
    width: 364px;
    height: 64px;
    font-size: 16px;
    line-height: calc(22 / 16);
  }
`;
