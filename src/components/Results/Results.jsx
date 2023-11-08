import {
  Container,
  SectionStyled,
  TitleBlock,
  TitleStyled,
  SubheadingStyled,
  ResultBlock,
} from "./Results.styled";

import { ResultElement } from "./ResultElement/ResultElement";

export const Results = () => {
  return (
    <SectionStyled>
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
