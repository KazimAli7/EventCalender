import { createAction } from '@reduxjs/toolkit';

interface NotifyState {
    loggedIn: boolean,
    authError: string,
    authToken: string,
}

const initialState : NotifyState = {
  loggedIn: false,
  authError: '',
  authToken: '',
};

export const VALUE_UPDATE = createAction('UPDATE_VALUE');
export const LOGIN_CHECK = createAction('LOGIN_CHECK');
export const LOGIN_FAIL = createAction<any, 'LOGIN_FAILED'>('LOGIN_FAILED');
export const LOGUT_SUCCESS = createAction<any, 'LOGUT_SUCCESS'>('LOGUT_SUCCESS');
export const LOGUT_FAILED = createAction<any, 'LOGUT_FAILED'>('LOGUT_FAILED');
export const PASSWORD_ERROR = createAction<any, 'PASSWORD_ERROR'>('PASSWORD_ERROR');
export const PASSWORD_LENGTH = createAction<any, 'PASSWORD_LENGTH'>('PASSWORD_LENGTH');

function NotifierReducer(state = initialState, action: any) {
  switch (action.type) {
    case 'AUTH_DO_EXIST':
      return {
        ...state,
        authToken: action.payload,
        loggedIn: true,
      };
    case 'AUTH_NOT_EXIST':
      return {
        ...state,
        authToken: action.payload,
        loggedIn: false,
      };
    case 'LOGIN_FAILED':
      return {
        ...state,
        authError: action.payload,
        loggedIn: false,
      };
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        authError: '',
        loggedIn: true,
        authToken: action.payload,
      };
    case 'UPDATE_VALUE':
      return {
        ...state,
        authError: '',
        loggedIn: false,
      };
    case 'PASSWORD_ERROR':
      return {
        ...state,
        authError: 'Passwords do not match',
      };
    case 'USER_CREATED_SUCCESS':
      return {
        ...state,
        authError: '',
        loggedIn: true,
      };
    case 'USER_CREATED_FAILED':
      return {
        ...state,
        authError: action.payload,
        loggedIn: false,
      };
    case 'PASSWORD_LENGTH':
      return {
        ...state,
        authError: 'Password should be 8 digit long',
      };
    default: return state;
  }
}

export default NotifierReducer;
