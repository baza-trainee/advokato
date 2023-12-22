import styled from '@emotion/styled';
import { flexBox } from '../../styles/mixins';

export const ModalDiv = styled.div`
  ${flexBox};
  position: fixed;
  top: 0;
  left: 0;
  overflow: auto;
  z-index: 200;
  width: 100vw;
  height: 100dvh;

  background: linear-gradient(
    168deg,
    #0b0c0cf2 26%,
    #263f4ed1 58%,
    #333333c7 81%
  );
  backdrop-filter: blur(2px);

  div {
    position: relative;
  }

  align-items: ${({ align }) => {
    if (align === 'center') {
      return 'center';
    } else {
      return align;
    }
  }};
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 400;
  transform: translate(-23px, 23px);

  width: 30px;
  height: 30px;

  display: flex;
  justify-content: center;
  align-items: center;

  stroke: var(--darkBackground);
  border: none;
  cursor: pointer;
  background-color: inherit;
`;
