import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect } from "react";
import {
  BlockWrapper,
  BonoHeader,
  BonoText,
  Container,
  LeftSide,
  RightSide,
  SectionStyled,
} from "./ProBono.styled";
import trident from "../../assets/images/proBono-section/trident_photo.png";
import armor from "../../assets/images/proBono-section/boss_armor.png";

export const ProBono = () => {
  gsap.registerPlugin(ScrollTrigger);
  let tl = gsap.timeline();
  useLayoutEffect(() => {
    tl.to(".elem1", { opacity: 0, duration: 2 }).to(".elem2", {
      opacity: 1,
      duration: 2,
    });
    ScrollTrigger.create({
      animation: tl,
      trigger: ".triggerTop",
      start: "top 0%",
      end: "bottom 0%",
      scrub: 1,
    });
  }, [tl]);
  return (
    <>
      <SectionStyled className="triggerTop">
        <Container>
          <BlockWrapper className="elem1">
            <LeftSide>
              <BonoHeader>ProBono</BonoHeader>
              <BonoText>
                Адвокатська компанія СТАТУС із міста Миколаїв з перших місяців
                вторгнення веде потужну волонтерську діяльність, активно
                підтримуючи постраждалих українців та Збройні сили України.
                Команда адвокатів знаходить підтримку міжнародних фондів.
                Організовує волонтерські збори. Допомагає забезпечувати
                гуманітарною допомогою громадян у прифронтових зонах
                Миколаївської області.
              </BonoText>
              <BonoText>
                Представники АК СТАТУС зібрали кошти, закупили та безоплатно
                передали бійцям ЗСУ понад 500 бронежилетів, близько 200 захисних
                шоломів, транспортні засоби, дрони, одяг, екіпірування та багато
                іншого на постійній основі, загалом в сумі понад 2 мільйони
                гривень.
              </BonoText>
            </LeftSide>
            <RightSide>
              <img src={trident} alt="trident_image" />
            </RightSide>
          </BlockWrapper>
          <BlockWrapper second className="elem2">
            <LeftSide>
              <img src={armor} alt="armor_image" />
            </LeftSide>
            <RightSide>
              <BonoText>
                СТАТУС безоплатно консультує фізичних осіб, що постраждали
                внаслідок воєнних дій  і фіксує завдану шкоду з метою
                зобов’язання виплат репарацій агресором у майбутньому. Юристи
                провели ґрунтовну роботу та подали декілька заяв до ЄСПЧ
                (європейського суду з прав людини) у Страсбурзі для
                відшкодування шкоди завданої юридичним особам в Україні на суму
                понад 10 млн євро.
              </BonoText>
              <BonoText>
                Всупереч воєнним діям, юристи АК СТАТУС розширили свою географію
                і працюють по всій території України, стабільно підтримуючи
                економіку країни.
              </BonoText>
            </RightSide>
          </BlockWrapper>
        </Container>
      </SectionStyled>
    </>
  );
};
