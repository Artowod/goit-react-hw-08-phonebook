import './App.css';
import Card from 'react-bootstrap/Card';
import s from './App.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserMenu from './components/UserMenu';
import { Route, Switch, Redirect } from 'react-router';
import WelcomePage from './pages/WelcomePage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import ContactsPage from './pages/ContactsPage';
const App = () => {
  return (
    <div className="App">
      <Card className={s.parentWrapper}>
        <Card.Header as="h1" className={s.mainHeader}>
          Phonebook
          <UserMenu />
        </Card.Header>
        <Switch>
          <Route path="/" exact>
            <WelcomePage />
          </Route>
          <Route path="/register" exact>
            <RegisterPage />
          </Route>
          <Route path="/login" exact>
            <LoginPage />
          </Route>
          <Route path="/contacts" exact>
            <ContactsPage />
          </Route>
          <Redirect to="/" />
        </Switch>
      </Card>
    </div>
  );
};

export default App;
