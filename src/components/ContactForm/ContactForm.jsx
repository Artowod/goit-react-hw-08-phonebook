import { v4 as uuidv4 } from 'uuid';
import '../../App';
import { useState } from 'react';
import PropTypes from 'prop-types';
import s from './ContactForm.module.css';
import { connect } from 'react-redux';
import { addItem } from '../../redux/operations';
import * as selectors from '../../redux/selectors';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import 'bootstrap/dist/css/bootstrap.min.css';

const ContactForm = ({ items, addNewContact, isLoaderActive }) => {
  const labelNameId = uuidv4();
  const labelNumberId = uuidv4();

  const inputNameProps = {
    id: labelNameId,
    type: 'text',
    name: 'name',
    pattern: "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
    title:
      "Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п.",
  };

  const inputNumberProps = {
    id: labelNumberId,
    type: 'tel',
    name: 'number',
    pattern:
      '\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}',
    title:
      'Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +',
  };

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleInput = e => {
    const { value, name } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    isNewContactValid({ id: uuidv4() });
    reset();
  };

  const isNewContactValid = ({ id }) => {
    const matchedContactsList = items.filter(item => {
      return item.name.toLowerCase() === name.toLowerCase();
    });
    if (matchedContactsList.length !== 0) {
      alert(`${name} is already in contacts.`);
    } else {
      addNewContact({ id, name, number });
    }
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  const addBtnActiveMarkup = () => {
    return (
      <Button variant="outline-primary" type="submit">
        Add contact{' '}
      </Button>
    );
  };

  const addBtnInactiveMarkup = () => {
    return (
      <Button variant="outline-primary" type="submit" disabled>
        Add contact{' '}
      </Button>
    );
  };

  return (
    <form className={s.contactForm} onSubmit={handleFormSubmit}>
      <div className={s.nameBlock}>
        <InputGroup size="lg" className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-default">
            Contact Name
          </InputGroup.Text>
          <FormControl
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            value={name}
            required
            {...inputNameProps}
            onChange={handleInput}
          />
        </InputGroup>
      </div>
      <div className={s.numberBlock}>
        <InputGroup size="lg" className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-default">
            Phone Number
          </InputGroup.Text>
          <FormControl
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            value={number}
            required
            {...inputNumberProps}
            onChange={handleInput}
          />
        </InputGroup>
      </div>
      {name && number ? addBtnActiveMarkup() : addBtnInactiveMarkup()}
    </form>
  );
};

ContactForm.propTypes = {
  items: PropTypes.array.isRequired,
  addNewContact: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {
    isLoaderActive: selectors.getLoadingState(state),
    items: selectors.getItems(state),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addNewContact: newContact => dispatch(addItem(newContact)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
