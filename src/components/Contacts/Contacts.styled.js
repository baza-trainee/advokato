import styled from '@emotion/styled';
import { fontSectionTitle, fontSectionText, device } from '../../styles/mixins';

export const SectionStyled = styled.section`
  @media screen and (${device.tablet}) {
    border-top: 76px solid var(--darkBackground);
    padding-top: 120px;
    padding-bottom: 108px;
  }

  @media screen and (${device.desktop}) {
    border-top: 88px solid var(--darkBackground);
    padding-top: 184px;
    padding-bottom: 132px;
  }
`;

export const Container = styled.div`
  margin: 0 auto;

  @media screen and (${device.tablet}) {
    max-width: calc(1024px - 80px * 2);
  }

  @media screen and (${device.desktop}) {
    max-width: calc(1440px - 160px * 2);
  }
`;

export const TitleStyled = styled.h2`
  margin-bottom: 40px;

  ${fontSectionTitle};
  color: var(--mainText);

  @media screen and (${device.tablet}) {
    margin-left: auto;
    margin-right: auto;
    width: 550px;
    height: 40px;
    font-size: 32px;
    line-height: calc(45 / 32);
  }

  @media screen and (${device.desktop}) {
    margin-left: 0;
    margin-right: 0;
    width: 660px;
    height: 48px;
    font-size: 40px;
    line-height: calc(56 / 40);
  }
`;

export const CenterWrp = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (${device.tablet}) {
    height: 348px;
  }

  @media screen and (${device.desktop}) {
    height: 600px;
  }

  p {
    ${fontSectionText};

    @media screen and (${device.tablet}) {
      min-height: 24px;
      font-size: 16px;
      line-height: 29px;
    }

    @media screen and (${device.desktop}) {
      min-height: 36px;
      font-size: 22px;
      line-height: 35.2px;
    }
  }
`;

export const LeftSide = styled.address`
  display: flex;
  flex-direction: column;
  font-style: normal;

  @media screen and (${device.tablet}) {
    gap: 28px;
  }

  @media screen and (${device.desktop}) {
    gap: 40px;
  }
`;
