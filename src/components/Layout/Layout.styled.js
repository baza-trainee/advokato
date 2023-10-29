import styled from '@emotion/styled';

export const UlStyled = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  background-color: ${({ theme }) => theme.color.mainBGColor};
  height: 50px;

  a {
    color: ${({ theme }) => theme.color.mainTextColor};
  }
`;

export const LangButton = styled.button`
  border: none;
  background-color: inherit;

  font-size: 24px;
  font-weight: 700;
  line-height: 1.29;
  cursor: pointer;

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

  &:hover,
  &:focus {
    transition: color 500ms;
    color: #a1232b;
  }
`;

export const ThemeButton = styled.button`
  margin-right: 70px;

  border: none;
  background-color: inherit;
  fill: red;
  stroke: red;
  cursor: pointer;
`;
