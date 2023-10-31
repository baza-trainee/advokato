import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';
// import { Loading } from 'notiflix/build/notiflix-loading-aio';

import { HeaderStyled, UlStyled, LangButton } from './Layout.styled';

export const Layout = ({ activeLang, toggleLanguage }) => {
  const [t, i18n] = useTranslation('global');

  // Loading.dots();
  // Loading.remove();
  // Notify.success('text');
  // Notify.failure('text');

  return (
    <>
      <HeaderStyled>
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
                Практики
              </NavLink>
            </li>

            <li>
              <NavLink to="#" aria-label="news">
                Новини
              </NavLink>
            </li>

            <li>
              <NavLink to="#" aria-label="contacts">
                Контакти
              </NavLink>
            </li>
          </UlStyled>
        </nav>

        <div>
          <LangButton
            onClick={() => toggleLanguage('ua')}
            aria-label="lang-ua"
            activeLang={activeLang}
            currentLang="ua"
          >
            UA
          </LangButton>

          <LangButton
            onClick={() => toggleLanguage('en')}
            aria-label="lang-en"
            activeLang={activeLang}
            currentLang="en"
          >
            EN
          </LangButton>
        </div>
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
