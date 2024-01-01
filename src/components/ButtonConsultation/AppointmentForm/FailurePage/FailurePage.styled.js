import styled from '@emotion/styled';

import {
  flexBox,
  fontSectionTitle,
  secondaryButton,
  device,
} from '../../../../styles/mixins';

export const DivStyled = styled.div`
  ${flexBox};
  flex-direction: column;

  h2 {
    ${fontSectionTitle};
    text-align: center;
    color: var(--mainText);

    @media screen and (${device.tablet}) {
      margin-bottom: 24px;
      height: 40px;
      min-width: 136px;

      font-size: 28px;
      line-height: calc(39 / 28);
    }

    @media screen and (${device.desktop}) {
      margin-bottom: 20px;
      height: 48px;
      min-width: 180px;

      font-size: 40px;
      line-height: calc(56 / 40);
    }
  }

  p {
    font-family: var(--PTSans);
    font-weight: 400;
    letter-spacing: 0em;
    color: var(--mainText);

    @media screen and (${device.tablet}) {
      font-size: 18px;
      line-height: 28.8px;
    }

    @media screen and (${device.desktop}) {
      font-size: 22px;
      line-height: 35.2px;
    }
  }

  p:first-of-type {
    margin-bottom: 8px;
  }

  p:last-of-type {
    @media screen and (${device.tablet}) {
      margin-bottom: 24px;
    }

    @media screen and (${device.desktop}) {
      margin-bottom: 28px;
    }
  }

  button {
    ${secondaryButton};

    &:hover,
    &:focus {
      border: 1px solid var(--darkBackground);
    }

    @media screen and (${device.tablet}) {
      width: 288px;
      height: 52px;
    }
  }
`;
