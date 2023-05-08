import { Routes, Route, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { Login } from '../../pages/Login/Login';
import { Register } from '../../pages/Register/Register';
import { ContactsPage } from '../../pages/ContactsPage/ContactsPage';
// import { lazy, Suspense } from 'react';
import { UserMenu } from '../UserMenu/UserMenu';
import { Head, Navigation } from './Header.styled';
import { RestrictedRoute } from '../OptionsRoutes/RestrictedRoute';
import { PrivateRoute } from '../OptionsRoutes/PrivateRoute';

// const Contacts = lazy(() => import('../../pages/ContactsPage/ContactsPage'));

const StyledLink = styled(NavLink)`
  color: black;
  text-decoration: none;
  &.active {
    color: #2196f3;
  }
`;

export function Header() {
  const isLoggedIn = useSelector(state => state.auth.token);
  return (
    <>
      <Head>
        <Navigation>
          {!isLoggedIn && (
            <>
              <StyledLink to="/login">LogIn</StyledLink>
              <StyledLink to="/register">Register</StyledLink>
            </>
          )}
          {isLoggedIn && <StyledLink to="/contacts">Contacts</StyledLink>}

          {isLoggedIn && <UserMenu />}
        </Navigation>
      </Head>
      {/* <Suspense fallback={<div>Loading...</div>}> */}
      <Routes>
        {/* <Route path="/" element={<div>Welcome back</div>} /> */}
        <Route
          path="/register"
          element={
            <RestrictedRoute component={<Register />} redirectTo="/login" />
          }
        />
        {/* <Route path="/login" element={<Login />} /> */}
        <Route
          path="/login"
          element={
            <RestrictedRoute component={<Login />} redirectTo="/contacts" />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute component={<ContactsPage />} redirectTo="/login" />
          }
        />
      </Routes>
      {/* </Suspense> */}
    </>
  );
}
