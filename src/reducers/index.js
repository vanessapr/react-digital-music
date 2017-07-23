import { combineReducers } from 'redux';
import artists from './artists';
import login from './login';
import auth from './auth';

export default combineReducers({
  artists,
  login,
  auth
});
