import styled from '@emotion/styled';
import { fontSectionTitle, device } from '../../styles/mixins';

export const SectionStyled = styled.section`
  background-color: var(--lightBackground);
`;

export const Container = styled.div`
  margin: 0 auto;
  padding: 28px 24px;
  max-width: 350px;

  @media screen and (min-width: 600px) {
    max-width: 100%;
  }

  @media screen and (${device.mobileL}) {
    padding: 60px 60px;
    max-width: 768px;
  }

  @media screen and (${device.tablet}) {
    padding: 120px 80px;
    max-width: 1024px;
  }

  @media screen and (${device.desktop}) {
    padding: 132px 160px;
    max-width: 1440px;
  }
`;

export const TitleStyled = styled.h2`
  margin-bottom: 20px;
  width: 272px;

  ${fontSectionTitle};
  font-size: 20px;
  line-height: calc(28 / 20);
  color: var(--mainText);

  @media screen and (min-width: 600px) {
    width: 372px;
  }

  @media screen and (${device.mobileL}) {
    margin-bottom: 24px;
    width: 574px;
    font-size: 24px;
    line-height: calc(34 / 24);
  }

  @media screen and (${device.tablet}) {
    margin-bottom: 40px;
    width: 756px;

    font-size: 32px;
    line-height: calc(45 / 32);
  }

  @media screen and (${device.desktop}) {
    width: 944px;

    font-size: 40px;
    line-height: calc(56 / 40);
  }
`;
