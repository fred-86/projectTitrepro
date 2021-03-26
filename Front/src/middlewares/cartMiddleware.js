// Import npm
import axios from 'axios';
import { setLocations } from '../store/actions';

const cartMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case 'LOAD_LOCATIONS':
      axios.get('http://frederic-lescure.vpnuser.lan/project/back/apo-E-pascommerce-back/public/api/department/browse')
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
      const { category } = store.getState().cart.items[0];

      axios.get(`http://frederic-lescure.vpnuser.lan/project/back/apo-E-pascommerce-back/public/api/place/browse/productcategory/${category}/postalcode/${selectedLocation}`)
        .then((response) => {
          console.log(response); 
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
