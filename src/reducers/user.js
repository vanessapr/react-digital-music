import { combineReducers } from 'redux';

const data = (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_USER_SUCCESS':
      return action.payload;
    default:
      return state;
  }
}

const isLoading = (state = false, action) => {
  switch (action.type) {
    case 'FETCH_USER_SUCCESS':
    case 'FETCH_USER_FAILED':
      return false;
    case 'FETCH_USER':
      return true;
    default:
      return state;
  }
}

const errorMessage = (state = null, action) => {
  switch (action.type) {
    case 'FETCH_USER_FAILED':
      return action.payload;
    case 'FETCH_USER_SUCCESS':
    case 'FETCH_USER':
      return null;
    default:
      return state;
  }
}

export default combineReducers({
  data,
  isLoading,
  errorMessage
});
