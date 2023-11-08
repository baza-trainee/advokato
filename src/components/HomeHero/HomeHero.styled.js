import styled from "@emotion/styled";
import {
  container,
  flexBox,
  fontHeroTitle,
  fontSectionText,
} from "../../styles/mixins";

export const SectionStyled = styled.section`
  position: relative;
  top: -140px;
  left: 0;
  overflow: hidden;
  height: 1340px;
  img {
    position: absolute;
    left: 0;
    display: block;
    height: 100vh;
    width: 100%;
    object-fit: cover;
    overflow: hidden;
  }
`;

export const Container = styled.div`
  ${container};
`;

export const HomeTextElement = styled.div`
  ${flexBox};
  flex-direction: column;
  width: 100%;
  color: var(--lightText);
`;

export const TitleText = styled.div`
  ${fontHeroTitle};
  ${flexBox};
  flex-wrap: wrap;
  width: 100%;
  justify-content: flex-start;
  position: relative;
  top: 300px;
`;

export const TextSubtitle = styled.div`
  ${fontSectionText};
  ${flexBox};
  gap: 140px;
  white-space: wrap;
  width: 100%;
  opacity: 1;
  div {
    width: 500px;
    height: 108px;
    opacity: 1;
    text-align: justify;
  }
  position: relative;
  top: 390px;
`;
