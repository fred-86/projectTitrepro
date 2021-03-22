// Import npm
import { connect } from 'react-redux';

// Import local
import { addToCart, setPictureToMain } from 'src/store/actions';
import ProductPage from './index';

const mapStateToProps = (state) => ({
  name: state.product.name,
  brand: state.product.brand,
  description: state.product.description,
  price: state.product.price,
  save: state.product.save,
  pictures: state.product.pictures,
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
