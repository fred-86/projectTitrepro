// Import npm
import axios from 'axios';
import { setLocations, setHaveFound, setPlaceCategories, setPlaces } from '../store/actions';

const cartMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case 'LOAD_LOCATIONS':
      axios.get('http://100.25.202.232/apo-E-pascommerce-back/public/api/department/browse')
        .then((response) => {
          store.dispatch(setLocations(response.data));
        })
        .catch((err) => {
          console.log(err);
        });
      next(action);
      break;
    case 'SEND_CART': {
      const { selectedLocation } = store.getState().cart.flyingCart;
      const { id } = store.getState().cart.items[0].product.productCategories[0];

      axios.get(`http://100.25.202.232/apo-E-pascommerce-back/public/api/place/browse/productcategory/${id}/postalcode/${selectedLocation}`)
        .then((response) => {
          store.dispatch(setHaveFound(true));
          store.dispatch(setPlaces(response.data));
        })
        .catch((err) => {
          console.log(err.response);
        });
      next(action);
      break;
    }

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

    default:
      next(action);
  }
};

export default cartMiddleware;
