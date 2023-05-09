import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { MainContainer } from './MainContainer/MainContainer';
import { fetchCurrentUser } from '../redux/authRegister/authOperations';

export function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      <MainContainer />
    </>
  );
}
