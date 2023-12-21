import styled from '@emotion/styled';
import {
  flexBox,
  device,
  fontLayoutMenu,
  fontReview,
  fontLayoutCall,
} from '../../styles/mixins';

export const HeaderStyled = styled.header`
  ${flexBox};
  position: sticky;
  top: 0;
  left: 0;
  height: 120px;
  ${fontLayoutMenu}
  color: var(--lightText);
  background-color: var(--headerBackground);
  backdrop-filter: ${props => (props.top ? 0 : 'blur(20px)')};
  z-index: 20;
  img {
    margin: 0 334px;
    width: 180px;
    height: 80px;
  }
  @media screen and (${device.burger}) {
    height: 140px;
    justify-content: space-around;
    img {
      margin: 0;
      width: 152px;
      height: 60px;
    }
  }
`;

export const HamburgerMenu = styled.div`
  display: block;
  position: relative;
  top: 5vh;
  width: 42px;
  height: 10vh;
  transition-duration: 1s;
  cursor: pointer;

  @media screen and (${device.burger}) {
    display: none;
  }

  span {
    position: absolute;
    width: 42px;
    height: 3px;
    background-color: var(--lightText);
    border-radius: 20px;
    transition-duration: 0.25s;
    transition-delay: 0.25s;
    z-index: 50;
  }

  span:before {
    content: '';
    position: absolute;
    top: -10px;
    left: 0;
    width: 42px;
    height: 3px;
    background-color: var(--lightText);
    border-radius: 20px;
    transition-duration: 0.25s;
    transition: transform 0.25s, top 0.25s 0.25s;
  }

  span:after {
    content: '';
    position: absolute;
    top: 10px;
    left: 0;
    width: 42px;
    height: 3px;
    background-color: var(--lightText);
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
    top: 0;
    transform: rotateZ(-45deg);
    transition: top 0.25s, transform 0.25s 0.25s;
  }

  span.open:after {
    top: 0;
    transform: rotateZ(45deg);
    transition: top 0.4s, transform 0.25s 0.25s;
  }
`;

export const LangButton = styled.button`
  display: ${props => (props.desktop === 'desktop' ? 'none;' : 'block')};
  ${fontReview};
  width: 52px;
  height: 48px;
  margin: ${props => (props.burger ? '136px 0 0 40px' : '0')};
  color: var(--lightText);
  background-color: inherit;
  border: 1px solid var(--lightText);
  border-radius: 8px;
  cursor: pointer;
  @media screen and (${device.burger}) {
    display: block;
  }
`;

export const ConsultElement = styled.div`
  display: none;
  @media screen and (${device.burger}) {
    display: block;
    width: 288px;

    button,
    a {
      ${fontLayoutCall}
      color: var(--lightText);
      cursor: pointer;
    }
  }
`;

export const PhonesDiv = styled.div`
  ${flexBox};
  justify-content: space-evenly;
  margin: 1vh auto 0;
  max-width: 100%;
`;

export const PhoneBurger = styled.div`
  display: block;
  svg {
    fill: none;
    stroke: var(--reviewText);
    stroke-width: 2px;
  }
  @media screen and (${device.burger}) {
    display: none;
  }
`;

export const MainStyled = styled.main`
  min-height: calc(100dvh - 508px);
`;
