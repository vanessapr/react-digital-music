import { combineReducers } from 'redux';

const data = (state = [], action) => {
  switch (action.type) {
    case 'ADD_FAVORITE_ARTIST_SUCCESS':
      return [...state, action.payload];
    default:
      return state;
  }
}

const errorMessage = (state = null, action) => {
  switch (action.type) {
    case 'ADD_FAVORITE_ARTIST':
    case 'ADD_FAVORITE_ARTIST_SUCCESS':
      return null;
    case 'ADD_FAVORITE_ARTIST_FAILED':
      return action.payload;
    default:
      return state;
  }
}

export default combineReducers({
  data,
  errorMessage
});
