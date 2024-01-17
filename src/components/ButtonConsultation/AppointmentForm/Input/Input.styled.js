import { device, fontDesktop } from '../../../../styles/mixins';

import styled from '@emotion/styled';

export const LabelStyled = styled.label`
  position: relative;

  p {
    /* ${fontDesktop}; */

    @media screen and (${device.mobileL}) {
      height: 32px;
      font-size: 18px;
      line-height: calc(29 / 18);
    }

    @media screen and (${device.desktop}) {
      /* height: 36px;
      font-size: 22px;
      line-height: calc(35 / 22); */
      font-weight: 600;
    }
  }

  p:first-of-type {
    margin-bottom: 4px;
    color: var(--mainText);
  }

  @media screen and (${device.mobileL}) {
    /* width: 440px; */
    width: 400px;
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

border-radius: 5px;
  &[type='search'] {
    -webkit-appearance: none;
  }

  &::placeholder {
    font-family: var(--Montserrat);
    font-weight: 500;
    letter-spacing: 0em;
    color: var(--greyText);

    @media screen and (${device.mobileL}) {
      font-size: 16px;
      line-height: 19.5px;
    }

    @media screen and (${device.desktop}) {
      font-size: 18px;
      /* line-height: 21.94px; */
    }
  }

  &:focus {
    outline: 2px solid var(--mainText);
  }

  @media screen and (${device.mobileL}) {
    height: 48px;
    font-size: 16px;
    line-height: 19.5px;
  }

  @media screen and (${device.desktop}) {
    /* height: 56px; */
    font-size: 18px;
    /* line-height: 21.94px; */
  }
`;

export const ErrorText = styled.p`
  position: absolute;
  top: 0;
  left: 0;
  color: var(--accentText);

  @media screen and (${device.mobileL}) {
    transform: translateY(80px);
    width: 100%;
    text-align: center;
  }

  @media screen and (${device.desktop}) {
    transform: translateY(85px);
    width: 100%;
    text-align: center;
  }
`;
