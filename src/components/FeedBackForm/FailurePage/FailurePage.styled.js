import styled from '@emotion/styled';

import { flexBox, fontSectionTitle, device } from '../../../styles/mixins';

export const DivStyled = styled.div`
  ${flexBox};
  flex-direction: column;
	justify-content: flex-start;
  width: 220px;
  height: 280px;
  background-color: var(--lightBackground);
  padding: 45px 24px 0;

  @media screen and (${device.mobileL}) {
    padding: 48px 0 32px;
    width: 400px;
    height: 268px;
  }

  @media screen and (${device.tablet}) {
    padding-top: 84px;
    width: 600px;
    height: 336px;
  }

  h2 {
		font-family: var(--Montserrat);
    line-height: 140%;
    letter-spacing: 0;
    text-align: center;
    color: var(--mainText);
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 16px;
		

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
    font-weight: 400;
    letter-spacing: 0;
    color: var(--mainText);

    @media screen and (${device.mobileL}) {
      font-size: 16px;
      line-height: 26px;
    }

    @media screen and (${device.tablet}) {
      font-size: 22px;
      line-height: 35.2px;
    }
  }

  p:first-of-type {
    margin-bottom: 8px;
    font-size: 14px;

    @media screen and (${device.mobileL}) {
      font-size: 16px;
    }
    @media screen and (${device.tablet}) {
      font-size: 22px;
      line-height: 35.2px;
    }
  }

  p:last-of-type {
    margin-bottom: 28px;
    font-size: 12px;

    @media screen and (${device.mobileL}) {
      font-size: 16px;
    }
    @media screen and (${device.tablet}) {
      font-size: 22px;
      line-height: 35.2px;
    }
  }

  svg {
    fill: var(--accentText);
    width: 40px;
    height: 40px;
		

    @media screen and (${device.tablet}) {
      width: 60px;
      height: 60px;
    }
  }
`;
