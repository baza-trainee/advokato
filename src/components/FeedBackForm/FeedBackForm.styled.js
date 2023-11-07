import styled from "@emotion/styled";
import {
  container,
  device,
  flexBox,
  fontSectionTitle,
  secondaryButton,
} from "../../styles/mixins";

export const Container = styled.div`
  ${container};
  position: relative;
  top: -30vh;
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
      content: "";
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
`;
