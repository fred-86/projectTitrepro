// Import npm
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// Import local
import appMiddleware from '../middlewares/appMiddleware';
import cartMiddleware from '../middlewares/cartMiddleware';
import productReducer from './reducers/productReducer';
import cartReducer from './reducers/cartReducer';
import homeReducer from './reducers/homeReducer';

const rootReducer = combineReducers({
  home: homeReducer,
  cart: cartReducer,
  product: productReducer,
});

const enhancers = composeWithDevTools(
  applyMiddleware(
    appMiddleware,
    cartMiddleware,
  ),
);

const store = createStore(rootReducer, enhancers);

export default store;
