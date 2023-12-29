import styled from '@emotion/styled';
import { fontDesktop } from '../../../../styles/mixins';

export const LabelStyled = styled.label`
  position: relative;
<<<<<<< HEAD
  margin-bottom: -4px;
=======
>>>>>>> dev

  p {
    margin-bottom: 8px;
    height: 36px;
    ${fontDesktop};
    color: var(--mainText);
  }
<<<<<<< HEAD
=======

  &:last-of-type {
    margin-bottom: -4px;
  }
>>>>>>> dev
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

  &.isChecked {
    background-color: var(--accentLink);
  }
`;
