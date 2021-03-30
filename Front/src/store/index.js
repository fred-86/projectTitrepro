// Import npm
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// Import local
import appMiddleware from '../middlewares/appMiddleware';
import cartMiddleware from '../middlewares/cartMiddleware';
import homeReducer from './reducers/homeReducer';
import productReducer from './reducers/productReducer';
import cartReducer from './reducers/cartReducer';
import popUpReducer from './reducers/popUpReducer';
import altHomeReducer from './reducers/altHomeReduce';

const rootReducer = combineReducers({
  home: homeReducer,
  product: productReducer,
  cart: cartReducer,
  popUp: popUpReducer,
  altHome: altHomeReducer,
});

const enhancers = composeWithDevTools(
  applyMiddleware(
    appMiddleware,
    cartMiddleware,
  ),
);

const store = createStore(rootReducer, enhancers);

export default store;
