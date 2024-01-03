import styled from '@emotion/styled';
import checkboxFalse from '../../../../assets/icons/checkboxFalse.svg';
import checkboxTrue from '../../../../assets/icons/checkboxTrue.svg';
import { flexBox, fontDesktop, device } from '../../../../styles/mixins';

export const CheckBoxWrp = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  @media screen and (${device.tablet}) {
    width: 496px;
    height: 52px;
    margin-top: 4px;
    margin-bottom: 4px;
  }

  @media screen and (${device.desktop}) {
    width: 508px;
    height: 56px;
    margin-top: -12px;
    margin-bottom: -4px;
  }
`;

export const CheckBoxStyled = styled.input`
  appearance: none;
  outline: none;
  cursor: pointer;

  &::before {
    content: url(${checkboxFalse});
    ${flexBox};

    @media screen and (${device.tablet}) {
      height: 16px;
      width: 16px;
    }

    @media screen and (${device.desktop}) {
      height: 21px;
      width: 21px;
    }
  }

  &.checked::before {
    content: url(${checkboxTrue});
    ${flexBox};

    @media screen and (${device.tablet}) {
      height: 16px;
      width: 16px;
    }

    @media screen and (${device.desktop}) {
      height: 21px;
      width: 21px;
    }
  }

  @media screen and (${device.tablet}) {
    margin-right: 20px;
  }
`;

export const DocLinkStyled = styled.p`
  display: ${({ lang }) => (lang === 'en' ? 'inline' : 'flex')};
  flex-wrap: ${({ lang }) => (lang === 'en' ? 'nowrap' : 'wrap')};

  font-family: var(--Montserrat);
  font-weight: 500;
  letter-spacing: 0em;
  color: var(--mainText);

  span {
    cursor: pointer;
    text-decoration: underline;
    color: #183ec6;
    margin-left: ${({ lang }) => (lang === 'en' ? '10px' : '0px')};
  }

  @media screen and (${device.tablet}) {
    width: 452px;
    height: 52px;
    font-size: 18px;
    line-height: 21.94px;
  }

  @media screen and (${device.desktop}) {
    width: 453px;
    height: 56px;
    line-height: 32.4px;
  }
`;

export const ErrorText = styled.p`
  position: absolute;
  top: 0;
  left: 0;

  ${fontDesktop};
  color: var(--accentText);

  @media screen and (${device.tablet}) {
    height: 32px;
    transform: translateY(40px);
    font-size: 18px;
    line-height: calc(29 / 18);
  }

  @media screen and (${device.desktop}) {
    height: 36px;
    transform: translateY(50px);
    font-size: 22px;
    line-height: calc(35 / 22);
  }
`;
