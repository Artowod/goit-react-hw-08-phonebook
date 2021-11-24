import './App.css';
import Card from 'react-bootstrap/Card';
import s from './App.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserMenu from './components/UserMenu';
import { Switch, Redirect } from 'react-router';
import WelcomePage from './pages/WelcomePage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import ContactsPage from './pages/ContactsPage';
import PublicRoute from './components/PublicRoute/';
import PrivateRoute from './components/PrivateRoute/';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { currentUser } from './redux/authorisation/user_operations';
const App = ({ checkCurrentUser }) => {
  useEffect(() => {
    checkCurrentUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="App">
      <Card className={s.parentWrapper}>
        <Card.Header as="h1" className={s.mainHeader}>
          Phonebook
          <UserMenu />
        </Card.Header>
        <Switch>
          <PublicRoute path="/" exact>
            <WelcomePage />
          </PublicRoute>
          <PublicRoute restricted path="/register">
            <RegisterPage />
          </PublicRoute>
          <PublicRoute restricted path="/login">
            <LoginPage />
          </PublicRoute>
          <PrivateRoute path="/contacts">
            <ContactsPage />
          </PrivateRoute>
          <Redirect to="/" />
        </Switch>
      </Card>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    checkCurrentUser: () => dispatch(currentUser()),
  };
};

export default connect(null, mapDispatchToProps)(App);
