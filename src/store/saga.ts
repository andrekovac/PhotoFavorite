import { call, put, takeLatest } from "redux-saga/effects";

import {
  fetchPhotosError,
  fetchPhotosStart,
  fetchPhotosSuccess,
} from "../store/slices/photos";

import { fetchPhotos } from "../api/photos";

// Worker Saga: Will be fired when fetchPhotosStart action is dispatched
function* fetchData() {
  try {
    const photos = yield call(fetchPhotos);
    yield put(fetchPhotosSuccess(photos));
  } catch (error) {
    yield put(fetchPhotosError(error));
  }
}

function* fetchSaga() {
  yield takeLatest(fetchPhotosStart.type, fetchData);
}

export default fetchSaga;
