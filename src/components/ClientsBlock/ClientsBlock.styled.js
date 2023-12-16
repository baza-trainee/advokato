import styled from '@emotion/styled';
import {
  container,
  flexBox,
  fontSectionTitle,
  sliderArrow,
} from '../../styles/mixins';

export const SectionStyled = styled.section`
  ${flexBox};
  height: 512px;
  background: var(--darkBackground);
`;

export const Container = styled.div`
  ${container};
  max-width: 1440px;
`;

export const ClientsBlockHeader = styled.h2`
  ${fontSectionTitle};
  width: 275px;
  color: var(--lightText);
  margin-bottom: 40px;
`;

export const SliderArrow = styled.div`
  ${sliderArrow};
`;

export const ClientsSliderContainer = styled.div`
  ${flexBox};
  gap: 24px;
`;

export const ClientCardWrapper = styled.div`
  ${flexBox};
  width: 300px;
  height: 180px;
  border-radius: 20px;
  border: 1px solid var(--reviewText);
  margin: 0 auto;
  img {
    width: 300px;
    height: 180px;
    &:hover {
      transform: scale(1.2);
      transition: 1s;
    }
  }
`;
