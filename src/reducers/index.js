import { combineReducers } from 'redux';
import artists from './artists';
import favoriteArtists from './favoriteArtists';
import login from './login';
import auth from './auth';
import users from './users/users';
import user from './users/user';
import newUser from './users/new_user';

export default combineReducers({
  artists,
  favoriteArtists,
  login,
  auth,
  users,
  user,
  newUser
});
