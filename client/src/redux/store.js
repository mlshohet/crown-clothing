import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';

import logger from 'redux-logger';

import rootReducer from './root-reducer';
import rootSaga from './root-saga';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware]; //add all middleware here

if (process.env.NODE_ENV === 'development'){
	middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares)); // you don't have to add middleware here

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

// export { store, persistor };