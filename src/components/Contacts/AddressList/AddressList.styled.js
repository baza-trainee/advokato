import styled from '@emotion/styled';
import { fontSectionText, device } from '../../../styles/mixins';

export const UlStyled = styled.ul`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  list-style: square;

  @media screen and (${device.mobileL}) {
    gap: 24px;
    max-width: 328px;
  }

  @media screen and (${device.tablet}) {
    gap: 28px;
    max-width: 332px;
  }

  @media screen and (${device.desktop}) {
    gap: 40px;
    max-width: 415px;
  }
`;

export const ListItem = styled.li`
  order: ${({ position }) => position};

  p {
    ${fontSectionText};

    @media screen and (${device.mobileL}) {
      min-height: 28px;
      font-size: 16px;
      line-height: 29px;
    }

    @media screen and (${device.tablet}) {
      min-height: 24px;
    }

    @media screen and (${device.desktop}) {
      min-height: 36px;
      font-size: 22px;
      line-height: 35.2px;
    }
  }
`;
