// Import npm
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// Import local
import cartReducer from './reducers/cartReducer';

const rootReducer = combineReducers({
  cart: cartReducer,
});

const enhancers = composeWithDevTools(
  applyMiddleware(

  ),
);

const store = createStore(rootReducer, enhancers);

export default store;
