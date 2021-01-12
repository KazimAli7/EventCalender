/* eslint-disable require-yield */
/* eslint-disable no-console */
import { takeEvery, takeLatest } from 'redux-saga/effects';
// import { USER_API } from '../../services/axios_api';

function* OpenEventModal() {
  console.log('action call check');
}

function* GetUsers() {
  // const apiResponse = yield call(USER_API);
  console.log('action call check');
}

export default function* EventSaga() {
  yield takeEvery('ADD_EVENT', GetUsers);
  yield takeLatest('OPEN_ADDMODAL', OpenEventModal);
}
