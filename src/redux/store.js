import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

const middlewares = [logger]; //add all middleware here

const store = createStore(rootReducer, applyMiddleware(...middlewares)); // you don't have to add middleware here

export default store;