import { lazy, Suspense, useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Loading as NotiflixLoading } from 'notiflix/build/notiflix-loading-aio';

const Layout = lazy(() => import('../Layout'));
const HomePage = lazy(() => import('../../pages/HomePage'));
const CompanyPage = lazy(() => import('../../pages/CompanyPage'));
const ContactsPage = lazy(() => import('../../pages/ContactsPage'));
const NotFound = lazy(() => import('../../pages/NotFound/NotFound'));

export const App = () => {
  const [t, i18n] = useTranslation('global');
  const [activeLang, setActiveLang] = useState('ua');

  useEffect(() => {
    NotiflixLoading.init({
      svgSize: '110px',
      svgColor: '#0b0c0c',
      clickToClose: false,
    });
  }, []);

  const toggleLanguage = async lang => {
    i18n.changeLanguage(lang);
    setActiveLang(prev => lang);
  };

  return (
    <Suspense>
      <Routes>
        <Route
          path="/"
          element={
            <Layout activeLang={activeLang} toggleLanguage={toggleLanguage} />
          }
        >
          <Route index element={<HomePage />} />
          <Route path="company" element={<CompanyPage />} />
          <Route path="contacts" element={<ContactsPage />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
