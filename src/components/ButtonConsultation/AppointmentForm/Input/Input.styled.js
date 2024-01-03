import styled from '@emotion/styled';
import { fontDesktop, device } from '../../../../styles/mixins';

export const LabelStyled = styled.label`
  position: relative;

  p {
    ${fontDesktop};

    @media screen and (${device.tablet}) {
      height: 32px;
      font-size: 18px;
      line-height: calc(29 / 18);
    }

    @media screen and (${device.desktop}) {
      height: 36px;
      font-size: 22px;
      line-height: calc(35 / 22);
    }
  }

  p:first-of-type {
    margin-bottom: 4px;
    color: var(--mainText);
  }

  @media screen and (${device.tablet}) {
    width: 440px;
  }
`;

export const InputStyled = styled.input`
  position: relative;
  padding: 15px 16px;
  width: 100%;

  font-family: var(--Montserrat);
  font-weight: 500;
  letter-spacing: 0em;
  color: var(--mainText);
  background-color: inherit;
  border: 1px solid var(--greyText);

  border-color: ${({ isValid, error, touch }) => {
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
    font-family: var(--Montserrat);
    font-weight: 500;
    letter-spacing: 0em;
    color: var(--greyText);

    @media screen and (${device.tablet}) {
      font-size: 16px;
      line-height: 19.5px;
    }

    @media screen and (${device.desktop}) {
      font-size: 18px;
      line-height: 21.94px;
    }
  }

  &:focus {
    outline: 2px solid var(--mainText);
  }

  @media screen and (${device.tablet}) {
    height: 48px;
    font-size: 16px;
    line-height: 19.5px;
  }

  @media screen and (${device.desktop}) {
    height: 56px;
    font-size: 18px;
    line-height: 21.94px;
  }
`;

export const ErrorText = styled.p`
  position: absolute;
  top: 0;
  left: 0;
  color: var(--accentText);

  @media screen and (${device.tablet}) {
    transform: translateY(80px);
  }

  @media screen and (${device.desktop}) {
    transform: translateY(90px);
  }
`;
