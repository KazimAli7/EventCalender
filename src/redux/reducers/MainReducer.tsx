/* eslint-disable no-unused-vars */
/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
import { createAction, createReducer } from '@reduxjs/toolkit';

export const OPEN_EVENTMODAL = createAction<boolean, 'OPEN_EVENTMODAL'>('OPEN_EVENTMODAL');
export const CLOSE_EVENTMODAL = createAction<boolean, 'CLOSE_EVENTMODAL'>('CLOSE_EVENTMODAL');
export const ADD_TITLE = createAction<string, 'ADD_TITLE'>('ADD_TITLE');
export const START_DATE = createAction<Date, 'START_DATE'>('START_DATE');
export const END_DATE = createAction<Date, 'END_DATE'>('END_DATE');
export const TIME_SLOT = createAction<any, 'TIME_SLOT'>('TIME_SLOT');
export const ADD_EVENT = createAction<any, 'ADD_EVENT'>('ADD_EVENT');
export const EVENT_SUCCESS = createAction<any, 'EVENT_SUCCESS'>('EVENT_SUCCESS');
export const GET_ALLEVENTS = createAction<any, 'GET_ALLEVENTS'>('GET_ALLEVENTS');

export interface MainState {
  events: [],
  isOpen: boolean,
  EventTitle: string,
  StartDate: Date,
  EndDate: Date,
  TimeSlot: [],
}

const initialState : MainState = {
  events: [],
  isOpen: false,
  EventTitle: '',
  StartDate: new Date(),
  EndDate: new Date(),
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
      EventTitle: action.payload,
    }))
    .addCase(START_DATE, (state, action) => ({
      ...state,
      StartDate: new Date(action.payload),
    }))
    .addCase(END_DATE, (state, action) => ({
      ...state,
      EndDate: new Date(action.payload),
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
    .addDefaultCase((state: any) => state);
});

export default MainReducer;
