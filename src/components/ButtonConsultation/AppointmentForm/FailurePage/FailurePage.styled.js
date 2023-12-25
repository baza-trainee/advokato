import styled from '@emotion/styled';

import {
  flexBox,
  fontSectionTitle,
  secondaryButton,
} from '../../../../styles/mixins';

export const DivStyled = styled.div`
  ${flexBox};
  flex-direction: column;

  h2 {
    margin-bottom: 60px;
    height: 48px;
    min-width: 471px;

    ${fontSectionTitle};
    color: var(--mainText);
  }

  p {
    font-family: var(--Raleway);
    font-size: 32px;
    font-weight: 400;
    line-height: 44.8px;
    letter-spacing: 0em;
    color: var(--mainText);
  }

  p:first-of-type {
    margin-bottom: 24px;
  }

  p:last-of-type {
    margin-bottom: 60px;
  }

  button {
    ${secondaryButton};
    width: 288px;
    height: 52px;

    &:hover,
    &:focus {
      border: 1px solid var(--darkBackground);
    }
  }
`;
