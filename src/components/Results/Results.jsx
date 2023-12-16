import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

import { ResultElement } from './ResultElement/ResultElement';
import {
  Container,
  SectionStyled,
  TitleBlock,
  TitleStyled,
  SubheadingStyled,
  ResultBlock,
} from './Results.styled';

export const Results = () => {
  const { hash } = useLocation();
  const ref = useRef();

  useEffect(() => {
    if (hash === '') {
      window.scrollTo(0, 0);
    } else {
      setTimeout(() => {
        ref.current.scrollIntoView({
          block: 'start',
          inline: 'nearest',
          behavior: 'smooth',
        });
      }, 0);
    }
  }, [hash]);

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
