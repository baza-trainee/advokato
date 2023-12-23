import styled from '@emotion/styled';
import { fontSectionTitle } from '../../../styles/mixins';

export const DivStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .content {
    background-color: pink;
    color: red;
  }

  h2 {
    margin-bottom: 40px;
    height: 48px;
    min-width: 471px;

    ${fontSectionTitle};
    text-align: center;
    color: var(--mainText);
  }

  h2:last-of-type {
    margin-top: 60px;
  }
`;
