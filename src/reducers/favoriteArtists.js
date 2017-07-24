import { combineReducers } from 'redux';

const data = (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_FAVORITE_ARTISTS_SUCCESS':
      return action.payload;
    default:
      return state;
  }
}

const errorMessage = (state = null, action) => {
  switch (action.type) {
    case 'FETCH_FAVORITE_ARTISTS':
    case 'FETCH_FAVORITE_ARTISTS_SUCCESS':
      return null;
    case 'FETCH_FAVORITE_ARTISTS_FAILED':
      return action.payload;
    default:
      return state;
  }
}

export default combineReducers({
  data,
  errorMessage
});
