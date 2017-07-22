import { combineReducers } from 'redux';

const attr = (state = null, action) => {
  switch (action.type) {
    case 'FETCH_TOP_ARTISTS_SUCCESS':
      return action.payload['@attr'];
    case 'FETCH_TOP_ARTISTS':
    case 'FETCH_TOP_ARTISTS_FAILED':
      return null;
    default:
      return state;
  }
}

const data = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_TOP_ARTISTS_SUCCESS':
      return action.payload.artist;
    default:
      return state;
  }
}

const isLoading = (state = false, action) => {
  switch (action.type) {
    case 'FETCH_TOP_ARTISTS':
      return true;
    case 'FETCH_TOP_ARTISTS_SUCCESS':
    case 'FETCH_TOP_ARTISTS_FAILED':
      return false;
    default:
      return state;
  }
}

const errorMessage = (state = null, action) => {
  switch (action.type) {
    case 'FETCH_TOP_ARTISTS':
    case 'FETCH_TOP_ARTISTS_SUCCESS':
      return null;
    case 'FETCH_TOP_ARTISTS_FAILED':
      return action.payload;
    default:
      return state;
  }
}

export default combineReducers({
  data,
  attr,
  isLoading,
  errorMessage
});
