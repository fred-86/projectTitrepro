// Import npm
import { connect } from 'react-redux';

// Import local
import { addToCart } from 'src/store/actions/cartActions';
import PageCategory from './index';

const mapStateToProps = (state) => ({
  isCategoriesLoaded: state.app.isCategoriesLoaded,
  categories: state.app.categories,
  products: state.app.products,
});

const mapDispatchToProps = (dispatch) => ({
  addToCart: (userChoice) => {
    dispatch(addToCart(userChoice));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(PageCategory);
