import styled from '@emotion/styled';
import { flexBox, secondaryButton } from '../../styles/mixins';

export const ButtonStyled = styled.button`
  ${secondaryButton};
  ${flexBox};
  gap: 10px;
  width: 288px;
  height: 52px;
  padding: 16px 24px;
  background: none;
  border: 1px solid var(--reviewText);
  border-radius: 48px;
`;
