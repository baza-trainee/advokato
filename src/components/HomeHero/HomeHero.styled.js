import styled from '@emotion/styled';
import { container, fontHeroTitle, fontSectionText } from '../../styles/mixins';
import bgImage from '../../assets/images/homeHero-section/hero-bg.jpg';

export const SectionStyled = styled.section`
  height: 100vh;

  background-image: url(${bgImage});
  background-size: cover;
`;

export const Container = styled.div`
  ${container};
  padding-top: calc(132px + 140px);
  max-width: 1440px;
  
  div {
    display: flex;
    justify-content: space-between;
  }
`;

export const MainTitleStyled = styled.h1`
  width: 820px;
  height: 244px;
  margin-bottom: 68px;

  ${fontHeroTitle};
  color: var(--lightText);
`;

export const SubtitleStyled = styled.h2`
  width: 500px;
  height: 108px;
  :last-of-type {
    width: 480px;
  }
  ${fontSectionText};
  color: var(--lightText);
`;
