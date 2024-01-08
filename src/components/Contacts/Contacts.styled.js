import styled from '@emotion/styled';
import { fontSectionTitle, fontSectionText, device } from '../../styles/mixins';

export const SectionStyled = styled.section`
  min-height: calc(100dvh - 176px);
  border-top: 48px solid var(--darkBackground);
  padding-top: 28px;
  padding-bottom: calc(34px + 24px);

  @media screen and (${device.mobileL}) {
    min-height: calc(100dvh - 148px);
    border-top: 68px solid var(--darkBackground);
    padding-top: 60px;
    padding-bottom: calc(60px + 24px);
  }

  @media screen and (${device.tablet}) {
    min-height: calc(100dvh - 156px);
    border-top: 76px solid var(--darkBackground);
    padding-top: 120px;
    padding-bottom: calc(132px + 24px);
  }

  @media screen and (${device.desktop}) {
    min-height: calc(100dvh - 272px);
    border-top: 88px solid var(--darkBackground);
    padding-top: 184px;
  }
`;

export const Container = styled.div`
  margin: 0 auto;
  padding-left: 24px;
  padding-right: 24px;
  max-width: 500px;

  @media screen and (${device.mobileL}) {
    max-width: calc(768px - 60px * 2);
    padding-left: 0;
    padding-right: 0;
  }

  @media screen and (${device.tablet}) {
    max-width: calc(1024px - 80px * 2);
  }

  @media screen and (${device.desktop}) {
    max-width: calc(1440px - 160px * 2);
  }
`;

export const TitleStyled = styled.h2`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  width: 232px;
  height: 56px;

  ${fontSectionTitle};
  font-size: 20px;
  line-height: calc(28 / 20);
  text-align: center;
  color: var(--mainText);

  @media screen and (${device.mobileL}) {
    margin-bottom: 40px;
    width: 472px;
    height: 40px;
    font-size: 28px;
    line-height: calc(39 / 28);
  }

  @media screen and (${device.tablet}) {
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
  flex-direction: column;
  align-items: center;

  @media screen and (${device.mobileL}) {
    flex-direction: column;
    align-items: normal;
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
  flex-direction: column;
  gap: 12px;
  font-style: normal;

  @media screen and (${device.mobileL}) {
    flex-direction: row;
    justify-content: space-between;
    gap: 24px;
    margin-bottom: 44px;
  }

  @media screen and (${device.tablet}) {
    flex-direction: column;
    justify-content: normal;
    gap: 28px;
    margin-bottom: 0;
  }

  @media screen and (${device.desktop}) {
    gap: 40px;
  }
`;

export const ContactsWrp = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 20px;

  @media screen and (${device.mobileL}) {
    flex-direction: column;
    gap: 24px;
    margin-bottom: 0;
  }

  @media screen and (${device.tablet}) {
    gap: 28px;
  }

  @media screen and (${device.desktop}) {
    gap: 40px;
  }

  p {
    min-height: 24px;

    ${fontSectionText};
    font-size: 14px;
    line-height: 22.4px;

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
