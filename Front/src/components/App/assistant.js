// Import npm
import { connect } from 'react-redux';

// Import local
import { getToken, loadCategories, loadProducts, setSwitchVisibility } from 'src/store/actions/appActions';
import App from './index';

const mapStateToProps = (state) => ({
  token: state.app.token,
  categories: state.app.categories,
  products: state.app.products,
});

const mapDispatchToProps = (dispatch) => ({
  getToken: () => {
    dispatch(getToken());
  },
  loadCategory: () => {
    dispatch(loadCategories());
  },
  loadProducts: () => {
    dispatch(loadProducts());
  },
  setSwitchVisibility: (value) => {
    dispatch(setSwitchVisibility(value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
