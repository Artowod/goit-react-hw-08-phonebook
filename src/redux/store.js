import { configureStore } from '@reduxjs/toolkit';
import authorisationReducer from './authorisation/user_reducers';
import contactsReducer from './reducers';
import logger from 'redux-logger';

const myMiddleware = store => next => action => {
  /*  console.log('my MiddleWare - for testing only '); */
  next(action);
};

const store = configureStore({
  reducer: {
    authorisation: authorisationReducer,
    contacts: contactsReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(myMiddleware).concat(logger),
});

export default store;
