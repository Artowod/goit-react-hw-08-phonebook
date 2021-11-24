import axios from 'axios';
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
import Notiflix from 'notiflix';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';
const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const handleLocalStorage = (token = null, isLogout) => {
  if (!token && isLogout) {
    localStorage.removeItem('userToken');
  }
  if (localStorage.getItem('userToken')) {
    return localStorage.getItem('userToken');
  }
  if (token) {
    localStorage.setItem('userToken', token);
    return token;
  }
  return '';
};

export const registerUser =
  ({ name, email, password }) =>
  dispatch => {
    const newUser = {
      name,
      email,
      password,
    };

    dispatch(registerUserRequest());

    axios
      .post('/users/signup', newUser)
      .then(({ data }) => {
        handleLocalStorage(data.token);
        token.set(data.token);
        dispatch(registerUserSuccess(data));
        dispatch(loginUserSuccess(data));
      })
      .then(() => {
        Notiflix.Report.success('Registering Succeeded!', '');
      })
      .catch(error => {
        Notiflix.Report.failure('Registering Error!', error.toString());
        dispatch(registerUserError(error.toString()));
      });
  };

export const loginUser =
  ({ email, password }) =>
  dispatch => {
    const login = {
      email,
      password,
    };

    dispatch(loginUserRequest());

    axios
      .post('/users/login', login)
      .then(({ data }) => {
        token.set(data.token);
        handleLocalStorage(data.token);

        dispatch(loginUserSuccess(data));
      })
      .then(() => {
        Notiflix.Report.success('Login Succeeded!', '');
      })
      .catch(error => {
        Notiflix.Report.failure('Login Error!', error.toString());
        dispatch(loginUserError(error.toString()));
      });
  };

export const logoutUser = () => dispatch => {
  dispatch(logoutUserRequest());

  axios
    .post('/users/logout')
    .then(({ data }) => {
      token.unset();
      handleLocalStorage(null, true);

      dispatch(logoutUserSuccess(data));
    })
    .then(() => {
      Notiflix.Report.success('Logout Succeeded!', '');
    })
    .catch(error => {
      Notiflix.Report.failure('Logout Error!', error.toString());
      dispatch(logoutUserError(error.toString()));
    });
};

export const currentUser = () => dispatch => {
  if (handleLocalStorage()) {
    dispatch(getUserInfoRequest());
    token.set(handleLocalStorage(null, false));
    axios
      .get('/users/current')
      .then(({ data }) => {
        const ourData = {
          ...data,
          token: handleLocalStorage(),
        };
        dispatch(getUserInfoSuccess(ourData));
      })
      .catch(error => {
        Notiflix.Report.failure('Initial Login Error!', error.toString());
        dispatch(getUserInfoError(error.toString()));
      });
  } else return;
};
