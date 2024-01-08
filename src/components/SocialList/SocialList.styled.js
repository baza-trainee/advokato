import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

import { flexBox, device } from '../../styles/mixins';

export const SocialListStyled = styled.ul`
  ${flexBox};
  justify-content: start;
  gap: 16px;

  @media screen and (${device.tablet}) {
    gap: 20px;
  }

  @media screen and (${device.desktop}) {
    gap: 24px;
  }
`;

export const ItemStyled = styled.li`
  ${flexBox};
  width: 24px;
  height: 24px;
  order: ${({ position }) => position};

  @media screen and (${device.desktop}) {
    width: 40px;
    height: 40px;
  }
`;

export const SocialLink = styled(Link)`
  ${flexBox};

  svg {
    fill: var(--lightText);
    fill: ${({ currentfill }) => (currentfill ? currentfill : null)};

    width: 24px;
    height: 24px;

    @media screen and (${device.desktop}) {
      width: 30px;
      height: 30px;
    }
  }

  &:hover,
  &:focus {
    transition: fill var(--timing-function) var(--animation-duration),
      transform var(--timing-function) var(--animation-duration);

    svg {
      fill: var(--accentLink);
      fill: ${({ hoverfill }) => (hoverfill ? hoverfill : null)};
      transform: scale(1.05);
    }
  }
`;
