import {
  SectionStyled,
  Container,
  HomeTextElement,
  TitleText,
  TextSubtitle,
} from "./HomeHero.styled";
import { useTranslation } from "react-i18next";

import bgImage from "../../assets/images/homeHero-section/sean-pollock-PhYq704ffdA-unsplash 1 (1).jpg"

export const HomeHero = () => {
  const [t, i18n] = useTranslation("global");
  
  return (
    <SectionStyled>
      <Container>
        <img src={bgImage} alt="bgImage" />
        <HomeTextElement>
          <TitleText>
            <span>{t("titleText1")},&nbsp;</span>
            <span>{t("titleText2")},</span>
            <span>{t("titleText3")}</span>
          </TitleText>
          <TextSubtitle>
            <div>{t("subTitleText2")}</div>
            <div>{t("subTitleText1")}</div>
          </TextSubtitle>
        </HomeTextElement>
      </Container>
    </SectionStyled>
  );
};
