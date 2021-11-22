//---------redux-------------
//import { createStore } from 'redux';
//import rootReducer from './reducers';
//import { composeWithDevTools } from 'redux-devtools-extension';
//---------------------------

import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './reducers';
import logger from 'redux-logger';

const myMiddleware = store => next => action => {
  console.log('my MiddleWare - for testing only ');
  next(action);
};

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(myMiddleware).concat(logger),
});

export default store;
