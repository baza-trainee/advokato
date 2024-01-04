import styled from '@emotion/styled';
import { fontSectionTitle, fontSectionText, device } from '../../styles/mixins';

export const SectionStyled = styled.section`
  @media screen and (${device.mobileL}) {
    border-top: 68px solid var(--darkBackground);
    padding-top: 60px;
    padding-bottom: 60px;
  }

  @media screen and (${device.tablet}) {
    border-top: 76px solid var(--darkBackground);
    padding-top: 120px;
    padding-bottom: 132px;
  }

  @media screen and (${device.desktop}) {
    border-top: 88px solid var(--darkBackground);
    padding-top: 184px;
  }
`;

export const Container = styled.div`
  margin: 0 auto;

  @media screen and (${device.mobileL}) {
    max-width: calc(768px - 60px * 2);
  }

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

  @media screen and (${device.mobileL}) {
    margin-left: auto;
    margin-right: auto;
    width: 472px;
    height: 40px;
    font-size: 28px;
    line-height: calc(39 / 28);
  }

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

  @media screen and (${device.mobileL}) {
    flex-direction: column;
    /* height: 348px; */
  }

  @media screen and (${device.tablet}) {
    flex-direction: row;
    justify-content: space-between;
    height: 348px;
  }

  @media screen and (${device.desktop}) {
    height: 600px;
  }

  p {
    ${fontSectionText};

    @media screen and (${device.mobileL}) {
      min-height: 28px;
      font-size: 16px;
      line-height: 26px;
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

export const LeftSide = styled.address`
  display: flex;
  font-style: normal;

  @media screen and (${device.mobileL}) {
    flex-direction: row;
    justify-content: space-between;
    gap: 24px;
    margin-bottom: 44px;
  }

  @media screen and (${device.tablet}) {
    flex-direction: column;
    gap: 28px;
    margin-bottom: 0;
  }

  @media screen and (${device.desktop}) {
    gap: 40px;
  }
`;

export const ContactsWrp = styled.div`
  display: flex;

  @media screen and (${device.mobileL}) {
    flex-direction: column;
    gap: 24px;
  }

  @media screen and (${device.tablet}) {
    gap: 28px;
  }

  @media screen and (${device.desktop}) {
    gap: 40px;
  }

  p {
    ${fontSectionText};

    @media screen and (${device.mobileL}) {
      min-height: 28px;
      font-size: 16px;
      line-height: 26px;
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
