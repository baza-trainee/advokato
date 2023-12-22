import styled from '@emotion/styled';
import { flexBox } from '../../../styles/mixins';

export const FormStyled = styled.form`
  ${flexBox};
  flex-direction: column;
  gap: 30px;
  margin-bottom: 14px;
  padding: 0 25px;
`;

export const ButtonSubmit = styled.button`
  &:hover,
  &:focus {
    cursor: pointer;
    transition: background-color 500ms;
    background-color: red;
  }
`;
