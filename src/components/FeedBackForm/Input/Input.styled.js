import styled from '@emotion/styled';
import { fontDesktop, device } from '../../../styles/mixins';

export const LabelStyled = styled.label`
  position: relative;

  p {
    ${fontDesktop};

    @media screen and (${device.mobileL}) {
      height: 28px;
      font-size: 16px;
      line-height: calc(26 / 16);
    }

    @media screen and (${device.tablet}) {
      height: 24px;
      font-size: 22px;
      line-height: calc(35 / 22);
    }

    @media screen and (${device.desktop}) {
      height: 36px;
    }
  }

  p:first-of-type {
    color: var(--mainText);

    @media screen and (${device.mobileL}) {
      margin-bottom: 20px;
    }

    @media screen and (${device.tablet}) {
      margin-bottom: 24px;
    }
  }

  p:last-of-type {
    line-height: 1.2;
  }

  @media screen and (${device.mobileL}) {
    width: ${({ width }) => (width ? width : '200px')};
  }

  @media screen and (${device.tablet}) {
    width: ${({ width }) => (width ? width : '276px')};
  }

  @media screen and (${device.desktop}) {
    width: ${({ width }) => (width ? width : '300px')};
  }
`;

export const InputStyled = styled.input`
  position: relative;
  width: 100%;
  height: 32px;

  font-family: var(--Montserrat);
  font-weight: 500;
  letter-spacing: 0em;
  color: var(--mainText);
  background-color: inherit;
  border: none;
  border-bottom: 1px solid var(--darkGrey);

  border-bottom-color: ${({ isValid, error, touch }) => {
    if (!error && touch && isValid) {
      return 'var(--trueText);';
    }

    if (!isValid && error) {
      return 'var(--accentText);';
    }
  }};

  border-radius: 0;
  &[type='search'] {
    -webkit-appearance: none;
  }

  &::placeholder {
    font-family: var(--Raleway);
    font-weight: 400;
    letter-spacing: 0em;
    color: #3f3f44;

    @media screen and (${device.mobileL}) {
      font-size: 16px;
      line-height: 24px;
    }

    @media screen and (${device.tablet}) {
      font-size: 18px;
      line-height: 27px;
    }
  }

  &:focus {
    outline: none;
  }

  @media screen and (${device.mobileL}) {
    font-size: 16px;
    line-height: 24px;
  }

  @media screen and (${device.tablet}) {
    padding-bottom: 8px;
    font-size: 18px;
    line-height: 21.94px;
  }
`;

export const ErrorText = styled.p`
  position: absolute;
  top: 0;
  left: 0;
  color: var(--accentText);

  @media screen and (${device.mobileL}) {
    transform: translateY(80px);
  }

  @media screen and (${device.tablet}) {
    transform: translateY(90px);
  }
`;
