// Import npm
import { connect } from 'react-redux';

// Import local
import { getToken, loadCategory, loadProducts, setSwitchVisibility } from 'src/store/actions';
import App from './index';

const mapStateToProps = (state) => ({
  token: state.product.token,
  categories: state.product.categories,
  products: state.product.products,
});

const mapDispatchToProps = (dispatch) => ({
  loadCategory: () => {
    dispatch(loadCategory());
  },
  loadProducts: () => {
    dispatch(loadProducts());
  },
  getToken: () => {
    dispatch(getToken());
  },
  setSwitchVisibility: (value) => {
    dispatch(setSwitchVisibility(value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
