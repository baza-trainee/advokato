import styled from '@emotion/styled';
import { fontSectionTitle, fontSectionText } from '../../styles/mixins';

export const SectionStyled = styled.section`
  padding: 132px;

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
  justify-content: space-between;
  height: 600px;

  p {
    min-height: 36px;

    ${fontSectionText};
  }
`;

export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;
