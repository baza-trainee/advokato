import styled from '@emotion/styled';
import { flexBox, fontSectionTitle } from '../../../styles/mixins';

export const DivStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: -4px;

  .react-calendar {
    width: 520px;
    border: 1px solid #969395;
  }

  .react-calendar__navigation {
    height: 76px;
    margin-bottom: 0;

    border: 1px solid #969395;
    background-color: #f3eff5;
  }

  .react-calendar__month-view__weekdays {
    height: 76px;

    border: 1px solid #969395;
    background-color: #f3eff5;
  }

  .react-calendar__month-view__days {
    height: calc(76px * 6);
  }

  .react-calendar__navigation__label__labelText.react-calendar__navigation__label__labelText--from {
    font-family: var(--Raleway);
    font-size: 32px;
    font-weight: 400;
    line-height: 44.8px;
    letter-spacing: 0em;
    text-transform: capitalize;
    color: var(--mainText);
  }

  .react-calendar__month-view__weekdays__weekday,
  .react-calendar__month-view__weekdays__weekday.react-calendar__month-view__weekdays__weekday--weekend {
    ${flexBox};

    font-family: var(--Raleway);
    font-size: 32px;
    font-weight: 400;
    line-height: 44.8px;
    letter-spacing: 0em;
    text-transform: uppercase;
    color: var(--mainText);

    abbr[title] {
      text-decoration: none;
    }
  }

  .react-calendar__tile.react-calendar__month-view__days__day,
  .react-calendar__tile.react-calendar__month-view__days__day.react-calendar__month-view__days__day--neighboringMonth {
    font-family: var(--Raleway);
    font-size: 32px;
    font-weight: 400;
    line-height: 44.8px;
    letter-spacing: 0em;
    color: var(--mainText);

    &[disabled] {
      background-color: var(--lightText);
      color: var(--greyText);

      &:hover,
      &:focus {
        cursor: auto;
        background-color: var(--lightText);
      }
    }

    &:hover,
    &:focus {
      cursor: pointer;
      transition-property: background-color;
      transition-duration: var(--animation-duration);
      transition-timing-function: var(--timing-function);
      background-color: var(--accentLink);
    }

    &.current {
      color: var(--accentText);
    }
  }

  .react-calendar__navigation__arrow.react-calendar__navigation__next-button {
    width: 40px;
  }
`;

export const MainTitle = styled.h2`
  margin-bottom: 20px;
  height: 48px;
  min-width: 471px;

  ${fontSectionTitle};
  text-align: center;
  color: var(--mainText);
`;

export const SecondaryTitle = styled.h2`
  margin-top: 24px;
  margin-bottom: 20px;
  height: 48px;
  min-width: 471px;

  ${fontSectionTitle};
  text-align: center;
  color: var(--mainText);
`;

export const TimeList = styled.ul`
  display: flex;
  gap: 40px;
  flex-wrap: wrap;
  width: 520px;
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
