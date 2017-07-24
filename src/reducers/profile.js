import { combineReducers } from 'redux';

const info = (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_PROFILE_SUCCESS':
      return action.payload;
    default:
      return state;
  }
}

const isLoading = (state = false, action) => {
  switch (action.type) {
    case 'FETCH_PROFILE_SUCCESS':
    case 'FETCH_PROFILE_FAILED':
      return false;
    case 'FETCH_PROFILE':
      return true;
    default:
      return state;
  }
}

const errorMessage = (state = null, action) => {
  switch (action.type) {
    case 'FETCH_PROFILE_FAILED':
      return action.payload;
    case 'FETCH_PROFILE_SUCCESS':
    case 'FETCH_PROFILE':
      return null;
    default:
      return state;
  }
}

export default combineReducers({
  info,
  isLoading,
  errorMessage
});
