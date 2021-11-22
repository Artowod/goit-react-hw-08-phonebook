import ListElement from './ListElement';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { getContacts } from '../../redux/operations';
import * as selectors from '../../redux/selectors';
import { useEffect } from 'react';
import s from './ContactList.module.css';

const ContactList = ({ contactsList, getInitialContacts, isLoaderActive }) => {
  useEffect(() => {
    getInitialContacts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ul className={s.wrapper}>
      {isLoaderActive && <h2 className={s.loading}>Loading...</h2>}
      {contactsList.map(({ id, name, number }) => {
        return (
          <ListElement
            key={id}
            name={name}
            number={number}
            deleteBtnNameAsId={id}
          />
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  contactsList: PropTypes.array.isRequired,
};

const filteredContactList = function (contacts, filterWord) {
  let result = [];
  result = contacts.filter(item => {
    return item.name.toLowerCase().includes(filterWord.toLowerCase());
  });
  return result;
};

const mapStateToProps = state => {
  return {
    //state props for Filter:
    isLoaderActive: selectors.getLoadingState(state),
    contactsList: filteredContactList(
      selectors.getItems(state),
      selectors.getFilter(state),
    ),
  };
};

const mapDispatchToProps = dispatch => ({
  getInitialContacts: () => dispatch(getContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
