import styled from '@emotion/styled';
import { fontSectionTitle, device } from '../../../styles/mixins';

export const DivStyled = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  background-color: var(--lightBackground);

  @media screen and (${device.mobileL}) {
    padding-top: 48px;
    padding-bottom: 32px;
    width: 400px;
  }

  @media screen and (${device.tablet}) {
    padding-top: 84px;
    width: 600px;
  }

  h2 {
    ${fontSectionTitle};
    text-align: center;
    color: var(--mainText);

    @media screen and (${device.mobileL}) {
      margin-bottom: 20px;
      height: 36px;
      min-width: 120px;

      font-size: 24px;
      line-height: calc(34 / 24);
    }

    @media screen and (${device.tablet}) {
      height: 48px;
      min-width: 180px;

      font-size: 40px;
      line-height: calc(56 / 40);
    }
  }

  p {
    font-family: var(--PTSans);
    font-size: 22px;
    font-weight: 400;
    line-height: 35.2px;
    letter-spacing: 0em;
    color: var(--mainText);
  }

  p:first-of-type {
    margin-bottom: 8px;
  }

  p:last-of-type {
    margin-bottom: 28px;
  }

  svg {
    fill: var(--trueText);
    /* margin-bottom: 32px; */
  }
`;
