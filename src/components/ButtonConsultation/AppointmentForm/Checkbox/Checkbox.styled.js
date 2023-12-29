import styled from '@emotion/styled';
import checkboxFalse from '../../../../assets/icons/checkboxFalse.svg';
import checkboxTrue from '../../../../assets/icons/checkboxTrue.svg';
import { flexBox, fontDesktop } from '../../../../styles/mixins';

export const CheckBoxWrp = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 508px;
  height: 56px;
<<<<<<< HEAD
=======
  margin-top: -12px;
>>>>>>> dev
  margin-bottom: -4px;
`;

export const CheckBoxStyled = styled.input`
  margin-right: 25px;

  appearance: none;
  outline: none;
  cursor: pointer;

  &::before {
    content: url(${checkboxFalse});
    ${flexBox}
    height: 21px;
    width: 21px;
  }

  &.checked::before {
    content: url(${checkboxTrue});
    ${flexBox}
    height: 21px;
    width: 21px;
  }
`;

export const DocLinkStyled = styled.p`
<<<<<<< HEAD
=======
  display: ${({ lang }) => (lang ? 'inline' : 'flex')};
  flex-wrap: ${({ lang }) => (lang ? 'nowrap' : 'wrap')};
  width: 453px;
  height: 56px;

>>>>>>> dev
  font-family: var(--Montserrat);
  font-size: 18px;
  font-weight: 500;
  line-height: 32.4px;
  letter-spacing: 0em;
  color: var(--mainText);

  span {
    cursor: pointer;
    text-decoration: underline;
    color: #183ec6;
<<<<<<< HEAD
=======
    margin-left: ${({ lang }) => (lang ? '10px' : '0px')};
>>>>>>> dev
  }
`;

export const ErrorText = styled.p`
  position: absolute;
  top: 0;
  left: 0;
  transform: translateY(50px);
  height: 36px;

  ${fontDesktop};
  color: var(--accentText);
`;
