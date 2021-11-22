/* ---- selectors for mapStateToProps only ! ---- */

export const getItems = state => state.contacts.items;
export const getFilter = state => state.contacts.filter;
export const getLoadingState = state => state.contacts.loading;
