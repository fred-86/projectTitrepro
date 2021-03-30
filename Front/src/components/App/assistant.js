// Import npm
import { connect } from 'react-redux';

// Import local
import { getToken, loadCategory, loadProducts } from 'src/store/actions';
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
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
