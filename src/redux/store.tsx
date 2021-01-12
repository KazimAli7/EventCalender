import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import RootReducer from './reducers';
import rootSaga from './sagas/AuthSaga';

const SagaMiddleWare = createSagaMiddleware();
const store = createStore(RootReducer, {}, applyMiddleware(SagaMiddleWare));

SagaMiddleWare.run(rootSaga);

export default store;
