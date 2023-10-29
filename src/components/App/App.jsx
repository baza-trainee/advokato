import { lazy, Suspense, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import { useTranslation } from 'react-i18next';

import { LIGHT, DARK } from '../../styles/theme';

const Layout = lazy(() => import('../Layout'));
const WelcomePage = lazy(() => import('../../pages/WelcomePage'));
const HomePage = lazy(() => import('../../pages/HomePage'));

export const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [t, i18n] = useTranslation('global');
  const [activeLang, setActiveLang] = useState('ua');

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
