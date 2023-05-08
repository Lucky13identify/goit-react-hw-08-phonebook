import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export function PrivateRoute({ component: Component, redirectTo = '/' }) {
  const isLoggedIn = useSelector(state => state.auth.token);
  const isRefreshed = useSelector(state => state.auth.isRefreshing);

  const shouldRefresh = !isLoggedIn && !isRefreshed;

  return shouldRefresh ? <Navigate to={redirectTo} /> : Component;
}
