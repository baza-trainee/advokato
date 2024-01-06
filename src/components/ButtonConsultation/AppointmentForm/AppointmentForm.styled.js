import styled from '@emotion/styled';
import {
  flexBox,
  secondaryButton,
  fontSectionTitle,
  device,
} from '../../../styles/mixins';

export const FormWrp = styled.div`
  background-color: white;

  @media screen and (${device.mobileL}) {
    padding-top: 48px;
    padding-right: 20px;
    padding-bottom: 28px;
    padding-left: 20px;
    width: 536px;
  }

  @media screen and (${device.desktop}) {
    padding-top: 84px;
    padding-right: 40px;
    padding-bottom: 32px;
    padding-left: 40px;
    width: 600px;
    min-height: 336px;
  }
`;

export const FirstPageTitle = styled.h2`
  ${fontSectionTitle};
  text-align: center;
  color: var(--mainText);

  @media screen and (${device.mobileL}) {
    height: 40px;
    width: 348px;

    font-size: 28px;
    line-height: calc(39 / 28);
  }

  @media screen and (${device.desktop}) {
    margin-bottom: -12px;
    height: 48px;
    width: 471px;

    font-size: 40px;
    line-height: calc(56 / 40);
  }
`;

export const SecondPageTitle = styled.h2`
  ${fontSectionTitle};
  text-align: center;
  color: var(--mainText);

  @media screen and (${device.mobileL}) {
    width: 424px;
    font-size: 28px;
    line-height: calc(39 / 28);
  }

  @media screen and (${device.desktop}) {
    margin-bottom: -12px;
    width: 356px;
    font-size: 40px;
    line-height: calc(56 / 40);
  }
`;

export const FormStyled = styled.form`
  ${flexBox};
  flex-direction: column;

  @media screen and (${device.mobileL}) {
    gap: ${({ currentPartForm }) =>
      (currentPartForm === 1) |
      (currentPartForm === 2) |
      (currentPartForm === 3)
        ? '20px'
        : null};
  }

  @media screen and (${device.desktop}) {
    gap: ${({ currentPartForm }) =>
      (currentPartForm === 1) |
      (currentPartForm === 2) |
      (currentPartForm === 3)
        ? '32px'
        : null};
  }
`;

export const ButtonWrp = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (${device.mobileL}) {
    gap: 12px;
  }

  @media screen and (${device.desktop}) {
    gap: 20px;
  }
`;

export const UpperButton = styled.button`
  ${secondaryButton};

  &:hover,
  &:focus {
    border: 1px solid var(--darkBackground);
  }

  @media screen and (${device.mobileL}) {
    width: 288px;
    height: 52px;
  }
`;

export const LowerButton = styled.button`
  ${secondaryButton};

  color: var(--mainText);
  background-color: inherit;
  border: 1px solid var(--darkBackground);

  &:hover,
  &:focus {
    color: var(--lightText);
    background-color: var(--darkBackground);
  }

  @media screen and (${device.mobileL}) {
    width: 288px;
    height: 52px;
  }
`;
