import { createAction } from '@reduxjs/toolkit';

export const getContactsRequest = createAction('items/getContactsRequest');
export const getContactsSuccess = createAction('items/getContactsSuccess');
export const getContactsError = createAction('items/getContactsError');

export const changeFilter = createAction('filter/changeFilter');

export const addItemRequest = createAction('items/addItemRequest');
export const addItemSuccess = createAction('items/addItemSuccess');
export const addItemError = createAction('items/addItemError');

export const removeItemRequest = createAction('items/removeItemRequest');
export const removeItemSuccess = createAction('items/removeItemSuccess');
export const removeItemError = createAction('items/removeItemError');

export const filterItemsRequest = createAction('items/filterItemsRequest');
export const filterItemsSuccess = createAction('items/filterItemsSuccess');
export const filterItemsError = createAction('items/filterItemsError');
