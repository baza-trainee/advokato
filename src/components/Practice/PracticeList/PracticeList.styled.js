import styled from '@emotion/styled';
import { device } from '../../../styles/mixins';

export const ListStyled = styled.ul`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
  }

  @media screen and (${device.tablet}) {
    gap: 20px;
    width: 420px;
  }

  @media screen and (${device.desktop}) {
    gap: 32px;
    width: 548px;
  }
`;
