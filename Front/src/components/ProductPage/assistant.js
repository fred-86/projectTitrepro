// Import npm
import { connect } from 'react-redux';

// Import local
import { addToCart } from 'src/store/actions/cartActions';
import { setPictureToMain } from 'src/store/actions/homeActions';
import ProductPage from './index';

const mapStateToProps = (state) => ({
  categories: state.app.categories,
  isProductLoaded: state.app.isProductLoaded,
  products: state.app.products,
});

const mapDispatchToProps = (dispatch, props) => ({
  addToCart: (userChoice) => {
    dispatch(addToCart(userChoice));
  },
  setPictureToMain: (event) => {
    const newPictures = props.data.pictures.filter((picture) => (picture !== event.target.src));
    newPictures.unshift(event.target.src);

    dispatch(setPictureToMain(newPictures));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);
