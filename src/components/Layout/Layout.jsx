import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';
// import { Loading } from 'notiflix/build/notiflix-loading-aio';
import logoImg from "../../images/statusLogo.png"

import { HeaderStyled, UlStyled, LangButton, ConsultButton, ConsultElement, PhonesDiv } from './Layout.styled';

export const Layout = ({ activeLang, toggleLanguage }) => {
  const [t, i18n] = useTranslation('global');

  // Loading.dots();
  // Loading.remove();
  // Notify.success('text');
  // Notify.failure('text');

  return (
    <>
      <HeaderStyled>
      <NavLink to="/" aria-label="home">
      <img src={logoImg} alt="logoImage" />
              </NavLink>
        <nav>
          <UlStyled>
            <li>
              <NavLink to="/" aria-label="home">
                {t('header.nav.home')}
              </NavLink>
            </li>
            <li>
              <NavLink to="/company" aria-label="company">
                {t('header.nav.company')}
              </NavLink>
            </li>

            <li>
              <NavLink to="#" aria-label="practice">
                {t('header.nav.practice')}
              </NavLink>
            </li>

            <li>
              <NavLink to="#" aria-label="news">
              {t('header.nav.news')}
              </NavLink>
            </li>

            <li>
              <NavLink to="#" aria-label="contacts">
              {t('header.nav.contacts')}
              </NavLink>
            </li>
          </UlStyled>
        </nav>

        <div>
          <LangButton
            onClick={() => activeLang==="ua"?toggleLanguage('en'):toggleLanguage('ua')}
            aria-label="lang-ua"
            activeLang={activeLang}
            currentLang="ua"
          >
            {activeLang.toUpperCase()}
          </LangButton>

          {/* <LangButton
            onClick={() => toggleLanguage('en')}
            aria-label="lang-en"
            activeLang={activeLang}
            currentLang="en"
          >
            EN
          </LangButton> */}
        </div>
        <ConsultElement>
        <ConsultButton>{t('header.btnAppoitment')} ➡</ConsultButton>
        <PhonesDiv>
          <span>+38 (0512) 37 73 73</span>
          <span>+38 (093) 373 73 03</span>
        </PhonesDiv>
        </ConsultElement>
      </HeaderStyled>

      <main>
        <Suspense fallback={<p>{t('loading')}</p>}>
          <Outlet />
        </Suspense>
      </main>

      <footer>footer content</footer>
    </>
  );
};
