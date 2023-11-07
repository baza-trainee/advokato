import SliderItems from "./SliderItems/SliderItems";
import {
  SectionStyled,
  TeamBlockHeader,
  TeamBlockSubTitle,
} from "./TeamGallery.styled";

const TeamGallery = () => {
  return (
    <>
      <SectionStyled>
        <TeamBlockHeader>Наша професійна команда</TeamBlockHeader>
        <TeamBlockSubTitle>
          Ключовим активом нашої адвокатської компанії є наша досвідчена та
          висококваліфікована команда юристів.
        </TeamBlockSubTitle>
        <SliderItems />
      </SectionStyled>
    </>
  );
};
export default TeamGallery;
