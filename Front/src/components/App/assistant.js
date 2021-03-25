// Import npm
import { connect } from 'react-redux';

// Import local
import { loadCategory, loadProducts } from 'src/store/actions';
import App from './index';

const mapStateToProps = (state) => ({
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
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
