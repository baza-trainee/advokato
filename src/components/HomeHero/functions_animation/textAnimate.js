import { Flip } from "gsap/Flip";

export const textAnimate = (state, state1, state2) => {
  Flip.to(state, {
    duration: 3,
    transform: "scale(0)",
    transformOrigin: "top left",
    opacity: 0,
  });
  Flip.to(state1, {
    duration: 3,
    transform: "translateX(-500px)",
    opacity: 0,
    delay: 2,
  });
  Flip.to(state2, {
    duration: 3,
    transform: "translateX(530px)",
    opacity: 0,
    delay: 2,
  });
};

export const textAnimate1 = (state, state1, state2) => {
  Flip.to(state, {
    duration: 5,
    transform: "scale(0)",
    transformOrigin: "top left",
    opacity: 0,
  });
  Flip.to(state1, {
    duration: 3,
    transform: "translateX(0px)",
    opacity: 0,
    delay: 2,
  });
  Flip.to(state2, {
    duration: 3,
    transform: "translateX(0px)",
    opacity: 0,
    delay: 2,
  });
};
