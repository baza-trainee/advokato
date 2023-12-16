import { Suspense, useState, useEffect } from 'react';
import { Outlet, NavLink, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import 'animate.css';

import logoImg from '../../assets/images/layout-section/statusLogo.png';
import { ButtonConsultation } from '../ButtonConsultation';
import { Footer } from '../Footer/Footer';
import { CookiesPanel } from '../CookiesPanel';

import {
  HeaderStyled,
  Container,
  UlStyled,
  NavLinkStyled,
  LangButton,
  ConsultElement,
  PhonesDiv,
  HamburgerMenu,
} from './Layout.styled';

export const Layout = ({ activeLang, toggleLanguage }) => {
  const [t, i18n] = useTranslation('global');
  const [isOpen, setIsOpen] = useState(false);
  const [top, setTop] = useState(true);
  const location = useLocation();
  useEffect(() => {
    const scrollHandler = () => {
      setTop(window.scrollY <= 200);
    };
    window.addEventListener('scroll', scrollHandler);
    scrollHandler();
    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, []);
  return (
    <>
      <HeaderStyled>
        <Container top={top}>
          <NavLink to="/" aria-label="home">
            <img
              onClick={() =>
                location.pathname === '/' ? window.location.reload() : null
              }
              src={logoImg}
              alt="logoImage"
            />
          </NavLink>

          <nav>
            <UlStyled>
              <li>
                <NavLinkStyled to="/" aria-label="home">
                  {t('header.nav.home')}
                </NavLinkStyled>
              </li>
              <li>
                <NavLinkStyled to="/company" aria-label="company">
                  {t('header.nav.company')}
                </NavLinkStyled>
              </li>
              <li>
                <NavLinkStyled to="/#practice" aria-label="practice">
                  {t('header.nav.practice')}
                </NavLinkStyled>
              </li>
              <li>
                <NavLinkStyled to="#" aria-label="news">
                  {t('header.nav.news')}
                </NavLinkStyled>
              </li>
              <li>
                <NavLinkStyled to="#" aria-label="contacts">
                  {t('header.nav.contacts')}
                </NavLinkStyled>
              </li>
            </UlStyled>
          </nav>
          <div>
            <LangButton
              onClick={() =>
                activeLang === 'ua'
                  ? toggleLanguage('en')
                  : toggleLanguage('ua')
              }
              aria-label="lang-ua"
              activeLang={activeLang}
              currentLang="ua"
            >
              {activeLang.toUpperCase()}
            </LangButton>
          </div>
          <HamburgerMenu
            className={`${isOpen ? 'open' : ''}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className={`${isOpen ? 'open' : ''}`}></span>
          </HamburgerMenu>

          <ConsultElement>
            <ButtonConsultation
              className={
                'animate__animated animate__pulse animate__infinite infinite animate__slower	3s'
              }
            />

            <PhonesDiv>
              <a href="tel:+38 (0512) 37 73 73">+38 (0512) 37 73 73</a>
              <a href="tel:+38 (093) 373 73 03">+38 (093) 373 73 03</a>
            </PhonesDiv>
          </ConsultElement>
        </Container>
      </HeaderStyled>

      <main>
        <Suspense fallback={<p>{t('loading')}</p>}>
          <Outlet />
        </Suspense>
      </main>

      <Footer />

      <CookiesPanel />
    </>
  );
};
