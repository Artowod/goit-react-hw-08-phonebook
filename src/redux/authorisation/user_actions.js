import { createAction } from '@reduxjs/toolkit';

export const registerUserRequest = createAction('users/registerUserRequest');
export const registerUserSuccess = createAction('users/registerUserSuccess');
export const registerUserError = createAction('users/registerUserError');

export const loginUserRequest = createAction('users/loginUserRequest');
export const loginUserSuccess = createAction('users/loginUserSuccess');
export const loginUserError = createAction('users/loginUserError');

export const logoutUserRequest = createAction('users/logoutUserRequest');
export const logoutUserSuccess = createAction('users/logoutUserSuccess');
export const logoutUserError = createAction('users/logoutUserError');

export const getUserInfoRequest = createAction('users/getUserInfoRequest');
export const getUserInfoSuccess = createAction('users/getUserInfoSuccess');
export const getUserInfoError = createAction('users/getUserInfoError');
