import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

import { Icon } from '../Icon';
import { UlStyled, LangButton, ThemeButton } from './Layout.styled';

export const Layout = ({
  toggleTheme,
  isDarkTheme,
  activeLang,
  toggleLanguage,
}) => {
  const [t, i18n] = useTranslation('global');

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

      <ThemeButton onClick={toggleTheme} aria-label="theme">
        {isDarkTheme ? (
          <Icon id="moon" width={20} height={20} />
        ) : (
          <Icon id="sun" width={20} height={20} />
        )}
      </ThemeButton>

      <Suspense fallback={<p>{t('loading')}</p>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

Layout.propTypes = {
  toggleTheme: PropTypes.func.isRequired,
  isDarkTheme: PropTypes.bool.isRequired,
  activeLang: PropTypes.string.isRequired,
  toggleLanguage: PropTypes.func.isRequired,
};
