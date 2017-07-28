import { combineReducers } from 'redux';

const data = (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_USERS_SUCCESS':
      return action.payload;
    default:
      return state;
  }
}

const isLoading = (state = false, action) => {
  switch (action.type) {
    case 'FETCH_USERS_SUCCESS':
    case 'FETCH_USERS_FAILED':
      return false;
    case 'FETCH_USERS':
      return true;
    default:
      return state;
  }
}

const errorMessage = (state = null, action) => {
  switch (action.type) {
    case 'FETCH_USERS':
    case 'FETCH_USERS_SUCCESS':
      return null;
    case 'FETCH_USERS_FAILED':
      return action.payload;
    default:
      return state;
  }
}

export default combineReducers({
  data,
  isLoading,
  errorMessage
});
