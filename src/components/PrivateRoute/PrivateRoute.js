import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router';
import userSelectors from '../../redux/authorisation/user_selectors';

const PrivateRoute = ({ children, ...routeProps }) => {
  const isLoggedIn = useSelector(userSelectors.getIsLoggedIn);
  return (
    <Route {...routeProps}>{isLoggedIn ? children : <Redirect to="/" />}</Route>
  );
};

export default PrivateRoute;
