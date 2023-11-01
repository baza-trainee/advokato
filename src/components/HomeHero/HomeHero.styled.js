import styled from '@emotion/styled';
import { container } from '../../styles/mixins';

export const SectionStyled = styled.section`
height: 100vh;
width: 100%;
position: relative;
top: -20vh;  
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
`;

export const Container = styled.div`
  ${container};
  margin:30vh auto 0;
  img{
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  object-fit: cover;
  z-index:-1;
}
.sky{
  transform: scale(3.5);
  overflow:hidden;
  width: 170vw;
  height:120vh;
  left: 0;
  top: 0;
}
.buildings{
  opacity: 0;
  transform: scale(2) translateY(20vh);
  overflow:hidden;
}
`;

export const HomeTextElement = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
color: white;
font-weight: 700;
width: 85%;
margin: 10vh auto;
`
export const TitleText = styled.div`
  margin-bottom: 5vh;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  font-family:Montserat;
  font-size: 100px;
  font-weight:700;
  Line height:121.9px;
  width:100%;
`
export const TextSubtitle = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 100%;
div{
  font-family:PTSans;
  font-size:22px;
  line-height:  35.2px;
  width:500px;
  height:108px;
  margin:0 3vw 0 0;
}
`
