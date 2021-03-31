// Import npm
import axios from 'axios';

// Import local
import { setLocations, setHaveFound, setCartPlaces } from '../store/actions';

const cartMiddleware = (store) => (next) => (action) => {
  const { token } = store.getState().product;

  switch (action.type) {
    case 'LOAD_LOCATIONS':
      axios.get('http://100.25.202.232/apo-E-pascommerce-back/public/api/department/browse', {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      })
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
      const { items } = store.getState().cart;

      const subCategoriesIndex = items.map((item) => (item.product.productCategories[0].id));

      axios.get(`http://100.25.202.232/apo-E-pascommerce-back/public/api/place/browse/productcategory/${subCategoriesIndex}/postalcode/${selectedLocation}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      })
        .then((response) => {
          store.dispatch(setHaveFound(true));
          store.dispatch(setCartPlaces(response.data));
        })
        .catch((err) => {
          console.log(err.response);
        });
      next(action);
      break;
    }

    default:
      next(action);
  }
};

export default cartMiddleware;
