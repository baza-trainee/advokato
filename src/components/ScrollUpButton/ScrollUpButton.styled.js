import styled from '@emotion/styled';
import { Icon } from '../Icon';
import { device } from '../../styles/mixins';

export const IconClose = styled(Icon)`
  position: fixed;
  z-index: 150;
  right: 20px;
  bottom: 48px;

  width: 32px;
  height: 32px;

  cursor: pointer;

  @media screen and (min-width: 768px) {
    right: 16px;
    bottom: 56px;
  }

  @media screen and (${device.tablet}) {
    right: 40px;
    bottom: 88px;

    width: 80px;
    height: 80px;
  }
`;
