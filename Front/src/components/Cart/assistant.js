// Import npm
import { connect } from 'react-redux';

// Import local
import { loadPlaceCategories, setSelectedProduct, setSelectedPlaceCategory } from 'src/store/actions';
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
  setSelectedPlaceCategory: (event) => {
    const categoryIndex = parseInt(event.target.value);
    dispatch(setSelectedPlaceCategory(categoryIndex));
  },
  setSelectedProduct: (selectedProduct) => {
    const productId = parseInt(selectedProduct);
    dispatch(setSelectedProduct(productId));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
