import {
  SectionStyled,
  Container,
  CompanyBox,
  ImageStyled,
  TextStyled,
  ButtonStyled,
} from "./Owner.styled";

export const Owner = () => {
  return (
    <SectionStyled>
      <Container>
        <CompanyBox>
          <TextStyled>
            <h3>Адвокатська компанія</h3>
            <span>«STATUS»</span>
            <p>
              Маючи надійну команду юристів і адвокатів, ми надаємо повний
              спектр юридичних послуг у корпоративній, цивільно-правовій,
              кримінальній та інших сферах. Також, маємо досвід захисту
              інтелектуальної власності, надаємо нормативно-правові консультації
              підприємницької діяльності широкого кола клієнтів, в тому числі
              крупним компаніям, а також громадським та некомерційним
              організаціям.
            </p>

            <ButtonStyled>
              Записатися на консультацію
              <svg viewBox="0 0 17 12" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.3616 0L16.5 5.99997L15.5111 6.9666L15.5039 6.95955L10.3471 12L9.35822 11.0334L13.8084 6.6835H0.5V5.31648H13.8229L9.37272 0.96663L10.3616 0Z" />
              </svg>
            </ButtonStyled>
          </TextStyled>
        </CompanyBox>

        <ImageStyled />
      </Container>
    </SectionStyled>
  );
};
