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
    margin-bottom: 20px;
    height: 48px;
    min-width: 471px;

    ${fontSectionTitle};
    text-align: center;
    color: var(--mainText);
  }

  p {
    font-family: var(--PTSans);
    font-size: 22px;
    font-weight: 400;
    line-height: 35.2px;
    letter-spacing: 0em;
    color: var(--mainText);
  }

  p:first-of-type {
    margin-bottom: 8px;
  }

  p:last-of-type {
    margin-bottom: 28px;
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
