import styled from '@emotion/styled';

export const HeaderStyled = styled.header`
  background-color: #000;
`;

export const UlStyled = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  height: 50px;

  a {
    color: #fff;
  }
`;

export const LangButton = styled.button`
  border: none;
  background-color: inherit;

  font-size: 24px;
  font-weight: 700;
  line-height: 1.29;
  cursor: pointer;
  color: #fff;

  &:first-of-type {
    margin-right: 6px;
  }

  &:first-of-type::after {
    content: '';
    display: inline-block;
    width: 3px;
    height: 17px;
    margin-left: 6px;
    background-color: #000;
  }

  color: ${({ activeLang, currentLang }) => {
    if (activeLang === currentLang) {
      return '#008000';
    } else {
      return null;
    }
  }};

  /* &:hover,
  &:focus {
    transition: color var(--animation-duration) var(--timing-function);
    color: #a1232b;
  } */
`;
