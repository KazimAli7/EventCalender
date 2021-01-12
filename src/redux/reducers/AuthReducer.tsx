import { createAction, createReducer } from '@reduxjs/toolkit';

export const SET_EMAIL = createAction<string, 'set_email'>('set_email');
export const SET_PASSWORD = createAction<string, 'set_password'>('set_password');
export const SET_FIRSTNAME = createAction<string, 'set_firstName'>('set_firstName');
export const SET_LASTNAME = createAction<string, 'set_lastName'>('set_lastName');
export const SET_CONFPASSWORD = createAction<string, 'set_confpassword'>('set_confpassword');
export const LOGIN_USER = createAction<any, 'login_user'>('login_user');
export const CREATE_USER = createAction<any, 'create_user'>('create_user');

export interface AuthState {
  email: string,
  password: string,
  firstName: string,
  lastName: string,
  confPassword: string,
}
const initialState : AuthState = {
  email: '',
  password: '',
  firstName: '',
  lastName: '',
  confPassword: '',
};

const AuthReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(SET_EMAIL, (state, action) => ({
      ...state,
      email: action.payload,
    }))
    .addCase(SET_FIRSTNAME, (state, action) => ({
      ...state,
      firstName: action.payload,
    }))
    .addCase(SET_LASTNAME, (state, action) => ({
      ...state,
      lastName: action.payload,
    }))
    .addCase(SET_CONFPASSWORD, (state, action) => ({
      ...state,
      confPassword: action.payload,
    }))
    .addCase(SET_PASSWORD, (state, action) => ({
      ...state,
      password: action.payload,
    }))
    .addDefaultCase((state: any) => state);
});

export default AuthReducer;
