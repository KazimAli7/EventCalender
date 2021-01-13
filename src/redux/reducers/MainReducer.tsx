/* eslint-disable no-unused-vars */
/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
import { createAction, createReducer } from '@reduxjs/toolkit';
import moment from 'moment';

export const OPEN_EVENTMODAL = createAction<boolean, 'OPEN_EVENTMODAL'>('OPEN_EVENTMODAL');
export const CLOSE_EVENTMODAL = createAction<boolean, 'CLOSE_EVENTMODAL'>('CLOSE_EVENTMODAL');
export const ADD_TITLE = createAction<string, 'ADD_TITLE'>('ADD_TITLE');
export const START_DATE = createAction<string, 'START_DATE'>('START_DATE');
export const END_DATE = createAction<string, 'END_DATE'>('END_DATE');
export const TIME_SLOT = createAction<any, 'TIME_SLOT'>('TIME_SLOT');
export const ADD_EVENT = createAction<any, 'ADD_EVENT'>('ADD_EVENT');
export const EVENT_SUCCESS = createAction<any, 'EVENT_SUCCESS'>('EVENT_SUCCESS');
export const GET_ALLEVENTS = createAction<any, 'GET_ALLEVENTS'>('GET_ALLEVENTS');
export const EVENTS_DETAILS = createAction<[], 'EVENTS_DETAILS'>('EVENTS_DETAILS');

export interface MainState {
  events: any,
  isOpen: boolean,
  title: string,
  start: Date,
  end: Date,
  TimeSlot: [],
}

const initialState : MainState = {
  events: [],
  isOpen: false,
  title: '',
  start: new Date(),
  end: new Date(),
  TimeSlot: [],
};

const MainReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(OPEN_EVENTMODAL, (state, action) => ({
      ...state,
      isOpen: action.payload,
    }))
    .addCase(ADD_TITLE, (state, action) => ({
      ...state,
      title: action.payload,
    }))
    .addCase(START_DATE, (state, action) => ({
      ...state,
      start: new Date(action.payload),
    }))
    .addCase(END_DATE, (state, action) => ({
      ...state,
      end: new Date(action.payload),
    }))
    .addCase(CLOSE_EVENTMODAL, (state, action) => ({
      ...state,
      isOpen: action.payload,
    }))
    .addCase('EVENT_SUCCESS', (state, action) => ({
      ...state,
      isOpen: false,
      TimeSlot: [],
      EventTitle: '',
    }))
    .addCase(EVENTS_DETAILS, (state, action) => ({
      ...state,
      events: action.payload,
      isOpen: false,
    }))
    .addDefaultCase((state: any) => state);
});

export default MainReducer;
