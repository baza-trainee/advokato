import styled from '@emotion/styled';
import { fontDesktop, device } from '../../../../styles/mixins';

export const LabelStyled = styled.label`
  position: relative;

  p {
    ${fontDesktop};
    color: var(--mainText);

    @media screen and (${device.mobileL}) {
      margin-bottom: 4px;
      height: 32px;
      font-size: 18px;
      line-height: calc(29 / 18);
    }

    @media screen and (${device.desktop}) {
      margin-bottom: 8px;
      height: 28px;
      font-size: 22px;
      line-height: calc(35 / 22);
    }
  }

  &:last-of-type {
    @media screen and (${device.mobileL}) {
      margin-bottom: 4px;
    }

    @media screen and (${device.desktop}) {
      margin-bottom: -4px;
    }
  }
`;

export const ButtonStyled = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${fontDesktop};
  color: var(--mainText);
  stroke: var(--mainText);
  border: 1px solid var(--greyText);
  background-color: ${({ value }) =>
    value ? 'var(--accentLink)' : 'var(--lightBackground)'};

  svg {
    width: 24px;
    height: 24px;
  }

  @media screen and (${device.mobileL}) {
    padding: 18px 28px;
    width: 440px;
    height: 60px;
    font-size: 16px;
    line-height: calc(26 / 16);
  }

  @media screen and (${device.desktop}) {
    padding: 20px 28px;
    width: 488px;
    height: 76px;
    font-size: 22px;
    line-height: calc(35 / 22);
  }
`;

export const OptionsItem = styled.li`
  ${fontDesktop};
  color: var(--mainText);
  border: 1px solid var(--greyText);

  &:hover,
  &:focus {
    cursor: pointer;
    transition-property: background-color;
    transition-duration: var(--animation-duration);
    transition-timing-function: var(--timing-function);
    background-color: var(--accentLink);
  }

  &.isChecked {
    background-color: var(--accentLink);
  }

  @media screen and (${device.mobileL}) {
    padding: 18px 28px;
    width: 440px;
    height: 60px;
    font-size: 18px;
    line-height: calc(29 / 18);
  }

  @media screen and (${device.desktop}) {
    padding: 20px 28px;
    width: 488px;
    height: 76px;
    font-size: 22px;
    line-height: calc(35 / 22);
  }
`;
