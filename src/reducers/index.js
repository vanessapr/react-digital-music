import { combineReducers } from 'redux';
import artists from './artists';
import favoriteArtists from './favoriteArtists';
import login from './login';
import auth from './auth';
import users from './users';
import user from './user';

export default combineReducers({
  artists,
  favoriteArtists,
  login,
  auth,
  users,
  user
});
