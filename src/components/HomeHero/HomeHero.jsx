import { useEffect, useState } from 'react';
import {
  SectionStyled,
  Container,
  MainTitleStyled,
  SubtitleStyled,
} from './HomeHero.styled';
import { isObjectEmpty } from '../../helpers';
import { getContent } from '../../api';

export const HomeHero = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const getData = async () => {
      const data = await getContent('hero');

      if (!isObjectEmpty(data)) {
        setData(data.hero);
      }
    };

    getData();
  }, []);

  return (
    <SectionStyled>
      <Container>
        <MainTitleStyled>{data?.slogan}</MainTitleStyled>

        <div>
          <SubtitleStyled>{data?.left_text}</SubtitleStyled>
          <SubtitleStyled>{data?.right_text}</SubtitleStyled>
        </div>
      </Container>
    </SectionStyled>
  );
};
