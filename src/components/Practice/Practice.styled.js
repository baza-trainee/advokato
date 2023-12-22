import styled from '@emotion/styled';
import { fontSectionTitle } from '../../styles/mixins';

export const SectionStyled = styled.section`
  padding: 132px 0;
  background-color: var(--darkBackground);
`;

export const Container = styled.div`
  margin: 0 auto;
  width: 1120px;
`;

export const TitleStyled = styled.h2`
  margin-bottom: 40px;
  max-width: 1116px;
  min-height: 120px;

  ${fontSectionTitle};
  color: var(--lightText);
`;

export const PracticeDescWrp = styled.div`
  margin-bottom: 28px;
`;

export const PracticeWrp = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const PracticeInfo = styled.div`
  width: 456px;
`;

export const ImageStyled = styled.img`
  margin-bottom: 60px;

  border-radius: 24px;
  background: linear-gradient(#0000002e, #00000099);
`;

export const PracticeTitle = styled.h3`
  margin-bottom: 24px;

  font-family: var(--Raleway);
  font-size: 32px;
  font-weight: 400;
  line-height: calc(45 / 32);
  letter-spacing: 0em;

  color: var(--lightText);
`;

export const PracticeDesc = styled.p`
  /* display: inline; */
  margin-bottom: 20px;

  font-family: var(--Raleway);
  font-size: 18px;
  font-weight: 400;
  line-height: calc(27 / 18);
  letter-spacing: 0em;
  text-indent: 20px;
  color: var(--lightText);

  display: ${({ isShowMoreDesc }) => (isShowMoreDesc ? 'block' : null)};
`;

export const PracticeDescFull = styled.div`
  display: inline;

  font-family: var(--Raleway);
  font-size: 18px;
  font-weight: 400;
  line-height: calc(27 / 18);
  letter-spacing: 0em;

  color: var(--lightText);

  p:not(:last-of-type) {
    margin-bottom: 10px;
  }

  ul,
  ol {
    list-style-type: disc;
    margin-left: 30px;
    margin-bottom: 10px;
  }

  p {
    /* display: inline; */
    text-indent: 20px;
  }
`;

export const MoreButtonStyled = styled.button`
  /* display: inline; */
  margin-left: 10px;

  font-family: var(--Raleway);
  font-size: 18px;
  font-weight: 400;
  line-height: calc(27 / 18);
  letter-spacing: 0em;
  color: var(--greyText);
  border: none;
  background-color: inherit;
`;

export const ExtraInfoWrpStyled = styled.div`
  p {
    margin-bottom: 30px;

    text-align: justify;
    color: red;
    text-indent: 30px;
  }
`;
