import styled from '@emotion/styled';
import { fontSectionTitle } from '../../styles/mixins';

export const SectionStyled = styled.section`
  background-color: var(--lightBackground);
`;

export const Container = styled.div`
  margin: 0 auto;
  padding: 132px 160px;
  max-width: 1440px;
`;

export const TitleStyled = styled.h2`
  width: 944px;
  margin-bottom: 40px;

  ${fontSectionTitle};
  color: var(--mainText);
`;
