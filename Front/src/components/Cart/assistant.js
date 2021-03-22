// Import npm
import { connect } from 'react-redux';

// Import local
import Cart from './index';
import { setSelectedOption } from 'src/store/actions';

const mapStateToProps = (state) => ({
  selectedOption: state.cart.cart.selectedOption,
});

const mapDispatchToProps = (dispatch) => ({
  setSelectedOption: (event) => {
    const optionIndex = parseInt(event.target.value);
    dispatch(setSelectedOption(optionIndex));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
