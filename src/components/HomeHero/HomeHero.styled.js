import styled from "@emotion/styled";
import { container, flexBox } from "../../styles/mixins";
import { index } from "./variables";
import { device } from "../../styles/mixins";

export const SectionStyled = styled.section`
  position: relative;
  top: calc((${index}) * -19);
  left: 0;
  overflow: hidden;
  height: 100vh;
  width: 100%;
  z-index: 0;
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    height: 30vh;
    width: 100%;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 20%,
      rgba(0, 0, 0, 1) 100%
    );
  }
  @media screen and (${device.tablet}) {
    top: -30vh;
    margin: 0;
    padding: 0;
    height: 115vh;
  }
`;
export const Container = styled.div`
  ${container};
  img {
    position: absolute;
    left: 0;
    display: block;
    height: 100%;
    width: 100%;
    object-fit: cover;
    z-index: -1;
    overflow: hidden;
  }
  img.sky {
    top: 0;
    left: 0;
    width: 170vw;
    height: 100%;
    transform: scale(3.5);
  }
  .buildings {
    opacity: 0;
    transform: scale(2) translateY(50vh);
  }
`;
export const HomeTextElement = styled.div`
  ${flexBox};
  flex-direction: column;
  margin: 35vh auto;
  width: 85%;
  font-weight: 700;
  color: var(--lightText);
  @media screen and (${device.laptop}) {
    margin: 10vh auto;
  }
`;
export const TitleText = styled.div`
${flexBox};
flex-wrap: wrap;
  font-family:Montserat;
  font-size:calc(${index}*2);
  font-weight:700;
  line-height:121.9px;
  margin-bottom:5vh;
  width:100%;
  @media screen and (${device.tablet}) {
      margin:15vh 0 5vh 0;
      font-size:50px;
    }
    @media screen and (${device.laptop}) {
      justify-content: flex-start;
      margin:25vh auto 5vh;
      font-size:100px;
  }
`;

export const TextSubtitle = styled.div`
  ${flexBox};
  flex-direction: column;
  gap: 10vh;
  white-space: wrap;
  width: 100%;
  opacity: 1;
  div {
    text-align: center;
    margin: 0 3vw 0 0;
    padding: 0 3vw;
    font-family: PTSans;
    font-size: calc(${index}*1.1);
    width: 100%;
    height: 108px;
    opacity: 1;
    @media screen and (${device.tablet}) {
      font-size: calc((${index}) * 1.2);
      text-align: justify;
      line-height: 35.2px;
      margin: 0;
      padding: 0;
      width: 45%;
    }
  }
  @media screen and (${device.tablet}) {
    margin: 0 auto;
    font-size: 22px;
  }
  @media screen and (${device.laptop}) {
    flex-direction: row;
  }
`;
