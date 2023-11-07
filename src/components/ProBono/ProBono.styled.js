import styled from "@emotion/styled";
import {
  container,
  flexBox,
  fontSectionText,
  fontSectionTitle,
} from "../../styles/mixins";

export const SectionStyled = styled.section`
  position: relative;
  top: -30vh;
  background: var(--darkBackground);
  color: var(--lightText);
  width: 100%;
  height: 1796px;
  padding: 132px 0 132px 0;
`;

export const Container = styled.div`
  ${container};
`;

export const BlockWrapper = styled.div`
  ${flexBox};
  gap: 10%;
  opacity: ${(props) => (props.second ? 0 : 1)};
  transition: 0.1s;
`;

export const LeftSide = styled.div`
  width: 50%;
  img {
    width: 548px;
    height: 700px;
  }
`;

export const RightSide = styled.div`
  width: 40%;
  img {
    width: 456px;
    height: 700px;
  }
  ${flexBox};
  flex-direction: column;
  gap: 10%;
  opacity: ${(props) => (props.second ? 0 : 1)};
`;

export const BonoHeader = styled.h1`
  ${fontSectionTitle};
`;

export const BonoText = styled.div`
  ${fontSectionText}
`;
