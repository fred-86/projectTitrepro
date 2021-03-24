// Import npm
import { connect } from 'react-redux';

// Import local
import { loadCategory } from 'src/store/actions';
import App from './index';

const mapStateToProps = (state) => ({
  categories: state.product.categories,
});

const mapDispatchToProps = (dispatch) => ({
  loadCategory: () => {
    dispatch(loadCategory());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
