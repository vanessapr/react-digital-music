import { combineReducers } from 'redux';
import artists from './artists';
import favoriteArtists from './favoriteArtists';
import login from './login';
import auth from './auth';
import profile from './profile';

export default combineReducers({
  artists,
  favoriteArtists,
  login,
  auth,
  profile
});
