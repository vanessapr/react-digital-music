import { put, call, takeLatest } from 'redux-saga/effects';
import api from './utils/api';

function* fetchTopArtistsSaga(action) {
  try {
    const artists = yield call(api.getTopArtists);
    yield put({ type: 'FETCH_TOP_ARTISTS_SUCCESS', payload: artists });
  } catch (error) {
    yield put({ type: 'FETCH_TOP_ARTISTS_FAILED', payload: error });
  }
}

export default function* rootSaga() {
  yield takeLatest('FETCH_TOP_ARTISTS', fetchTopArtistsSaga);
}
