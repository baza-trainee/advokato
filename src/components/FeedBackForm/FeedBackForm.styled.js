import styled from '@emotion/styled';
import {
  container,
  device,
  flexBox,
  fontSectionTitle,
  fontDesktop,
  secondaryButton,
} from '../../styles/mixins';

export const Container = styled.div`
  ${container};

  @media screen and (${device.desktop}) {
    padding-top: 132px;
    padding-bottom: 132px;
  }
`;

export const TitleStyled = styled.h2`
  @media screen and (${device.desktop}) {
    margin-bottom: 32px;
    ${fontSectionTitle};
  }
`;

export const Email = styled.h2`
  @media screen and (${device.desktop}) {
    margin-bottom: 80px;
    position: relative;
    ${fontSectionTitle};

    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 5px;
      width: 504px;
      height: 1px;
      background-color: var(--mainText);
    }
  }
`;

export const ButtonStyled = styled.button`
  ${flexBox};
  gap: 12px;
  ${secondaryButton};
  border: 1px solid #1c1c21;
  transition: color var(--timing-function) var(--animation-duration),
    border var(--timing-function) var(--animation-duration),
    background-color var(--timing-function) var(--animation-duration);

  &:hover,
  &:focus {
    color: var(--mainText);
    background-color: transparent;

    transition: fill var(--timing-function) var(--animation-duration);

    svg {
      fill: var(--mainText);
    }
  }

  &:active {
    color: var(--mainText);
    background-color: #e1e1e1;
  }

  &[disabled] {
    svg {
      fill: var(--greyText);
    }
  }

  svg {
    transition: fill var(--timing-function) var(--animation-duration);
    fill: currentColor;
  }
`;

export const InputWraper = styled.div`
  width: 844px;
  display: flex;
  gap: 40px;
`;

export const LabelWraper = styled.div`
  width: 844px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin-bottom: 23px;
  ${fontDesktop};
`;

export const Input = styled.input`
  margin-top: 24px;
  padding: 0 0 18px 0;
  background-color: inherit;
  border: none;
  border-bottom: 1px solid #1c1c21;
  font-family: 'PT Sans', sans-serif;
  font-size: 18px;
  line-height: calc(27 / 18);

  &::placeholder {
    color: var(--greyText);
    font-family: 'Raleway', sans-serif;
  }

  &:focus {
    outline: none;
  }
`;

export const ErrorsStyled = styled.p`
  margin-top: 5px;
  height: 20px;
  color: var(--accentText);
  ${fontDesktop};
  font-size: 16px;
  line-height: calc(20 / 16);
`;
