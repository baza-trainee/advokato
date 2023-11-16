import styled from '@emotion/styled';
import {
  container,
  flexBox,
  fontSectionTitle,
  fontSectionText,
} from '../../styles/mixins';
import '../../index.css';

export const SectionStyled = styled.section`
  padding: 132px 160px;
  background-color: var(--lightBackground);
  color: var(--lightText);
`;

export const Container = styled.div`
  ${container};
  ${flexBox};
  flex-direction: column;
  gap: 40px;
  width: 1120px;
  height: auto;
  padding: 0 !important;
`;

export const TitleBlock = styled.div`
  ${flexBox};
  flex-direction: column;
  gap: 40px;
`;

export const TitleStyled = styled.h2`
  ${fontSectionTitle};
  color: var(--mainText);
`;

export const SubheadingStyled = styled.p`
  ${fontSectionText};
  color: var(--mainText);
`;

export const ResultBlock = styled.div`
  ${flexBox};
  gap: 40px;
  flex-direction: column;
  width: 100%;
`;
