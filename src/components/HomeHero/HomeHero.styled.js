import styled from '@emotion/styled';
import { container, flexBox } from '../../styles/mixins';

export const index = ()=>{
  return' 1vw + 1vh '
}

export const SectionStyled = styled.section`
height:calc((${index})*19+100vh)
width: 100%;
position: relative;
top:calc((${index})*-19);  
left: 0;
overflow: hidden;
z-index: 0;
  &::after{
    content:"";
    height: 30vh;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    background: linear-gradient(180deg ,rgba(0,0,0,0) 20%, rgba(0,0,0,1) 100%);
}
@media screen and (min-width: 768px) {
  top: -20vh;  
  height: calc((${index})*5.4+100vh);
}
`;
export const Container = styled.div`
  ${container};
  margin:30vh auto;
  img{
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  height:100%;
  width:100%;
  object-fit: cover;
  z-index:-1;
  overflow:hidden;
};
.sky{
  transform: scale(3.5);
  width: 170vw;
  height:120vh;
  left: 0;
  top: 0;
}
.buildings{
  opacity: 0;
  transform: scale(2) translateY(20vh);
}
`;
export const HomeTextElement = styled.div`
${flexBox};
flex-direction: column;
color: white;
font-weight: 700;
margin: 10vh auto;
width: 85%;
`
export const TitleText = styled.div`
${flexBox};
margin:5vh 0;
flex-wrap: wrap;
  font-family:Montserat;
  font-size:calc(${index}*2);
  font-weight:700;
  Line height:121.9px;
   width:100%;
  @media screen and (min-width: 768px) {
margin:15vh 0 5vh 0;
      font-size:50px;
    }
    @media screen and (min-width: 1280px) {
      justify-content: flex-start;
      margin:0 auto 5vh;
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
  width:45%;
  height:108px;
  margin:0 3vw 0 0;
  text-align:center;
  @media screen and (min-width: 768px) {
    // font-size:22px;
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
