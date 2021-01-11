import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import MainReducer from './MainReducer';
import NotifierReducer from './NotifierReducer';

const RootReducer = combineReducers({
  auth: AuthReducer,
  main: MainReducer,
  notify: NotifierReducer,
});

export default RootReducer;
