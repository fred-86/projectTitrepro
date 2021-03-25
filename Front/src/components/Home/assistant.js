import { connect } from 'react-redux';

import { setDisplayedCategory } from 'src/store/actions';
import Home from './index';

const mapStateToProps = (state) => ({
  isCategoriesLoaded: state.product.isCategoriesLoaded,
  isProductLoaded: state.product.isProductLoaded,
  categories: state.product.categories,
  products: state.product.products,
  displayedCategory: state.home.displayedCategory,
});

const mapDispatchToProps = (dispatch) => ({
  setDisplayedCategory: (newDisplayedCategory) => {
    dispatch(setDisplayedCategory(newDisplayedCategory));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
