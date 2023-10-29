import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const Layout = lazy(() => import('../Layout'));
const WelcomePage = lazy(() => import('../../pages/WelcomePage'));
const HomePage = lazy(() => import('../../pages/HomePage'));

export const App = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<WelcomePage />} />
          <Route path="home" element={<HomePage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
