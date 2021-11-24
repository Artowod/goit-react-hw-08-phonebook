const getUser = state => state.authorisation.user.user;
const getIsLoggedIn = state => state.authorisation.isLoggedIn;
const getAuthState = state => state.authorisation.authState;

const userSelectors = {
  getUser,
  getIsLoggedIn,
  getAuthState,
};

export default userSelectors;
