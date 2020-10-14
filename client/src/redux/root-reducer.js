import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist'; //importing Redux Persist

//importing Redux Persist storage
import storage from 'redux-persist/lib/storage';


import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import directoryReducer from './directory/directory.reducer';
import shopReducer from './shop/shop.reducers';

//config for Redux persist (JSON object)
const persistConfig = {
	key: 'root',
	storage,
	//String names of any reducer to be stored.
	//User reducer is being handled by Firebase
	whitelist: ['cart']
}

const rootReducer = combineReducers({
	user: userReducer,
	cart: cartReducer,
	directory: directoryReducer,
	shop: shopReducer
});	

//modified root reducer with persist capabilities
export default persistReducer(persistConfig, rootReducer);


