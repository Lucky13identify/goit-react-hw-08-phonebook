import { useDispatch } from 'react-redux';
import { logOut } from '../redux/authRegister/authOperations';

export function UserMenu() {
  // const userName = useSelector(state => state.auth.user.email);
  // const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const dispatch = useDispatch();
  return (
    <div>
      {/* <p>{isLoggedIn ?? userName}</p> */}
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </div>
  );
}
