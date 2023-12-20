import { Suspense, useState, useEffect } from 'react';
import { Outlet, NavLink, useLocation, useNavigate } from 'react-router-dom';

import { useTranslation } from 'react-i18next';
import 'animate.css';

import logoImg from '../../assets/images/layout-section/Logo.png';
import { ButtonConsultation } from '../ButtonConsultation';
import { Icon } from '../Icon';
import {
  HeaderStyled,
  LangButton,
  ConsultElement,
  PhonesDiv,
  HamburgerMenu,
  PhoneBurger,
} from './Layout.styled';
import { Footer } from '../Footer/Footer';
import { CookiesPanel } from '../CookiesPanel';
import { BurgerMenu } from '../BurgerMenu/BurgerMenu';
import { Menu } from '../Menu';

export const Layout = ({ activeLang, toggleLanguage }) => {
  const [t, i18n] = useTranslation('global');
  const [isOpen, setIsOpen] = useState(false);
  const [top, setTop] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

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

  const handleClickLogoButton = () => {
    if (location.pathname === '/' && location.hash === '') {
      return window.location.reload();
    }

    if (location.pathname === '/' && location.hash !== '') {
      navigate('/');
      return window.location.reload();
    }
  };

  return (
    <>
      <HeaderStyled top={top}>
        <PhoneBurger>
          <Icon
            id={'phoneButton'}
            className="animate__animated animate__pulse animate__infinite infinite
          animate__slower	3s"
            width={56}
            height={56}
          />
        </PhoneBurger>

        <NavLink to="/" aria-label="home">
          <img
            onClick={handleClickLogoButton}
            width={152}
            height={60}
            src={logoImg}
            alt="logoImage"
          />
        </NavLink>

        <Menu />

        <div>
          <LangButton
            onClick={() =>
              activeLang === 'ua' ? toggleLanguage('en') : toggleLanguage('ua')
            }
            aria-label="lang-ua"
            activeLang={activeLang}
            currentLang="ua"
            desktop="desktop"
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

        <BurgerMenu
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          top={top}
          activeLang={activeLang}
          toggleLanguage={toggleLanguage}
        />

        <ConsultElement>
          <ButtonConsultation
            className={
              'animate__animated animate__pulse animate__infinite infinite animate__slower	3s'
            }
          />

          <PhonesDiv>
            <a href="tel:+38 (093) 373 73 03">+38 (093) 373 73 03</a>
          </PhonesDiv>
        </ConsultElement>
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
