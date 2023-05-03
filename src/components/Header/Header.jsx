import { Routes, Route, NavLink } from 'react-router-dom';
import { Login } from '../Pages/Login/Login';
import { Register } from '../Pages/Register/Register';
import { ContactsPage } from '../Pages/contactsPage/ContactsPage';
import { useSelector } from 'react-redux';
import { UserMenu } from '../UserMenu/UserMenu';

export function Header() {
  const isLoggedIn = useSelector(state => state.auth.token);
  return (
    <>
      <nav>
        {!isLoggedIn && (
          <>
            <NavLink to="/login">LogIn</NavLink>
            <NavLink to="/register">Register</NavLink>
          </>
        )}
        {isLoggedIn && (
          <>
            <NavLink to="/contacts">Contacts</NavLink>
            <UserMenu />
          </>
        )}
      </nav>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contacts" element={<ContactsPage />} />
      </Routes>
    </>
  );
}
