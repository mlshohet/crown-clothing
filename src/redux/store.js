import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';

import logger from 'redux-logger';

import rootReducer from './root-reducer';

const middlewares = []; //add all middleware here

if (process.env.NODE_ENV === 'development'){
	middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares)); // you don't have to add middleware here

export const persistor = persistStore(store);

// export { store, persistor };