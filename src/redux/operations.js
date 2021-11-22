import axios from 'axios';
import {
  getContactsRequest,
  getContactsSuccess,
  getContactsError,
  addItemRequest,
  addItemSuccess,
  addItemError,
  removeItemRequest,
  removeItemSuccess,
  removeItemError,
} from './actions';

axios.defaults.baseURL = 'http://localhost:3333';

export const getContacts = () => dispatch => {
  dispatch(getContactsRequest());
  axios
    .get('/contacts')
    .then(({ data }) => dispatch(getContactsSuccess(data)))
    .catch(error => dispatch(getContactsError(error)));
};

export const addItem =
  ({ name, number }) =>
  dispatch => {
    const item = {
      name,
      number,
    };

    dispatch(addItemRequest());

    axios
      .post('/contacts/', item)
      .then(({ data }) => dispatch(addItemSuccess(data)))
      .catch(error => {
        dispatch(addItemError(error));
      });
  };

export const removeItem = id => dispatch => {
  dispatch(removeItemRequest());

  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(removeItemSuccess(id)))
    .catch(error => {
      dispatch(removeItemError(error));
    });
};
