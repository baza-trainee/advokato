import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

import { ResultElement } from './ResultElement';
import {
  Container,
  SectionStyled,
  TitleBlock,
  TitleStyled,
  SubheadingStyled,
  ResultBlock,
} from './Results.styled';

export const Results = () => {
  const { pathname, hash } = useLocation();
  const ref = useRef();

  useEffect(() => {
    if (hash === '') {
      return window.scrollTo(0, 0);
    }

    if (hash === '#news') {
      setTimeout(() => {
        ref.current.scrollIntoView({
          block: 'start',
          inline: 'nearest',
          behavior: 'smooth',
        });
      }, 0);
    }
  }, [pathname, hash]);

  return (
    <SectionStyled ref={ref}>
      <Container>
        <TitleBlock>
          <TitleStyled>
            Нашій адвокатській компанії доручено розв'язувати найскладніші
            правові питання для наших клієнтів
          </TitleStyled>
          <SubheadingStyled>
            Ми пишаємося нашими успіхами і вражаючими рішеннями, які ми досягли
            для наших клієнтів протягом років нашої роботи. Наші адвокати
            володіють багаторічним досвідом у різних сферах права і завжди
            готові захищати ваші інтереси з великою ретельністю та
            професіоналізмом.
          </SubheadingStyled>
        </TitleBlock>
        <ResultBlock>
          <ResultElement />
        </ResultBlock>
      </Container>
    </SectionStyled>
  );
};
