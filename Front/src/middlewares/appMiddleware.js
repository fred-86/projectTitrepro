// Import npm
import axios from 'axios';

// Import local
import { setCategories, setProducts, setPlaceCategories, setPlaces } from 'src/store/actions';

const appMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case 'LOAD_CATEGORY':
      axios.get('http://100.25.202.232/apo-E-pascommerce-back/public/api/product/category/browse')
        .then((response) => {
          store.dispatch(setCategories(response.data));
        })
        .catch((err) => {
          console.log(err);
        });
      next(action);
      break;
    case 'LOAD_PRODUCTS':
      axios.get('http://100.25.202.232/apo-E-pascommerce-back/public/api/product/browse')
        .then((response) => {
          store.dispatch(setProducts(response.data));
        })
        .catch((err) => {
          console.log(err);
        });
      next(action);
      break;

    case 'LOAD_PLACE_CATEGORIES':
      axios.get('http://100.25.202.232/apo-E-pascommerce-back/public/api/place/category/browse')
        .then((response) => {
          store.dispatch(setPlaceCategories(response.data));
        })
        .catch((err) => {
          console.log(err);
        });
      next(action);
      break;

    case 'LOAD_PLACES':
      axios.get('http://100.25.202.232/apo-E-pascommerce-back/public/api/place/browse')
        .then((response) => {
          store.dispatch(setPlaces(response.data));
        })
        .catch((err) => {
          console.log('err:', err);
        });
      next(action);
      break;

    default:
      next(action);
  }
};

export default appMiddleware;
