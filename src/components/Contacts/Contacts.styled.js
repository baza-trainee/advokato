import styled from '@emotion/styled';
import { fontSectionTitle } from '../../styles/mixins';

export const SectionStyled = styled.section`
  padding-top: 132px;
  padding-bottom: 120px;

  border-top: 140px solid var(--darkBackground);
`;

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1120px;
`;

export const TitleStyled = styled.h2`
  margin-bottom: 40px;
  max-width: 660px;
  height: 48px;

  ${fontSectionTitle};
  color: var(--mainText);
`;

export const CenterWrp = styled.div`
  display: flex;
`;

export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;
