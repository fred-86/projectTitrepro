// Import npm
import axios from 'axios';

// Import local
import { setLocations, setHaveFound, setSwitchVisibility, setMainSwitch, setStatusCode, setCartPlaces, showPopUp, setBubble } from '../store/actions';

const cartMiddleware = (store) => (next) => (action) => {
  const { token } = store.getState().product;

  switch (action.type) {
    case 'LOAD_LOCATIONS':
      axios.get('http://www.epako.studio/apo-E-pascommerce-back/public/api/department/browse', {
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

      const subCategoriesIndex = [];

      items.forEach((item) => {
        if (!subCategoriesIndex.includes(item.product.productCategories[0].id)) {
          subCategoriesIndex.push(item.product.productCategories[0].id);
        }
      });

      let formatUrl;

      subCategoriesIndex.forEach((subCategoryIndex, index) => {
        if (index === 0) {
          formatUrl = `ids[]=${subCategoryIndex}`;
        }
        else {
          formatUrl += `&ids[]=${subCategoryIndex}`;
        }
      });

      axios.get(`http://www.epako.studio/apo-E-pascommerce-back/public/api/place/browse/productcategory/postalcode/${selectedLocation}?${formatUrl}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      })
        .then((response) => {
          store.dispatch(setHaveFound(true));
          store.dispatch(setCartPlaces(response.data));
          console.log(localStorage.getItem('hadVisited'));

          if (localStorage.getItem('hadVisited') === null) {
            store.dispatch(setBubble());
          }

          localStorage.setItem("hadVisited", true);
          store.dispatch(setSwitchVisibility(true));
        })
        .catch((err) => {
          const { error, status } = err.response.data;

          if (status === 404) {
            store.dispatch(setHaveFound(false));

            if (localStorage.getItem('hadVisited') === null) {
              store.dispatch(setBubble());
            }

            localStorage.setItem("hadVisited", true);
            store.dispatch(setSwitchVisibility(true));
            store.dispatch(setMainSwitch());
            store.dispatch(setStatusCode("404"));
            store.dispatch(showPopUp([error]));
          }
          else {
            console.log(err.response);
          }
        });
      next(action);
      break;
    }

    default:
      next(action);
  }
};

export default cartMiddleware;
