// Import npm
import { connect } from 'react-redux';

// Import local
import { loadPlaceCategories, setMainSwitch } from 'src/store/actions/appActions';
import {
  setSelectedProduct,
  setSelectedPlaceCategory,
  setHaveFound
} from 'src/store/actions/cartActions';
import Cart from './index';

const mapStateToProps = (state) => ({
  items: state.cart.items,
  placeCategories: state.app.placeCategories,
  places: state.cart.cart.relatedPlaces,
  selectedProduct: state.cart.cart.selectedProduct,
  selectedPlaceCategory: state.cart.cart.selectedPlaceCategory,
});

const mapDispatchToProps = (dispatch) => ({
  loadPlaceCategories: () => {
    dispatch(loadPlaceCategories());
  },
  setSelectedPlaceCategory: (categoryIndex) => {
    dispatch(setSelectedPlaceCategory(categoryIndex));
  },
  setSelectedProduct: (selectedProduct) => {
    dispatch(setSelectedProduct(selectedProduct));
  },
  setHaveFound: (value) => {
    dispatch(setHaveFound(value));
  },
  setMainSwitch: () => {
    dispatch(setMainSwitch());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
