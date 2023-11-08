import { lazy, Suspense, useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Loading as NotiflixLoading } from 'notiflix/build/notiflix-loading-aio';

const Layout = lazy(() => import('../Layout'));
const HomePage = lazy(() => import('../../pages/HomePage'));
const CompanyPage = lazy(() => import('../../pages/CompanyPage'));
const PracticePage = lazy(() => import('../../pages/PracticePage'));

export const App = () => {
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

  const toggleLanguage = async lang => {
    i18n.changeLanguage(lang);
    setActiveLang(prev => lang);
  };

  return (
    <Suspense fallback={<p>{t('loading')}</p>}>
      <Routes>
        <Route
          path="/"
          element={
            <Layout activeLang={activeLang} toggleLanguage={toggleLanguage} />
          }
        >
          <Route index element={<HomePage />} />
          <Route path="company" element={<CompanyPage />} />
          <Route path="practice" element={<PracticePage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
