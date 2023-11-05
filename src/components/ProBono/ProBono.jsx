
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect } from "react";

export default function ProBono() {
  gsap.registerPlugin(ScrollTrigger);
  let tl = gsap.timeline();
  useLayoutEffect(() => {
    tl.to(".sky", {});

    ScrollTrigger.create({
      animation: tl,
      trigger: ".i",
      start: "top 0%",
      end: "bottom -50%",
      scrub: 1,
    });
  }, [tl]);
  return (
    <>
      <SectionStyled>
        <Container>
kdmflwkefm

        </Container>
      </SectionStyled>
    </>
  );
}
