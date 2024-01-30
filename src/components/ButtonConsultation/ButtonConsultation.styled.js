import styled from '@emotion/styled';
import { flexBox, secondaryButton } from '../../styles/mixins';

export const ButtonStyled = styled.button`
  ${secondaryButton};
  ${flexBox};
  gap: 7px;
  width: 260px;
  height: 36px;
  padding: 8px 12px;
  background: none;
  border: 1px solid var(--reviewText);
  border-radius: 48px;


  &.animated {
    animation: fadeInOut 4s infinite;
  }

  &:hover {
    animation: none;
  }
	
`;






