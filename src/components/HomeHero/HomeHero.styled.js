import styled from '@emotion/styled';
import { container, flexBox } from '../../styles/mixins';

export const index = ()=>{
  return' 1vw + 1vh '
}

export const SectionStyled = styled.section`
height:100vh;
width:100%;
position: relative;
top:calc((${index})*-19);  
left: 0;
overflow: hidden;
z-index: 0;
  &::after{
    content:"";
    height: 30vh;
    position: absolute;
    bottom:0;
    left: 0;
    width: 100%;
    background: linear-gradient(180deg ,rgba(0,0,0,0) 20%, rgba(0,0,0,1) 100%);
}
@media screen and (min-width: 768px) {
  top: -30vh;  
  height: 115vh;
  margin:0;
  padding:0;
}
`;
export const Container = styled.div`
  ${container};
  img{
  position: absolute;
  display: block;
  // top: -20% ;
  left: 0;
  height:100%;
  width:100%;
  object-fit: cover;
  z-index:-1;
  overflow:hidden;
};
img.sky{
  transform: scale(3.5);
  width: 170vw;
  height:100%;
  left: 0;
  top: 0;
}
.buildings{
  opacity: 0;
  transform: scale(2) translateY(50vh);
}
`;
export const HomeTextElement = styled.div`
${flexBox};
flex-direction: column;
color: white;
font-weight: 700;
width: 85%;
margin:35vh auto;
@media screen and (min-width: 1280px) {
  margin:10vh auto;
}
`
export const TitleText = styled.div`
${flexBox};
flex-wrap: wrap;
  font-family:Montserat;
  font-size:calc(${index}*2);
  font-weight:700;
  Line height:121.9px;
   width:100%;
   margin-bottom:5vh;
  @media screen and (min-width: 768px) {
margin:15vh 0 5vh 0;
      font-size:50px;
    }
    @media screen and (min-width: 1280px) {
      justify-content: flex-start;
      margin:25vh auto 5vh;
    font-size:100px;
  }
`


export const TextSubtitle = styled.div`
${flexBox};
width: 100%;
opacity:1;
flex-direction:column;
white-space:wrap;
gap:10vh;
div{
  opacity:1;
  padding:0 3vw;
  font-family:PTSans;
  // font-size:20px;
  font-size:calc(${index}*1.1);
  width:100%;
  height:108px;
  margin:0 3vw 0 0;
  text-align:center;
  @media screen and (min-width: 768px) {
    // font-size:22px;
    width:45%;
    padding:0;
    font-size:calc((${index})*1.2);
    margin:0;
    text-align:justify;
    line-height:35.2px;
  }
}
@media screen and (min-width: 768px) {
  font-size:22px;
  margin:0 auto;
}
@media screen and (min-width: 1280px) {
  flex-direction:row;
}
`
