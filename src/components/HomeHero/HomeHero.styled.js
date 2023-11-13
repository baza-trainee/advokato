import styled from '@emotion/styled';
import {
  container,
  flexBox,
  fontHeroTitle,
  fontSectionText,
} from '../../styles/mixins';
import bgImage from '../../assets/images/homeHero-section/hero-bg.jpg';

export const SectionStyled = styled.section`
  height: 100vh;
  
  background-image: url(${bgImage});
  background-size: cover;
`;

export const Container = styled.div`
  ${container};
  div {
    display: flex;
    justify-content: space-between;
  }
`;

export const MainTitleStyled = styled.h1`
  ${flexBox};
  justify-content: flex-start;
  flex-wrap: wrap;
  padding-top: calc(132px + 140px);
  margin:0 auto;
  margin-bottom: 68px;

  ${fontHeroTitle};
  color: var(--lightText);
`;

export const SubtitleStyled = styled.h2`
  width: 500px;
  height: 108px;

  ${fontSectionText};
  color: var(--lightText);
`;
