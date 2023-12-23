import styled from '@emotion/styled';
import { fontDesktop } from '../../../../styles/mixins';

export const LabelStyled = styled.label`
  position: relative;

  p {
    height: 36px;
    ${fontDesktop};
  }

  p:first-of-type {
    margin-bottom: 8px;
    color: var(--mainText);
  }
`;

export const ButtonStyled = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 28px;
  width: 488px;
  height: 76px;

  ${fontDesktop};
  color: var(--mainText);
  stroke: var(--mainText);
  border: 1px solid var(--greyText);
  background-color: var(--lightBackground);
`;

export const OptionsItem = styled.li`
  padding: 20px 28px;
  width: 488px;
  height: 76px;

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

  &:not(:last-of-type) {
  }

  &.isChecked {
    background-color: var(--accentLink);
  }
`;
