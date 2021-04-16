// Import npm
import axios from 'axios';

// Import local
import { setToken, setCategories, setProducts, setPlaceCategories } from 'src/store/actions/appActions';
import { setPlaces } from 'src/store/actions/altHomeActions';

// Function
const appMiddleware = (store) => (next) => (action) => {
  const login = process.env.AUTH_LOGIN;
  const password = process.env.AUTH_PASSWORD;
  const { token } = store.getState().app;

  switch (action.type) {
    case 'GET_TOKEN':
      axios.post('http://www.epako.studio/apo-E-pascommerce-back/public/api/login_check', {
        "username": `${login}`,
        "password": `${password}`
      })
        .then((response) => {
          store.dispatch(setToken(response.data.token));
        })
        .catch((err) => {
          console.log('err:', err);
        });
      next(action);
      break;

    case 'LOAD_CATEGORIES':
      axios.get('http://www.epako.studio/apo-E-pascommerce-back/public/api/product/category/browse', {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      })
        .then((response) => {
          store.dispatch(setCategories(response.data));
        })
        .catch((err) => {
          console.log(err.response);
        });
      next(action);
      break;

    case 'LOAD_PRODUCTS':
      axios.get('http://www.epako.studio/apo-E-pascommerce-back/public/api/product/browse', {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      })
        .then((response) => {
          store.dispatch(setProducts(response.data));
        })
        .catch((err) => {
          console.log(err);
        });
      next(action);
      break;

    case 'LOAD_PLACE_CATEGORIES':
      axios.get('http://www.epako.studio/apo-E-pascommerce-back/public/api/place/category/browse', {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      })
        .then((response) => {
          store.dispatch(setPlaceCategories(response.data));
        })
        .catch((err) => {
          console.log(err);
        });
      next(action);
      break;

    case 'LOAD_PLACES':
      axios.get('http://www.epako.studio/apo-E-pascommerce-back/public/api/place/browse', {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      })
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
