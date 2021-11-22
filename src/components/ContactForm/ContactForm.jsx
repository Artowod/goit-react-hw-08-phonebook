import { v4 as uuidv4 } from 'uuid';
import '../../App';
import { useState } from 'react';
import PropTypes from 'prop-types';
import s from './ContactForm.module.css';
import { connect } from 'react-redux';
import { addItem } from '../../redux/operations';
import * as selectors from '../../redux/selectors';

const ContactForm = ({ items, addNewContact }) => {
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

  return (
    <form className={s.contactForm} onSubmit={handleFormSubmit}>
      <div className={s.nameBlock}>
        <label htmlFor={labelNameId} className={s.labelName}>
          Name
        </label>
        <input
          value={name}
          required
          {...inputNameProps}
          onChange={handleInput}
        />
      </div>
      <div className={s.numberBlock}>
        <label htmlFor={labelNumberId} className={s.labelNumber}>
          Number
        </label>

        <input
          value={number}
          required
          {...inputNumberProps}
          onChange={handleInput}
        />
      </div>
      <button type="submit">Add contact </button>
    </form>
  );
};

ContactForm.propTypes = {
  items: PropTypes.array.isRequired,
  addNewContact: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {
    items: selectors.getItems(state),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addNewContact: newContact => dispatch(addItem(newContact)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
