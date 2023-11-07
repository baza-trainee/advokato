import { NavLink } from "react-router-dom";
import styled from "@emotion/styled";
import { container, device, flexBox, fontDesktop } from "../../styles/mixins";

export const FooterStyled = styled.footer`
  background-color: var(--darkBackground);
  border-radius: 24px 24px 0 0;
`;

export const Container = styled.div`
  ${container};

  @media screen and (${device.desktop}) {
    padding-top: 72px;
    padding-bottom: 28px;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const Link = styled(NavLink)`
  font-family: var(--Montserrat);
  font-size: 18px;
  line-height: calc(32.4 / 18);
  color: var(--lightText);
  position: relative;
  transition: color 0.3s ease-in-out;

  &:hover,
  &:focus {
    color: var(--accentLink);
  }

  &::before {
    content: "";
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: var(--accentLink);
    transition: width 0.3s ease-in-out;
  }

  &:hover::before {
    width: 100%;
  }

  &.active {
    color: var(--accentLink);
    &::before {
      width: 100%;
    }
  }
`;
