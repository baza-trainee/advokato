import styled from '@emotion/styled';

export const LiStyled = styled.li`
  padding-top: 17px;
  padding-bottom: 11px;
  max-width: 548px;
  height: 64px;

  font-family: var(--Raleway);
  font-size: 32px;
  font-weight: 400;
  line-height: calc(45 / 32);
  word-spacing: -0.05ch;
  letter-spacing: 0em;

  color: var(--greyText);
  fill: var(--greyText);
  border-bottom: 1px solid #ffffff;

  p {
    display: flex;
    align-items: center;
    height: 36px;
  }

  span {
    margin-right: 32px;

    font-family: var(--Montserrat);
    font-size: 16px;
    line-height: calc(19 / 16);
    letter-spacing: 2px;
  }

  svg {
    margin: 5px;
    height: 13px;
  }

  &:hover,
  &:focus {
    cursor: pointer;
    transition: color var(--animation-duration) var(--timing-function);
    color: var(--lightText);
  }

  &.active {
    color: var(--lightText);
    stroke: var(--lightText);
  }
`;
