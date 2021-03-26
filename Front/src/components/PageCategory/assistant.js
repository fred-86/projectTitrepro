// Import npm
import { connect } from 'react-redux';

// Import local
import PageCategory from './index';

const mapStateToProps = (state) => ({
  isCategoriesLoaded: state.product.isCategoriesLoaded,
  categories: state.product.categories,
  products: state.product.products,
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(PageCategory);
