import { createAction } from '@reduxjs/toolkit';

interface NotifyState {
    loggedIn: boolean,
    authError: string
}

const initialState : NotifyState = {
  loggedIn: false,
  authError: '',
};

export const VALUE_UPDATE = createAction('UPDATE_VALUE');
export const LOGIN_FAIL = createAction<any, 'LOGIN_FAILED'>('LOGIN_FAILED');
export const LOGUT_SUCCESS = createAction<any, 'LOGUT_SUCCESS'>('LOGUT_SUCCESS');
export const LOGUT_FAILED = createAction<any, 'LOGUT_FAILED'>('LOGUT_FAILED');

function NotifierReducer(state = initialState, action: any) {
  switch (action.type) {
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
      };
    case 'UPDATE_VALUE':
      return {
        ...state,
        authError: '',
        loggedIn: false,
      };
    default: return state;
  }
}

export default NotifierReducer;
