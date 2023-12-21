import styled from '@emotion/styled';
import { fontSectionText } from '../../../styles/mixins';

export const UlStyled = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 40px;
  max-width: 415px;
  list-style: square;
  margin-left: 20px;

  p {
    min-height: 36px;

    ${fontSectionText};
  }
`;
