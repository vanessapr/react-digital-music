import { combineReducers } from 'redux';
import artists from './artists';
import favoriteArtists from './favoriteArtists';
import login from './login';
import users from './users/users';
import user from './users/user';
import newUser from './users/new_user';
import editUser from './users/edit_user';

export default combineReducers({
  artists,
  favoriteArtists,
  login,
  users,
  user,
  newUser,
  editUser
});
