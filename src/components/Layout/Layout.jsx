import { Suspense, useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "animate.css";

import logoImg from "../../assets/images/layout-section/statusLogo.png";
import {
  HeaderStyled,
  UlStyled,
  LangButton,
  ConsultButton,
  ConsultElement,
  PhonesDiv,
  HamburgerMenu,
} from "./Layout.styled";
import { Footer } from "../Footer/Footer";

export const Layout = ({ activeLang, toggleLanguage }) => {
  const [t, i18n] = useTranslation("global");
  const [isOpen, setIsOpen] = useState(false);
  const [top, setTop] = useState(true);
  useEffect(() => {
    const scrollHandler = () => {
      setTop(window.scrollY <= 200);
    };
    window.addEventListener("scroll", scrollHandler);
    scrollHandler();
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);
  return (
    <>
      <HeaderStyled top={top}>
        <NavLink to="/" aria-label="home">
          <img src={logoImg} alt="logoImage" />
        </NavLink>
        <nav>
          <UlStyled>
            <li>
              <NavLink to="/" aria-label="home">
                {t("header.nav.home")}
              </NavLink>
            </li>
            <li>
              <NavLink to="/company" aria-label="company">
                {t("header.nav.company")}
              </NavLink>
            </li>
            <li>
              <NavLink to="#" aria-label="practice">
                {t("header.nav.practice")}
              </NavLink>
            </li>
            <li>
              <NavLink to="#" aria-label="news">
                {t("header.nav.news")}
              </NavLink>
            </li>
            <li>
              <NavLink to="#" aria-label="contacts">
                {t("header.nav.contacts")}
              </NavLink>
            </li>
          </UlStyled>
        </nav>
        <div>
          <LangButton
            onClick={() =>
              activeLang === "ua" ? toggleLanguage("en") : toggleLanguage("ua")
            }
            aria-label="lang-ua"
            activeLang={activeLang}
            currentLang="ua"
          >
            {activeLang.toUpperCase()}
          </LangButton>
        </div>
        <HamburgerMenu
          className={`${isOpen ? "open" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className={`${isOpen ? "open" : ""}`}></span>
        </HamburgerMenu>
        <ConsultElement>
          <ConsultButton
            className="animate__animated animate__pulse animate__infinite infinite 

          animate__slower	3s"
          >
            {t("header.btnAppoitment")} ➡
          </ConsultButton>
          <PhonesDiv>
            <span>+38 (0512) 37 73 73</span>
            <span>+38 (093) 373 73 03</span>
          </PhonesDiv>
        </ConsultElement>
      </HeaderStyled>
      <main>
        <Suspense fallback={<p>{t("loading")}</p>}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </>
  );
};
