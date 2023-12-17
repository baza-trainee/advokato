import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

import { flexBox } from '../../styles/mixins';

export const SocialListStyled = styled.ul`
  ${flexBox};
  justify-content: start;
  gap: 29px;
  margin-top: 17px;
  margin-bottom: 25px;
  padding-left: 5px;
`;

export const SocialLink = styled(Link)`
  svg {
    fill: var(--lightText);
    fill: ${({ currentFill }) => (currentFill ? currentFill : null)};
  }

  &:hover,
  &:focus {
    transition: fill var(--timing-function) var(--animation-duration),
      transform var(--timing-function) var(--animation-duration);

    svg {
      fill: var(--accentLink);
      fill: ${({ hoverFill }) => (hoverFill ? hoverFill : null)};
      transform: scale(1.05);
    }
  }
`;
