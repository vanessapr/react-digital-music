import { put, call, takeLatest, takeEvery } from 'redux-saga/effects';
import api from './utils/api';
import { firebaseSignIn, firebaseSignOut } from './utils/firebase';

function* fetchTopArtistsSaga(action) {
  try {
    const artists = yield call(api.getTopArtists);
    yield put({ type: 'FETCH_TOP_ARTISTS_SUCCESS', payload: artists });
  } catch (error) {
    yield put({ type: 'FETCH_TOP_ARTISTS_FAILED', payload: error });
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


export default function* rootSaga() {
  yield takeLatest('FETCH_TOP_ARTISTS', fetchTopArtistsSaga);
  yield takeEvery('AUTH_LOGIN', signInSaga);
  yield takeEvery('AUTH_LOGOUT', signOutSaga);
}
