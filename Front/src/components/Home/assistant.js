import { connect } from 'react-redux';

import { setPosition } from 'src/store/actions';
import Home from './index';

const mapStateToProps = (state) => ({
  isCategoriesLoaded: state.product.isCategoriesLoaded,
  isProductLoaded: state.product.isProductLoaded,
  categories: state.product.categories,
  products: state.product.products,
  position: state.home.position,
});

const mapDispatchToProps = (dispatch) => ({
  setPosition: (position) => {
    dispatch(setPosition(position));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
