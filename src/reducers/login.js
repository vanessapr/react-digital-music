import { combineReducers } from 'redux';

const isLoggedIn = (state = !!localStorage.getItem('firebase'), action) => {
  switch (action.type) {
    case 'AUTH_STATUS_SUCCESS':
    case 'AUTH_LOGIN_SUCCESS':
      return true;
    case 'AUTH_STATUS_FAILED':
    case 'AUTH_LOGIN_FAILED':
    case 'AUTH_LOGOUT_SUCCESS':
      return false;
    default:
      return state;
  }
}

const isLoading = (state = false, action) => {
  switch (action.type) {
    case 'AUTH_LOGIN':
      return true;
    case 'AUTH_LOGIN_SUCCESS':
    case 'AUTH_LOGIN_FAILED':
      return false;
    default:
      return state;
  }
}

const errorMessage = (state = null, action) => {
  switch (action.type) {
    case 'AUTH_LOGIN':
    case 'AUTH_LOGIN_SUCCESS':
      return null;
    case 'AUTH_LOGIN_FAILED':
      return action.payload;
    default:
      return state;
  }
}

export default combineReducers({
  isLoggedIn,
  isLoading,
  errorMessage
});
