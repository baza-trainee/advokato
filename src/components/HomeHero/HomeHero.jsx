import { SectionStyled, Container } from './HomeHero.styled';

export const HomeHero = () => {
  return (
    <SectionStyled>
      <Container>
        <h1>Довіра, досвід, результат</h1>
        <ul>
          <li>
            Ми допомагаємо приватним клієнтам, державним компаніям, малому і
            великому бізнесу вирішувати юридичні питання будь-якої складності.
          </li>
          <li>
            Ми допомагаємо передбачати необхідні зміни і уникати таким чином
            складних ситуацій в майбутньому.
          </li>
        </ul>
      </Container>
    </SectionStyled>
  );
};
