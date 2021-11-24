import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router';
import userSelectors from '../../redux/authorisation/user_selectors';

const PublicRoute = ({ children, restricted = false, ...routeProps }) => {
  const isLoggedIn = useSelector(userSelectors.getIsLoggedIn);
  return (
    <Route {...routeProps}>
      {isLoggedIn && restricted ? <Redirect to="/" /> : children}
    </Route>
  );
};

export default PublicRoute;
