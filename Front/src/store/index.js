// Import npm
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// Import local
import cartReducer from './reducers/cartReducer';
import productReducer from './reducers/productReducer';

const rootReducer = combineReducers({
  cart: cartReducer,
  product: productReducer,
});

const enhancers = composeWithDevTools(
  applyMiddleware(

  ),
);

const store = createStore(rootReducer, enhancers);

export default store;
