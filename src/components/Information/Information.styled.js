import styled from "@emotion/styled";
import { container, device, flexBox, fontDesktop } from "../../styles/mixins";

export const SectionStyled = styled.section`
  /* position: relative;
  top: -30vh; */
  background-color: var(--lightBackgroung);
`;

export const Container = styled.div`
  ${container};

  @media screen and (${device.desktop}) {
    padding-top: 132px;
    padding-bottom: 64px;
  }
`;

export const TitleStyled = styled.h2`
  @media screen and (${device.desktop}) {
    width: 960px;
    margin-bottom: 72px;
    font-family: Montserrat, sans-serif;
    font-size: 40px;
    font-weight: 500;
    line-height: calc(56 / 40);
  }
`;

export const CardWraper = styled.div`
  position: relative;

  @media screen and (${device.desktop}) {
    ${flexBox};
    gap: 120px;
    margin-bottom: 176px;
  }
`;

export const ImgWraper = styled.div`
  @media screen and (${device.desktop}) {
    min-width: 548px;
    border-radius: 24px;
    overflow: hidden;
  }
`;

export const Text = styled.p`
  @media screen and (${device.desktop}) {
    ${fontDesktop};
  }
`;
