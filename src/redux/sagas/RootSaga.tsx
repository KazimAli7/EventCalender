/* eslint-disable require-yield */
import {
  call, put, takeEvery, takeLatest,
} from 'redux-saga/effects';

import { CREATE_USER, LOGIN_CHECK, LOGIN_USER } from '../../services/firebase_api';

function* checkLogin() {
  try {
    const apiResponse = yield call(LOGIN_CHECK);
    if (apiResponse) {
      sessionStorage.setItem('authToken', apiResponse);
      yield put({
        type: 'AUTH_DO_EXIST',
        payload: apiResponse,
      });
    }
  } catch (error) {
    yield put({
      type: 'AUTH_NOT_EXIST',
      payload: error,
    });
  }
}

function* fetchUser(action: any) {
  try {
    const apiResponse = yield call(LOGIN_USER, action.payload);
    if (apiResponse) {
      sessionStorage.setItem('authToken', apiResponse);
      yield put({
        type: 'LOGIN_SUCCESS',
        payload: apiResponse,
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
  yield takeEvery('LOGIN_CHECK', checkLogin);
  yield takeLatest('login_user', fetchUser);
  yield takeLatest('create_user', createUser);
}
