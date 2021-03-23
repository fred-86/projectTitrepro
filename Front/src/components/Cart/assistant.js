// Import npm
import { connect } from 'react-redux';

// Import local
import { setSelectedProduct, setSelectedOption } from 'src/store/actions';
import Cart from './index';

const mapStateToProps = (state) => ({
  selectedOption: state.cart.cart.selectedOption,
});

const mapDispatchToProps = (dispatch) => ({
  setSelectedOption: (event) => {
    const optionIndex = parseInt(event.target.value);
    dispatch(setSelectedOption(optionIndex));
  },
  setSelectedProduct: (selectedProduct) => {
    const productId = parseInt(selectedProduct);
    dispatch(setSelectedProduct(productId));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
