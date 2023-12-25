import styled from '@emotion/styled';
import { flexBox, fontSectionTitle } from '../../../styles/mixins';

export const DivStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .content {
    background-color: pink;
    color: red;
  }
`;

export const MainTitle = styled.h2`
  margin-bottom: 40px;
  height: 48px;
  min-width: 471px;

  ${fontSectionTitle};
  text-align: center;
  color: var(--mainText);
`;

export const SecondaryTitle = styled.h2`
  margin-top: 60px;
  margin-bottom: 40px;
  height: 48px;
  min-width: 471px;

  ${fontSectionTitle};
  text-align: center;
  color: var(--mainText);
`;

export const TimeList = styled.ul`
  display: flex;
  gap: 47px;
  flex-wrap: wrap;
  width: 692px;
  margin-bottom: calc(72px - 52px);

  li {
    ${flexBox};
    width: 100px;
    height: 36px;

    font-family: var(--Raleway);
    font-size: 32px;
    font-weight: 400;
    line-height: 44.8px;
    letter-spacing: 0em;
    color: var(--mainText);

    &:hover,
    &:focus {
      cursor: pointer;
      transition-property: background-color;
      transition-duration: var(--animation-duration);
      transition-timing-function: var(--timing-function);

      background-color: var(--accentLink);
    }
  }

  li.currentTime {
    color: var(--accentText);
  }
`;
