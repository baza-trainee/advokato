import {
  SectionStyled,
  Container,
  HomeTextElement,
  TitleText,
  TextSubtitle,
} from "./HomeHero.styled";
import { useEffect, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Flip } from "gsap/Flip";
import { useTranslation } from "react-i18next";

import bg_buildings from "../../assets/images/homeHero-section/sean-pollock-PhYq704ffdA-unsplash 1.png";
import sky from "../../assets/images/homeHero-section/sky_bg1.jpg";
import { textAnimate, textAnimate1 } from "./functions_animation/textAnimate";

export const HomeHero = () => {
  const [t, i18n] = useTranslation("global");
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(Flip);
  let titleImageAnime = gsap.timeline();

  useEffect(() => {
    titleImageAnime
      .to(".sky", { scale: 1, x: "-1vw", duration: 3 })
      .from(".buildings", { scale: 1, y: 0, opacity: 1, duration: 2 });
    ScrollTrigger.create({
      animation: titleImageAnime,
      trigger: ".imgWrapper",
      start: "top 0%",
      end: "bottom -90%",
      scrub: 1,
    });
  }, [titleImageAnime]);

  const ref = useRef();
  useLayoutEffect(() => {
    let mm = gsap.matchMedia();
    const state = Flip.getState(ref.current),
      state1 = Flip.getState(".item1"),
      state2 = Flip.getState(".item2");
    mm.add("(min-width:1280px)", () => {
      textAnimate(state, state1, state2);
    });
    mm.add("(max-width:1278px)", () => {
      textAnimate1(state, state1, state2);
    });
  }, []);

  return (
    <SectionStyled className="imgWrapper">
      <Container>
        <img className="sky" src={sky} alt="sky" />
        <img className="buildings" src={bg_buildings} alt="scyscrapers" />
        <HomeTextElement>
          <TitleText ref={ref}>
            <span>{t("titleText1")},&nbsp;</span>
            <span>{t("titleText2")},</span>
            <span>{t("titleText3")}</span>
          </TitleText>
          <TextSubtitle>
            <div className="item2">{t("subTitleText2")}</div>
            <div className="item1">{t("subTitleText1")}</div>
          </TextSubtitle>
        </HomeTextElement>
      </Container>
    </SectionStyled>
  );
};
