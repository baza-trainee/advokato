import styled from '@emotion/styled';
import { fontSectionTitle } from '../../../../styles/mixins';

export const DivStyled = styled.div`
  h2 {
    margin-bottom: 60px;
    height: 48px;
    min-width: 471px;

    ${fontSectionTitle};
    text-align: center;
    color: var(--mainText);
  }

  p {
    font-family: var(--Raleway);
    font-size: 32px;
    font-weight: 400;
    line-height: 44.8px;
    letter-spacing: 0em;
    text-align: center;
    color: var(--mainText);
  }

  p:first-of-type {
    margin-bottom: 24px;
  }

  p:last-of-type {
    margin-bottom: 60px;
  }

  svg {
    margin: 0 auto;
    fill: var(--trueText);
  }
`;
