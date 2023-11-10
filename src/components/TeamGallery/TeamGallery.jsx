import SliderItems from "./SliderItems/SliderItems";
import {
  Container,
  SectionStyled,
  TeamBlockHeader,
  TeamBlockSubTitle,
} from "./TeamGallery.styled";

export const TeamGallery = () => {
  return (
    <>
      <SectionStyled>
        <Container>
          <TeamBlockHeader>Наша професійна команда</TeamBlockHeader>
          <TeamBlockSubTitle>
            Ключовим активом нашої адвокатської компанії є наша досвідчена та
            висококваліфікована команда юристів.
          </TeamBlockSubTitle>
        </Container>
        <SliderItems />
      </SectionStyled>
    </>
  );
};
