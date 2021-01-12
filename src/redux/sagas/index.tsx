import { all } from 'redux-saga/effects';

import authSaga from './AuthSaga';
import EventSaga from './EventSaga';

export default function* root() {
  yield all([
    authSaga,
    EventSaga,
  ]);
}
