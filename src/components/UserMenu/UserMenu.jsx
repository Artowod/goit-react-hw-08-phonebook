import s from './UserMenu.module.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import userSelectors from '../../redux/authorisation/user_selectors';
import { connect, useSelector } from 'react-redux';
import { logoutUser } from '../../redux/authorisation/user_operations';
import { Link, NavLink } from 'react-router-dom';

const UserMenu = ({ loggedInUser, isLoggedIn, logout }) => {
  const logginedUser = useSelector(state => state.authorisation.user);

  const handleLogout = e => {
    logout();
  };

  const loginBtnMarkup = () => {
    const btnState = isLoggedIn ? 'Logout' : 'Login';
    return (
      <Link to={`/${btnState}`}>
        {isLoggedIn ? (
          <Button variant="primary" onClick={handleLogout}>
            Logout
          </Button>
        ) : (
          <Button variant="primary">Login</Button>
        )}
      </Link>
    );
  };

  const registerBtnMarkup = () => {
    return (
      <Link to={`/register`}>
        <Button variant="info">Register</Button>
      </Link>
    );
  };

  return (
    <div className={s.wrapper}>
      {(loggedInUser || logginedUser) && isLoggedIn && (
        <div>
          <ul className={s.privateLinks}>
            <li>
              <NavLink
                exact
                className={s.navLink}
                to="/"
                style={isActive => ({
                  color: isActive ? 'green' : 'rgba(13,110,253,255)',
                })}
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                className={s.navLink}
                to="/contacts"
                style={isActive => ({
                  color: isActive ? 'green' : 'rgba(13,110,253,255)',
                })}
              >
                Contacts
              </NavLink>
            </li>
          </ul>
        </div>
      )}

      <ul className={s.buttonsBlock}>
        <li>
          {' '}
          {(loggedInUser || logginedUser) && isLoggedIn && (
            <span className={s.email}>
              {' '}
              {loggedInUser?.name || logginedUser.name}
            </span>
          )}
        </li>
        <li className={s.loginSection}>{loginBtnMarkup()}</li>
        <li>{!isLoggedIn && registerBtnMarkup()}</li>
      </ul>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    loggedInUser: userSelectors.getUser(state),
    isLoggedIn: userSelectors.getIsLoggedIn(state),
  };
};
const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logoutUser()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
