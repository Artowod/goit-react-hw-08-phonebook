import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import {
  registerUserRequest,
  registerUserSuccess,
  registerUserError,
  loginUserRequest,
  loginUserSuccess,
  loginUserError,
  logoutUserRequest,
  logoutUserSuccess,
  logoutUserError,
  getUserInfoRequest,
  getUserInfoSuccess,
  getUserInfoError,
} from './user_actions';

const user = createReducer([], {
  [registerUserSuccess]: (state, { payload }) => {
    return {
      ...state,
      user: payload,
      token: payload.token,
    };
  },

  [loginUserSuccess]: (_, { payload }) => payload,

  [logoutUserSuccess]: (_, { payload }) => payload,

  [getUserInfoSuccess]: (_, { payload }) => payload,
});

const isLoggedInReducer = createReducer(false, {
  [loginUserSuccess]: () => true,
  [logoutUserSuccess]: () => false,
  [getUserInfoSuccess]: () => true,
});

const authStateReducer = createReducer('', {
  [registerUserError]: (_, { payload }) => payload,
  [loginUserError]: (_, { payload }) => payload,
  [logoutUserError]: (_, { payload }) => payload,

  [logoutUserSuccess]: () => 'You have succesfully logged out. Good luck!',
  [loginUserSuccess]: () => 'Welcome back to Phonebook!',
  [registerUserSuccess]: () => 'You have succesfully registered!',
});

const loadingReducer = createReducer(false, {
  [registerUserRequest]: () => true,
  [registerUserSuccess]: () => false,
  [registerUserError]: () => false,

  [loginUserRequest]: () => true,
  [loginUserSuccess]: () => false,
  [loginUserError]: () => false,

  [logoutUserRequest]: () => true,
  [logoutUserSuccess]: () => false,
  [logoutUserError]: () => false,

  [getUserInfoRequest]: () => true,
  [getUserInfoSuccess]: () => false,
  [getUserInfoError]: () => false,
});

const authorisationReducer = combineReducers({
  user,
  loading: loadingReducer,
  isLoggedIn: isLoggedInReducer,
  authState: authStateReducer,
});

export default authorisationReducer;
