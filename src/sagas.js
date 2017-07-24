import { put, call, takeLatest, takeEvery } from 'redux-saga/effects';
import notie from 'notie';
import 'notie/dist/notie.css';
import api from './utils/api';
import { firebaseSignIn, firebaseSignOut } from './utils/firebase';
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
    const authData = yield call(firebaseSignIn, action.payload);
    yield put({ type: 'AUTH_LOGIN_SUCCESS', payload: authData });
  } catch (error) {
    yield put({ type: 'AUTH_LOGIN_FAILED', payload: error });
  }
}

function* signOutSaga(action) {
  try {
    yield call(firebaseSignOut);
    yield put({ type: 'AUTH_LOGOUT_SUCCESS' });
    action.payload.push('/login');
  } catch (error) {
    yield put({ type: 'AUTH_LOGOUT_FAILED', error });
  }
}

function* updateProfileSaga({ payload }) {
  try {
    yield call(User.updateProfile, payload);
    notie.alert({ type: 'success', text: 'Updated your profile' });
  } catch (error) {
    notie.alert({ type: 'error', text: error.message });
  }
}

function* getProfileSaga() {
  try {
    const user = yield call(User.getProfile);
    yield put({ type: 'FETCH_PROFILE_SUCCESS', payload: user });
  } catch (error) {
    yield put({ type: 'FETCH_PROFILE_FAILED', payload: error.message });
  }
}


export default function* rootSaga() {
  yield takeLatest('FETCH_TOP_ARTISTS', fetchTopArtistsSaga);
  yield takeLatest('FETCH_FAVORITE_ARTISTS', fetchFavoriteArtistsSaga);
  yield takeEvery('ADD_FAVORITE_ARTIST', addFavoriteArtistSaga);
  yield takeEvery('REMOVE_FAVORITE_ARTIST', removeFavoriteSaga);
  yield takeEvery('AUTH_LOGIN', signInSaga);
  yield takeEvery('AUTH_LOGOUT', signOutSaga);
  yield takeEvery('UPDATE_PROFILE', updateProfileSaga);
  yield takeLatest('FETCH_PROFILE', getProfileSaga);
}
