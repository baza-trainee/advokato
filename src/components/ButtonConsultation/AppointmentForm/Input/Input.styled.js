import styled from '@emotion/styled';
import { fontDesktop } from '../../../../styles/mixins';

export const LabelStyled = styled.label`
  position: relative;
  width: 100%;

  p {
    margin-bottom: 8px;
    height: 36px;

    ${fontDesktop};
    color: var(--mainText);
  }
`;

export const InputStyled = styled.input`
  position: relative;
  padding: 15px 16px;
  width: 100%;
  height: 40px;

  color: black;
  background-color: pink;
  border: 1px solid var(--greyText);

  border-radius: 0;
  &[type='search'] {
    -webkit-appearance: none;
  }

  &::placeholder {
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(5px, 6px);
    color: var(--greyText);
  }

  &:focus {
    outline: 2px solid yellow;
  }
`;

export const ErrorText = styled.p`
  position: absolute;
  top: 0;
  left: 0;
  transform: translateY(40px);

  font-size: 12px;
  line-height: 1.3;
  color: red;
`;
