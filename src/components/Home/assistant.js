import { connect } from 'react-redux';

import { setPosition } from 'src/store/actions/homeActions';
import Home from './index';

const mapStateToProps = (state) => ({
  isCategoriesLoaded: state.app.isCategoriesLoaded,
  isProductLoaded: state.app.isProductLoaded,
  categories: state.app.categories,
  products: state.app.products,
  position: state.home.position,
});

const mapDispatchToProps = (dispatch) => ({
  setPosition: (position) => {
    dispatch(setPosition(position));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
