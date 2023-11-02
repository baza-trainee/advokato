import styled from "@emotion/styled";
import { flexBox } from "../../styles/mixins";
import { index } from "../HomeHero/HomeHero.styled";

export const HeaderStyled = styled.header`
  ${flexBox};
  padding: 0 3vw;
  justify-content: space-around;
  flex-wrap: wrap;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 20;
  background-color: #0b0c0c4d;
  color: #fefefe;
  height: calc((${index}) * 19);
  font-family: Montserrat;
  @media screen and (min-width: 768px) {
    height: calc((${index}) * 5.4);
  }
`;
export const UlStyled = styled.ul`
  display: none;
  @media screen and (min-width: 1280px) {
    ${flexBox};
    gap: 3vw;
    height: 50px;
    width: 600px;
    a {
      color: #fefefe;
      font-weight: 400;
      font-size: calc(${index}*.8);
      line-height: 32.4px;
    }
  }
`;
export const HamburgerMenu = styled.div`
  display: block;
  height: 10vh;
  width: 50px;
  position: relative;
  top: 5vh;
  transition-duration: 1s;
  cursor: pointer;
  @media screen and (min-width: 1280px) {
    display: none;
  }
  span {
    height: 5px;
    width: 40px;
    background-color: #fffbfe;
    border-radius: 20px;
    position: absolute;
    top: calc(var(--index) * 2.5);
    transition-duration: 0.25s;
    transition-delay: 0.25s;
  }
  span:before {
    content: "";
    left: 0;
    position: absolute;
    top: -10px;
    height: 5px;
    width: 40px;
    background-color: #fffbfe;
    border-radius: 20px;
    transition-duration: 0.25s;
    transition: transform 0.25s, top 0.25s 0.25s;
  }
  span:after {
    content: "";
    left: 0;
    position: absolute;
    top: 10px;
    height: 5px;
    width: 40px;
    background-color: #fffbfe;
    border-radius: 20px;
    transition-duration: 0.25s;
    transition: transform 0.25s, top 0.25s 0.25s;
  }
  span.open {
    transition-duration: 0.1s;
    transition-delay: 0.3s;
    background: transparent;
  }
  span.open:before {
    transition: top 0.25s, transform 0.25s 0.25s;
    transform: rotateZ(-45deg);
    top: 0;
  }
  span.open:after {
    transition: top 0.4s, transform 0.25s 0.25s;
    transform: rotateZ(45deg);
    top: 0;
  }
`;
export const LangButton = styled.button`
  border: 1px solid #f3eff5;
  border-radius: 8px;
  background-color: inherit;
  font-family: Raleway;
  font-size: 18px;
  font-weight: 400;
  line-height: 27px;
  cursor: pointer;
  color: #fefefe;
  padding: 16px;
`;
export const ConsultElement = styled.div`
  width: 288px;
  button,
  span {
    color: #fefefe;
    font-family: Montserrat;
    font-weight: 500;
    font-size: 14px;
    line-height: 17.07px;
    cursor: pointer;
  }
`;
export const ConsultButton = styled.button`
  border: 1px solid #f3eff5;
  border-radius: 48px;
  background: none;
  padding: 16px 24px;
  width: 288px;
`;
export const PhonesDiv = styled.div`
  ${flexBox};
  max-width: 100%;
  justify-content: space-evenly;
  margin: 1vh auto 0;
`;
