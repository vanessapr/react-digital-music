import { combineReducers } from 'redux';
import uuidv1 from 'uuid/v1';

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

const data = (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_TOP_ARTISTS_SUCCESS':
      let newData = {};
      action.payload.artist.forEach(item => {
        let uuid = uuidv1();
        item.uuid = uuid;
        item.image = item.image[2]['#text'];
        newData[uuid] = item;
      });
      return newData;

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
