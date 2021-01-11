/* eslint-disable require-yield */
import { call, put, takeLatest } from 'redux-saga/effects';
import LOGIN_USER from '../../services/firebase_api';

function* fetchUser(action: any) {
  try {
    const apiResponse = yield call(LOGIN_USER, action.payload);
    if (apiResponse) {
      yield put({
        type: 'LOGIN_SUCCESS',
      });
    } else {
      yield put({
        type: 'LOGIN_FAILED',
        payload: 'Credientials are in correct.',
      });
    }
  } catch (error) {
    yield put({
      type: 'LOGIN_FAILED',
      payload: 'Credientials are in correct.',
    });
  }
}

export default function* root() {
  yield takeLatest('login_user', fetchUser);
}
