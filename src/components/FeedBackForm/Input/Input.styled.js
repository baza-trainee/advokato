import styled from '@emotion/styled';
import { fontDesktop, device } from '../../../styles/mixins';

export const LabelStyled = styled.label`
  position: relative;

  p {
    ${fontDesktop};

    @media screen and (min-width: 768px) {
    }

    @media screen and (${device.tablet}) {
      height: 24px;
    }

    @media screen and (${device.desktop}) {
      height: 36px;
    }
  }

  p:first-of-type {
    margin-bottom: 24px;
    color: var(--mainText);
  }

  p:last-of-type {
    line-height: 1.2;
  }

  @media screen and (min-width: 768px) {
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
  padding-bottom: 8px;
  width: 100%;
  height: 32px;

  font-family: var(--Montserrat);
  font-size: 18px;
  font-weight: 500;
  line-height: 21.94px;
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
    font-size: 18px;
    font-weight: 400;
    line-height: 27px;
    letter-spacing: 0em;
    color: #3f3f44;
  }

  &:focus {
    outline: none;
  }
`;

export const ErrorText = styled.p`
  position: absolute;
  top: 0;
  left: 0;
  transform: translateY(90px);
  color: var(--accentText);
`;
