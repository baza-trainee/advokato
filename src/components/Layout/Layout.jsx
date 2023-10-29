import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { UlStyled } from './Layout.styled';

export const Layout = () => {
  return (
    <div>
      <UlStyled>
        <li>
          <NavLink to="/" aria-label="welcome">
            Welcome
          </NavLink>
        </li>
        <li>
          <NavLink to="/home" aria-label="home">
            Home
          </NavLink>
        </li>
      </UlStyled>

      <Suspense fallback={<p>Loading....</p>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
