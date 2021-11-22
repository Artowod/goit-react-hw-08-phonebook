import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import {
  getContactsRequest,
  getContactsSuccess,
  getContactsError,
  addItemRequest,
  addItemSuccess,
  addItemError,
  changeFilter,
  removeItemRequest,
  removeItemSuccess,
  removeItemError,
} from './actions';

const itemsReducer = createReducer([], {
  [getContactsSuccess]: (_, { payload }) => payload,

  [addItemSuccess]: (state, { payload }) => [...state, payload],

  [removeItemSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filterReducer = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

const loadingReducer = createReducer(false, {
  [getContactsRequest]: () => true,
  [getContactsSuccess]: () => false,
  [getContactsError]: () => false,

  [addItemRequest]: () => true,
  [addItemSuccess]: () => false,
  [addItemError]: () => false,

  [removeItemRequest]: () => true,
  [removeItemSuccess]: () => false,
  [removeItemError]: () => false,
});

const contactsReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
  loading: loadingReducer,
});

export default contactsReducer;
