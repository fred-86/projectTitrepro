// Import npm
import { connect } from 'react-redux';

// Import local
import { addToCart } from 'src/store/actions';
import PageCategory from './index';

const mapStateToProps = (state) => ({
  isCategoriesLoaded: state.product.isCategoriesLoaded,
  categories: state.product.categories,
  products: state.product.products,
});

const mapDispatchToProps = (dispatch) => ({
  addToCart: (userChoice) => {
    dispatch(addToCart(userChoice));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(PageCategory);
