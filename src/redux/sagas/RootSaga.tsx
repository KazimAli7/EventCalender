/* eslint-disable require-yield */
import { call, put, takeLatest } from 'redux-saga/effects';

import { CREATE_USER, LOGIN_USER } from '../../services/firebase_api';

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

function* createUser(action: any) {
  try {
    const apiResponse = yield call(CREATE_USER, action.payload);
    if (!apiResponse.code) {
      yield put({
        type: 'USER_CREATED_SUCCESS',
      });
    } else {
      yield put({
        type: 'USER_CREATED_FAILED',
        payload: apiResponse.message,
      });
    }
  } catch (error) {
    yield put({
      type: 'USER_CREATED_FAILED',
      payload: error,
    });
  }
}

export default function* root() {
  yield takeLatest('login_user', fetchUser);
  yield takeLatest('create_user', createUser);
}
