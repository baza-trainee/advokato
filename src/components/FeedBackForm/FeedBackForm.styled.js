import styled from '@emotion/styled';
import {
  flexBox,
  fontSectionTitle,
  secondaryButton,
} from '../../styles/mixins';

export const Container = styled.div`
  margin: 132px auto;
  width: 1120px;
`;

export const TitleStyled = styled.h2`
  height: 112px;
  width: 504px;
  margin-bottom: 56px;

  ${fontSectionTitle};
  border-bottom: 1px solid var(--darkGrey);
`;

export const StyledForm = styled.form`
  width: 1024px;

  div {
    display: flex;
    gap: 62px;
    margin-bottom: 48px;
  }

  label {
    display: flex;
    flex-direction: column;
  }
`;

export const ButtonStyled = styled.button`
  ${flexBox};
  ${secondaryButton};
  margin-top: 48px;
  width: 364px;
  height: 64px;
  font-size: 16px;
  line-height: calc(22 / 16);

  &:hover,
  &:focus {
    border: 1px solid #1c1c21;
  }
`;
