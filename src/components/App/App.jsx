import { lazy, Suspense, useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import { useTranslation } from 'react-i18next';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Loading as NotiflixLoading } from 'notiflix/build/notiflix-loading-aio';

import { LIGHT, DARK } from '../../styles/theme';

const Layout = lazy(() => import('../Layout'));
const WelcomePage = lazy(() => import('../../pages/WelcomePage'));
const HomePage = lazy(() => import('../../pages/HomePage'));

export const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [t, i18n] = useTranslation('global');
  const [activeLang, setActiveLang] = useState('ua');

  useEffect(() => {
    NotiflixLoading.init({
      backgroundColor: '#b8b8b84f',
      svgSize: '110px',
      svgColor: '#A1232B',
      clickToClose: false,
    });

    Notify.init({
      clickToClose: true,
      borderRadius: '8px',
      useIcon: false,
      plainText: false,
      fontSize: '14px',
      failure: {
        background: '#A1232B',
      },
      success: {
        background: '#b8b8b8',
        textColor: '#202020',
      },
    });
  }, []);

  const toggleTheme = async () => {
    setIsDarkTheme(prevIsDarkTheme => !prevIsDarkTheme);
  };

  const toggleLanguage = async lang => {
    i18n.changeLanguage(lang);
    setActiveLang(prev => lang);
  };

  return (
    <ThemeProvider theme={isDarkTheme ? DARK : LIGHT}>
      <Suspense fallback={<p>{t('loading')}</p>}>
        <Routes>
          <Route
            path="/"
            element={
              <Layout
                toggleTheme={toggleTheme}
                isDarkTheme={isDarkTheme}
                activeLang={activeLang}
                toggleLanguage={toggleLanguage}
              />
            }
          >
            <Route index element={<WelcomePage />} />
            <Route path="home" element={<HomePage />} />
          </Route>
        </Routes>
      </Suspense>
    </ThemeProvider>
  );
};
