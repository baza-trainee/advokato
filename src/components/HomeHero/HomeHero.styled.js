import styled from "@emotion/styled";
import {
  container,
  flexBox,
  fontHeroTitle,
  fontSectionText,
} from "../../styles/mixins";

export const SectionStyled = styled.section`
  position: relative;
  left: 0;
  overflow: hidden;
  z-index: 0;
  top: -140px;
  margin: 0;
  padding: 0;
  height: 1170px;
`;

export const Container = styled.div`
  ${container};
  img {
    position: absolute;
    left: 0;
    top: -10vh;
    display: block;
    height: 100%;
    width: 100%;
    object-fit: cover;
    z-index: -1;
    overflow: hidden;
  }
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
  top: 312px;
`;

export const TextSubtitle = styled.div`
  ${fontSectionText};
  ${flexBox};
  flex-direction: column;
  gap: 140px;
  white-space: wrap;
  width: 100%;
  opacity: 1;
  div {
    text-align: center;
    width: 500px;
    height: 108px;
    opacity: 1;
    width: 500px;
    text-align: justify;
  }
  flex-direction: row;
  position: relative;
  top: 400px;
`;
