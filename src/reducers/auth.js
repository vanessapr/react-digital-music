import { combineReducers } from 'redux';

const user = (state = null, action) => {
  switch (action.type) {
    case 'AUTH_STATUS_SUCCESS':
      return action.payload;
    case 'AUTH_STATUS_FAILED':
      return null;
    default:
      return state;
  }
}

const isLoading = (state = false, action) => {
  switch (action.type) {
    case 'AUTH_STATUS_SUCCESS':
    case 'AUTH_STATUS_FAILED':
      return false;
    case 'AUTH_STATUS':
      return true;
    default:
      return state;
  }
}

export default combineReducers({
  user,
  isLoading
});
