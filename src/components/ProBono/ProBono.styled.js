import styled from "@emotion/styled";
import { container, flexBox, fontSectionText, fontSectionTitle } from "../../styles/mixins";
import {index} from "../HomeHero/variables/index"

export const SectionStyled = styled.section`
background:var(--darkBackground);
color:var(--lightText);
height:1796px;
width:98.7vw;
padding: 132px 160px;;
`
export const Container = styled.div`
  ${container};
  ${flexBox};
  flex-direction: column;
  width:100%;
  `
export const BlockWrapper = styled.div`
${flexBox};
gap:10%;
`
  export const LeftSide = styled.div`
   width:50%;

  
  `
  export const RightSide = styled.div`
  width:50%;
  `
export const BonoHeader = styled.h1`
${fontSectionTitle};
line-height: 56px;  
`

export const BonoText = styled.p`
${fontSectionText}
padding-bottom:116px ;
`
export const BonoImg = styled.div`
width:100%;
   img{
    width:456px;
    height:700px;
   }
`
