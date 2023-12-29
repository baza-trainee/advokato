import styled from '@emotion/styled';
import { device } from '../../../styles/mixins';

export const LiStyled = styled.li`
  color: var(--greyText);
  border-bottom: 1px solid #ffffff;

  &.active {
    color: var(--lightText);
  }

  &:hover,
  &:focus {
    cursor: pointer;
    transition: color var(--animation-duration) var(--timing-function);
    color: var(--lightText);
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (${device.tablet}) {
    padding-top: 16px;
    padding-bottom: 16px;
    max-width: 420px;
    height: 60px;
  }

  @media screen and (${device.desktop}) {
    padding-top: 17px;
    padding-bottom: 11px;
    max-width: 548px;
    height: 64px;
  }
`;

export const SpecializationStyled = styled.p`
  display: flex;
  align-items: center;

  font-family: var(--Raleway);
  font-weight: 400;
  word-spacing: -0.05ch;
  letter-spacing: 0em;

  @media screen and (min-width: 768px) {
  }

  @media screen and (${device.tablet}) {
    height: 28px;
    font-size: 22px;
    line-height: calc(31 / 22);
  }

  @media screen and (${device.desktop}) {
    height: 36px;
    font-size: 32px;
    line-height: calc(45 / 32);
  }
`;
