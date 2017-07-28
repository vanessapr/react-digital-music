import { put, call, takeLatest, takeEvery } from 'redux-saga/effects';
import notie from 'notie';
import 'notie/dist/notie.css';
import api from './utils/api';
import Artist from './utils/artist';
import User from './utils/user';

function* fetchTopArtistsSaga(action) {
  try {
    const artists = yield call(api.getTopArtists);
    yield put({ type: 'FETCH_TOP_ARTISTS_SUCCESS', payload: artists });
  } catch (error) {
    yield put({ type: 'FETCH_TOP_ARTISTS_FAILED', payload: error });
  }
}

function* addFavoriteArtistSaga({ payload }) {
  try {
    yield call(Artist.addFavorite, payload);
    yield put({ type: 'ADD_FAVORITE_ARTIST_SUCCESS', payload });
    notie.alert({ type: 'success', text: 'Added to your favorites' });
  } catch (error) {
    notie.alert({ type: 'error', text: error.message });
    yield put({ type: 'ADD_FAVORITE_ARTIST_FAILED', payload: error.message });
  }
}

function* removeFavoriteSaga({ payload }) {
  try {
    yield call(Artist.removeFavorite, payload);
    yield put({ type: 'REMOVE_FAVORITE_ARTIST_SUCCESS', payload });
    notie.alert({ type: 'success', text: 'Removed artists of your favorites' });
  } catch(error) {
    notie.alert({ type: 'error', text: error.message });
    yield put({ type: 'REMOVE_FAVORITE_ARTIST_FAILED', payload: error.message });
  }
}

function* fetchFavoriteArtistsSaga(action) {
  try {
    const artists = yield call(Artist.getFavorites);
    yield put({ type: 'FETCH_FAVORITE_ARTISTS_SUCCESS', payload: artists });
  } catch (error) {
    notie.alert({ type: 'error', text: error.message });
    yield put({ type: 'FETCH_FAVORITE_ARTISTS_FAILED', payload: error.message });
  }
}

function* signInSaga(action) {
  try {
    const authData = yield call(User.login, action.payload);
    yield put({ type: 'AUTH_LOGIN_SUCCESS', payload: authData });
    notie.alert({ type: 'success', text: 'Welcome to the React Music.'});
  } catch (error) {
    notie.alert({ type: 'error', text: error.message });
    yield put({ type: 'AUTH_LOGIN_FAILED', payload: error.message });
  }
}

function* signOutSaga(action) {
  try {
    yield call(User.logout);
    yield put({ type: 'AUTH_LOGOUT_SUCCESS' });
    action.payload.push('/login');
  } catch (error) {
    yield put({ type: 'AUTH_LOGOUT_FAILED', error });
  }
}

function* signUpSaga({ payload: { data, history } }) {
  try {
    const user = yield call(User.create, data);
    yield put({ type: 'AUTH_SIGNUP_SUCCESS', payload: { email: data.email, displayName: data.fullName } });
    history.push('/login');
  } catch (error) {
    yield put({ type: 'AUTH_SIGNUP_FAILED', payload: error.message });
    notie.alert({ type: 'error', text: error.message });
  }
}

function* getUsersSaga(action) {
  try {
    const users = yield call(User.getUsers);
    yield put({ type: 'FETCH_USERS_SUCCESS', payload: users });
  } catch (error) {
    yield put({ type: 'FETCH_USERS_FAILED', payload: error.message });
  }
}

function* getUserSaga({ payload }) {
  try {
    const user = yield call(User.getUser, payload);
    yield put({ type: 'FETCH_USER_SUCCESS', payload: user });
  } catch (error) {
    yield put({ type: 'FETCH_USER_FAILED', payload: error.message });
  }
}

function* updateUserSaga({ payload: { data, isProfile } }) {
  try {
    if (isProfile) {
      yield call(User.updateProfile, data);
    } else {
      yield call(api.updateUser, data);
    }
    yield put({ type: 'UPDATE_USER_SUCCESS' });
    notie.alert({ type: 'success', text: 'Updated your profile' });
  } catch (error) {
    yield put({ type: 'UPDATE_USER_FAILED' });
    notie.alert({ type: 'error', text: error.message });
  }
}

function* addUserSaga({ payload }) {
  try {
    yield call(api.addUser, payload);
    yield put({ type: 'ADD_USER_SUCCESS' });
    notie.alert({ type: 'success', text: 'Added user' });
  } catch (error) {
    yield put({ type: 'ADD_USER_FAILED', payload: error.message });
    notie.alert({ type: 'error', text: error.message });
  }
}

function* deleteUserSaga({ payload }) {
  try {
    const data = yield call(api.deleteUser, payload);
    yield put({ type: 'DELETE_USER_SUCCESS', payload: payload });
    notie.alert({ type: 'success', text: data.message });
  } catch (error) {
    yield put({ type: 'DELETE_USER_FAILED', payload: error.message });
    notie.alert({ type: 'error', text: error.message });
  }
}

export default function* rootSaga() {
  yield takeLatest('FETCH_TOP_ARTISTS', fetchTopArtistsSaga);
  yield takeLatest('FETCH_FAVORITE_ARTISTS', fetchFavoriteArtistsSaga);
  yield takeEvery('ADD_FAVORITE_ARTIST', addFavoriteArtistSaga);
  yield takeEvery('REMOVE_FAVORITE_ARTIST', removeFavoriteSaga);
  yield takeEvery('AUTH_LOGIN', signInSaga);
  yield takeEvery('AUTH_LOGOUT', signOutSaga);
  yield takeEvery('AUTH_SIGNUP', signUpSaga);
  yield takeLatest('FETCH_USERS', getUsersSaga);
  yield takeLatest('FETCH_USER', getUserSaga);
  yield takeEvery('UPDATE_USER', updateUserSaga);
  yield takeEvery('ADD_USER', addUserSaga);
  yield takeEvery('DELETE_USER', deleteUserSaga);
}
