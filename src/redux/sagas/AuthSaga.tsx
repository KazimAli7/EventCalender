/* eslint-disable no-unused-vars */
import {
  call, put, takeEvery, takeLatest,
} from 'redux-saga/effects';
import { USER_API } from '../../services/axios_api';

import {
  ADD_EVENTDETAIL,
  CREATE_USER, DELETE_EVENTS, GET_EVENTS, LOGIN_CHECK, LOGIN_USER, LOGOUT_USER,
} from '../../services/firebase_api';

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

function* logoutUser() {
  try {
    const apiResponse = yield call(LOGOUT_USER);
    sessionStorage.removeItem('authToken');
    yield put({
      type: 'LOGUT_SUCCESS',
    });
  } catch (error) {
    yield put({
      type: 'LOGUT_FAILED',
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

function* AddEvent(action: any) {
  try {
    const apiResponse = yield call(ADD_EVENTDETAIL, action.payload);
    if (apiResponse) {
      yield put({
        type: 'DUMMY_EVENT',
        payload: action.payload,
      });
    }
  } catch (error) {
    yield put({
      type: 'EVENT_FAILED',
      payload: error,
    });
  }
}

function* GetEvents(action: any) {
  try {
    const apiResponse = yield call(GET_EVENTS, action.payload);
    yield put({
      type: 'EVENTS_DETAILS',
      payload: apiResponse,
    });
  } catch (error) {
    yield put({
      type: 'EVENT_FAILED',
      payload: error,
    });
  }
}

function* DeleteEvent(action: any) {
  try {
    const apiResponse = yield call(DELETE_EVENTS, action.payload);
    yield put({
      type: 'DELETE_SUCCESS',
      payload: action.payload,
    });
  } catch (error) {
    yield put({
      type: 'DELETE_FAILED',
      payload: error,
    });
  }
}

function* GETUSER() {
  const apiResponse = yield call(USER_API);
  yield put({
    type: 'SET_USERS',
    payload: apiResponse,
  });
}
export default function* rootSaga() {
  yield takeEvery('USER_APICALL', GETUSER);
  yield takeEvery('LOGIN_CHECK', checkLogin);
  yield takeEvery('GET_ALLEVENTS', GetEvents);
  yield takeEvery('LOGUT_USER', logoutUser);
  yield takeEvery('ADD_EVENT', AddEvent);
  yield takeLatest('login_user', fetchUser);
  yield takeLatest('create_user', createUser);
  yield takeLatest('DELETE_EVENT', DeleteEvent);
}
