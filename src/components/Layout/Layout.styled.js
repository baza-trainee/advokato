import styled from '@emotion/styled';
import { flexBox } from '../../styles/mixins';

export const HeaderStyled = styled.header`
  ${flexBox};
  justify-content:space-around;
  position:sticky;
  top:0;
  left:0;
  z-index:20;
  background-color:#0B0C0C4D;
  color:#FEFEFE;
  font-family:Montserrat;
  height: 140px;
  gap:2vw;
  z-index:20;
`;

export const UlStyled = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3vw;
  height: 50px;
  width:600px;
  a {
    color:#FEFEFE;
    font-weight:400;
    font-size:18px;
    line-height:32.4px;
  }
`;

export const LangButton = styled.button`
  border: 1px solid #F3EFF5;
  border-radius:8px;
  background-color: inherit;
  font-family:Raleway;
  font-size: 18px;
  font-weight: 400;
  line-height: 27px;
  cursor: pointer;
  color:#FEFEFE;
  padding:16px;

  // &:first-of-type {
  //   margin-right: 6px;
  // }

  // &:first-of-type::after {
  //   content: '';
  //   display: inline-block;
  //   width: 3px;
  //   height: 17px;
  //   margin-left: 6px;
  //   background-color: #000;
  // };

  /*color: ${({ activeLang, currentLang }) => {
    if (activeLang === currentLang) {
      return '#008000';
    } else {
      return null;
    }
  }};*/

  /* &:hover,
  &:focus {
    transition: color var(--animation-duration) var(--timing-function);
    color: #a1232b;
  } */
`;

export const ConsultElement=styled.div`
width:288px;
button,span{color:#FEFEFE;
font-family:Montserrat;
font-weight:500;
font-size:14px;
line-height:17.07px;
cursor:pointer;
}
`
export const ConsultButton = styled.button`
border:1px solid #F3EFF5;
border-radius:48px;
background:none;
padding:16px 24px;
width:288px;
`;
export const PhonesDiv = styled.div`
max-width:100%;
display:flex;
align-items:center;
justify-content:space-evenly;
margin:1vh auto 0;
`