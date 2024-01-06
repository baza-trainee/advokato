import PropTypes from 'prop-types';

import {
  SectionStyled,
  Container,
  MainTitleStyled,
  SubtitleStyled,
  SubtitleWrapper,
} from './HomeHero.styled';

export const HomeHero = ({ data }) => {
  return (
    <SectionStyled>
      <Container>
        <MainTitleStyled>{data?.slogan}</MainTitleStyled>

        <SubtitleWrapper>
          <SubtitleStyled>{data?.left_text}</SubtitleStyled>
          <SubtitleStyled>{data?.right_text}</SubtitleStyled>
        </SubtitleWrapper>
      </Container>
    </SectionStyled>
  );
};

HomeHero.propTypes = {
  data: PropTypes.object.isRequired,
};
