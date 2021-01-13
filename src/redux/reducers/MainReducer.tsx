import { createAction, createReducer } from '@reduxjs/toolkit';

export const OPEN_EVENTMODAL = createAction<boolean, 'OPEN_EVENTMODAL'>('OPEN_EVENTMODAL');
export const CLOSE_EVENTMODAL = createAction<boolean, 'CLOSE_EVENTMODAL'>('CLOSE_EVENTMODAL');
export const ADD_TITLE = createAction<string, 'ADD_TITLE'>('ADD_TITLE');
export const START_DATE = createAction<string, 'START_DATE'>('START_DATE');
export const END_DATE = createAction<string, 'END_DATE'>('END_DATE');
export const TIME_SLOT = createAction<any, 'TIME_SLOT'>('TIME_SLOT');
export const ADD_EVENT = createAction<any, 'ADD_EVENT'>('ADD_EVENT');
export const DELETE_EVENT = createAction<string, 'DELETE_EVENT'>('DELETE_EVENT');
export const EVENT_SUCCESS = createAction<any, 'EVENT_SUCCESS'>('EVENT_SUCCESS');
export const GET_ALLEVENTS = createAction<any, 'GET_ALLEVENTS'>('GET_ALLEVENTS');
export const SELECTED_EVENT = createAction<[], 'SELECTED_EVENT'>('SELECTED_EVENT');
export const EVENTS_DETAILS = createAction<[], 'EVENTS_DETAILS'>('EVENTS_DETAILS');
export const DUMMY_EVENT = createAction<[], 'DUMMY_EVENT'>('DUMMY_EVENT');
export const OPEN_SIDEBAR = createAction<boolean, 'OPEN_SIDEBAR'>('OPEN_SIDEBAR');
export const DELETE_SUCCESS = createAction<any, 'DELETE_SUCCESS'>('DELETE_SUCCESS');
export const DELETE_FAILED = createAction<any, 'DELETE_FAILED'>('DELETE_FAILED');

export interface MainState {
  events: any,
  isOpen: boolean,
  title: string,
  start: Date,
  end: Date,
  sideOpen: boolean,
  TimeSlot: [],
  selectedEvent: [],
}

const initialState : MainState = {
  events: [],
  isOpen: false,
  title: '',
  start: new Date(),
  end: new Date(),
  sideOpen: false,
  TimeSlot: [],
  selectedEvent: [],
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
    .addCase('EVENT_SUCCESS', (state) => ({
      ...state,
      isOpen: false,
      TimeSlot: [],
      EventTitle: '',
    }))
    .addCase(EVENTS_DETAILS, (state, action) => ({
      ...state,
      events:
        action.payload.map((item : any) => ({
          ...item,
          start: item.start.toDate(),
          end: item.end.toDate(),
          CreatedOn: item.CreatedOn.toDate(),
        })),
      isOpen: false,
    }))
    .addCase(DUMMY_EVENT, (state, action) => ({
      ...state,
      events: [...state.events, action.payload],
      isOpen: false,
    }))
    .addCase(OPEN_SIDEBAR, (state, action) => ({
      ...state,
      sideOpen: action.payload,
    }))
    .addCase(SELECTED_EVENT, (state, action) => ({
      ...state,
      selectedEvent: action.payload,
    }))
    .addCase(DELETE_SUCCESS, (state, action) => ({
      ...state,
      sideOpen: false,
      events: state.events.filter((item : any) => item.id !== action.payload),
    }))
    .addDefaultCase((state: any) => state);
});

export default MainReducer;
