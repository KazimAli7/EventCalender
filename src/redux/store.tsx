import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import RootReducer from './reducers';
import root from './sagas/RootSaga';

const SagaMiddleWare = createSagaMiddleware();
const store = createStore(RootReducer, {}, applyMiddleware(SagaMiddleWare));

SagaMiddleWare.run(root);

export default store;
