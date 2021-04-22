// Import npm
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// Import local
import appMiddleware from '../middlewares/appMiddleware';
import cartMiddleware from '../middlewares/cartMiddleware';
import placeMiddleware from '../middlewares/placeMiddleware';
import appReducer from './reducers/appReducer';
import homeReducer from './reducers/homeReducer';
import cartReducer from './reducers/cartReducer';
import altHomeReducer from './reducers/altHomeReduce';

const appPersistConfig = {
  key: 'app',
  storage,
  whitelist: ['mainSwitch']
};

const cartPersistConfig = {
  key: 'cart',
  storage,
};

const rootReducer = combineReducers({
  app: persistReducer(appPersistConfig, appReducer),
  home: homeReducer,
  cart: persistReducer(cartPersistConfig, cartReducer),
  altHome: altHomeReducer,
});

const enhancers = composeWithDevTools(
  applyMiddleware(
    appMiddleware,
    cartMiddleware,
    placeMiddleware,
  )
);

export const store = createStore(rootReducer, enhancers);

export const persistedStore = persistStore(store);
