/* eslint-disable require-yield */
/* eslint-disable no-console */
import { takeEvery, takeLatest } from 'redux-saga/effects';

function* OpenEventModal() {
  console.log('action call check');
}

function* GetUsers() {
  console.log('action call check');
}

export default function* EventSaga() {
  yield takeEvery('ADD_EVENT', GetUsers);
  yield takeLatest('OPEN_ADDMODAL', OpenEventModal);
}
