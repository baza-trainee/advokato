import styled from '@emotion/styled';
import {
  flexBox,
  secondaryButton,
  fontSectionTitle,
} from '../../../styles/mixins';

export const FormWrp = styled.div`
  padding-top: 84px;
  padding-right: 40px;
  padding-bottom: 32px;
  padding-left: 40px;
  width: 600px;
  min-height: 892px;

  background-color: white;
`;

export const FirstPageTitle = styled.h2`
  margin-bottom: -12px;
  height: 48px;
  width: 471px;

  ${fontSectionTitle};
  text-align: center;
  color: var(--mainText);
`;

export const SecondPageTitle = styled.h2`
  margin-bottom: -12px;
  height: 112px;
  width: 356px;

  ${fontSectionTitle};
  text-align: center;
  color: var(--mainText);
`;

export const FormStyled = styled.form`
  ${flexBox};
  flex-direction: column;
  gap: 32px;
`;

export const ButtonWrp = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const UpperButton = styled.button`
  ${secondaryButton};
  width: 288px;
  height: 52px;

  &:hover,
  &:focus {
    border: 1px solid var(--darkBackground);
  }
`;

export const LowerButton = styled.button`
  ${secondaryButton};
  width: 288px;
  height: 52px;

  color: var(--mainText);
  background-color: inherit;
  border: 1px solid var(--darkBackground);

  &:hover,
  &:focus {
    color: var(--lightText);
    background-color: var(--darkBackground);
  }
`;
