import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { NavLinkStyled, UlStyled } from './Menu.styled';
import { useTranslation } from 'react-i18next';

export const Menu = ({ side,setIsOpen }) => {
  const [t, i18n] = useTranslation('global');
  const [active, setActive] = useState('home');
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (pathname === '/' && hash === '') {
      return setActive(prev => 'home');
    }
    if (pathname === '/company') {
      return setActive(prev => 'company');
    }
    if (hash === '#practice') {
      return setActive(prev => 'practice');
    }
    if (hash === '#news') {
      return setActive(prev => 'news');
    }
    if (pathname === '/contacts') {
      return setActive(prev => 'contacts');
    }
  }, [pathname, hash]);

  const handleClickNavButton = ({ target }) => {
    setActive(prev => target.getAttribute('aria-label'));
  };

  return (
    <nav>
      <UlStyled sideMenu={side} onClick={handleClickNavButton}>
        <li>
          <NavLinkStyled
            to="/"
            aria-label="home"
            current="home"
            active={active}
            onClick={()=>setIsOpen(false)}
          >
            {t('header.nav.home')}
          </NavLinkStyled>
        </li>
        <li>
          <NavLinkStyled
            to="/company"
            aria-label="company"
            current="company"
            active={active}
            onClick={()=>setIsOpen(false)}
          >
            {t('header.nav.company')}
          </NavLinkStyled>
        </li>
        <li>
          <NavLinkStyled
            to="/#practice"
            aria-label="practice"
            current="practice"
            active={active}
            onClick={()=>setIsOpen(false)}
          >
            {t('header.nav.practice')}
          </NavLinkStyled>
        </li>
        <li>
          <NavLinkStyled
            to="/#news"
            aria-label="news"
            current="news"
            active={active}
            onClick={()=>setIsOpen(false)}
          >
            {t('header.nav.news')}
          </NavLinkStyled>
        </li>
        <li>
          <NavLinkStyled
            to="/contacts"
            aria-label="contacts"
            current="contacts"
            active={active}
            onClick={()=>setIsOpen(false)}
          >
            {t('header.nav.contacts')}
          </NavLinkStyled>
        </li>
      </UlStyled>
    </nav>
  );
};
