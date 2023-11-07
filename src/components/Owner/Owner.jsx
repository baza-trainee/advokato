import { useState } from "react";

import {
  SectionStyled,
  Container,
  CompanyBox,
  ImageBoxStyled,
  ImageStyled,
  TextStyled,
  ButtonStyled,
} from "./Owner.styled";

import imageOwner from "/src/assets/images/owner-section/photo-owner.webp";
import { Icon } from "../Icon";

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
              <Icon
                id={"icon-arrow-right"}
                width={16}
                height={12}
                fill={"#fefefe"}
              />
            </ButtonStyled>
          </TextStyled>
        </CompanyBox>
        <ImageBoxStyled>
          <ImageStyled src={imageOwner} alt="photo-owner" />
        </ImageBoxStyled>
      </Container>
    </SectionStyled>
  );
};
