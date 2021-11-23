import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import { useState } from 'react';

import s from './RegisterPage.module.css';
import CardHeader from 'react-bootstrap/esm/CardHeader';
import Card from 'react-bootstrap/esm/Card';
const RegisterPage = () => {
  const inputNameProps = {
    type: 'text',
    name: 'name',
    pattern: "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
    title:
      "Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п.",
  };

  const inputEmailProps = {
    type: 'email',
    name: 'email',
  };

  const inputPasswordProps = {
    type: 'password',
    name: 'password',
  };

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleInput = e => {
    console.log(e.target.value);
    const { value, name } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
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
    setName('');
    setEmail('');
    setPassword('');
  };

  const addBtnActiveMarkup = () => {
    return (
      <Button variant="outline-primary" type="submit">
        Add new User
      </Button>
    );
  };

  const addBtnInactiveMarkup = () => {
    return (
      <Button variant="outline-primary" type="submit" disabled>
        Add new User
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
      <CardHeader as="h4">Registration form</CardHeader>
      <form className={s.registerForm} onSubmit={handleFormSubmit}>
        <div className={s.nameBlock}>
          {inputMarkup('Contact Name', name, inputNameProps)}
        </div>
        <div className={s.emailBlock}>
          {inputMarkup('Email', email, inputEmailProps)}
        </div>
        <div className={s.passwordBlock}>
          {inputMarkup('Password', password, inputPasswordProps)}
        </div>
        {name && email && password
          ? addBtnActiveMarkup()
          : addBtnInactiveMarkup()}
      </form>
    </Card>
  );
};

export default RegisterPage;
