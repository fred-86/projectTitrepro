// Import npm
import { connect } from 'react-redux';

// Import local
import {
  loadPlaceCategories,
  setSelectedProduct,
  setSelectedPlaceCategory,
  setMainSwitch,
  setHaveFound
} from 'src/store/actions';
import Cart from './index';

const mapStateToProps = (state) => ({
  items: state.cart.items,
  placeCategories: state.cart.cart.placeCategories,
  selectedPlaceCategory: state.cart.cart.selectedPlaceCategory,
  places: state.cart.cart.places,
  selectedProduct: state.cart.cart.selectedProduct,
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
