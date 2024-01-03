import styled from '@emotion/styled';
import { fontSectionTitle, device } from '../../styles/mixins';

export const SectionStyled = styled.section`
  background-color: var(--lightBackground);
`;

export const Container = styled.div`
  margin: 0 auto;

  @media screen and (${device.tablet}) {
    padding: 120px 80px;
  }

  @media screen and (${device.desktop}) {
    padding: 132px 160px;
    max-width: 1440px;
  }
`;

export const TitleStyled = styled.h2`
  margin-bottom: 40px;

  ${fontSectionTitle};
  color: var(--mainText);

  @media screen and (${device.tablet}) {
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
