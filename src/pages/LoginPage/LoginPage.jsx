import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import { useState } from 'react';

import s from './LoginPage.module.css';
import CardHeader from 'react-bootstrap/esm/CardHeader';
import Card from 'react-bootstrap/esm/Card';
const LoginPage = () => {
  const inputEmailProps = {
    type: 'email',
    name: 'email',
  };

  const inputPasswordProps = {
    type: 'password',
    name: 'password',
  };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleInput = e => {
    console.log(e.target.value);
    const { value, name } = e.target;

    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;

      default:
        return;
    }
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    /* REQUEST TO SERVER  - POST /users/signup */

    /*======================================== */
    reset();
  };

  const reset = () => {
    setEmail('');
    setPassword('');
  };

  const addBtnActiveMarkup = () => {
    return (
      <Button variant="outline-primary" type="submit">
        Login
      </Button>
    );
  };

  const addBtnInactiveMarkup = () => {
    return (
      <Button variant="outline-primary" type="submit" disabled>
        Login
      </Button>
    );
  };

  const inputMarkup = (name, value, inputProps) => {
    return (
      <InputGroup size="lg" className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">{name}</InputGroup.Text>
        <FormControl
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          value={value}
          required
          {...inputProps}
          onChange={handleInput}
        />
      </InputGroup>
    );
  };
  return (
    <Card>
      <CardHeader as="h4">Login form</CardHeader>
      <form className={s.loginForm} onSubmit={handleFormSubmit}>
        <div className={s.emailBlock}>
          {inputMarkup('Email', email, inputEmailProps)}
        </div>
        <div className={s.passwordBlock}>
          {inputMarkup('Password', password, inputPasswordProps)}
        </div>
        {email && password ? addBtnActiveMarkup() : addBtnInactiveMarkup()}
      </form>
    </Card>
  );
};

export default LoginPage;
