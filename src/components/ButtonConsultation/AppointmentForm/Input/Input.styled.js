import styled from '@emotion/styled';
// import { fontDesktopMaxM, fontDesktopS } from '../../styles/mixins';

export const LabelStyled = styled.label`
  position: relative;
  width: 100%;
`;

export const InputStyled = styled.input`
  position: relative;
  padding: 5px 6px;
  width: 100%;
  height: 40px;

  /* ${fontDesktopMaxM}; */
  font-weight: 500;
  color: black;
  background-color: pink;
  border: none;

  border-radius: 0;
  &[type='search'] {
    -webkit-appearance: none;
  }

  &::placeholder {
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(5px, 6px);
    /* ${fontDesktopS}; */
    color: green;
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
