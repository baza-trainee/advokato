import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';
// import { Loading } from 'notiflix/build/notiflix-loading-aio';
import PropTypes from 'prop-types';

import { UlStyled, LangButton } from './Layout.styled';

export const Layout = ({ activeLang, toggleLanguage }) => {
  const [t, i18n] = useTranslation('global');

  // Loading.dots();
  // Loading.remove();
  // Notify.success('text');
  // Notify.failure('text');

  return (
    <div>
      <UlStyled>
        <li>
          <NavLink to="/" aria-label="welcome">
            {t('header.nav.welcome')}
          </NavLink>
        </li>
        <li>
          <NavLink to="/home" aria-label="home">
            {t('header.nav.home')}
          </NavLink>
        </li>
      </UlStyled>

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

      <Suspense fallback={<p>{t('loading')}</p>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

Layout.propTypes = {
  activeLang: PropTypes.string.isRequired,
  toggleLanguage: PropTypes.func.isRequired,
};
