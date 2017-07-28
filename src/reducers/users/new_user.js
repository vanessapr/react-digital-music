import { combineReducers } from 'redux';

const isLoading = (state = false, action) => {
  switch (action.type) {
    case 'ADD_USER_SUCCESS':
    case 'ADD_USER_FAILED':
      return false;
    case 'ADD_USER':
      return true;
    default:
      return state;
  }
}

export default combineReducers({
  isLoading
});
