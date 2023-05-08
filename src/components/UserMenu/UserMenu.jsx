import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logOut } from '../../redux/authRegister/authOperations';
import { Container, ButtonUser, User } from './UserMenu.styled';

export function UserMenu() {
  const userName = useSelector(state => state.auth.user.email);
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <Container>
      <User>Welcome back, {isLoggedIn && userName}!</User>
      <ButtonUser
        type="button"
        onClick={() => {
          dispatch(logOut());
          navigate('/login');
        }}
      >
        Logout
      </ButtonUser>
    </Container>
  );
}
