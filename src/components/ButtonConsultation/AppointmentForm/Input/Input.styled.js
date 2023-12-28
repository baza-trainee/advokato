import styled from '@emotion/styled';
import { fontDesktop } from '../../../../styles/mixins';

export const LabelStyled = styled.label`
  position: relative;
  width: 440px;

  p {
    height: 36px;
    ${fontDesktop};
  }

  p:first-of-type {
    margin-bottom: 4px;
    color: var(--mainText);
  }
`;

export const InputStyled = styled.input`
  position: relative;
  padding: 15px 16px;
  width: 100%;
  height: 56px;

  font-family: var(--Montserrat);
  font-size: 18px;
  font-weight: 500;
  line-height: 21.94px;
  letter-spacing: 0em;
  color: var(--mainText);
  background-color: inherit;
  border: 1px solid var(--greyText);

  border-color: ${({ isValid, error, touch }) => {
    if (!error && touch) {
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
    font-size: 18px;
    font-weight: 500;
    line-height: 21.94px;
    letter-spacing: 0em;
    color: var(--greyText);
  }

  &:focus {
    outline: 2px solid var(--mainText);
  }
`;

export const ErrorText = styled.p`
  position: absolute;
  top: 0;
  left: 0;
  transform: translateY(95px);

  color: var(--accentText);
`;
