// Import npm
import  { connect } from 'react-redux';

// Import local
import { setIsOpened } from 'src/store/actions';
import FlyingCart from 'src/components/FlyingCart';

const mapStateToProps = (state) => ({
  isOpened: state.cart.flyingCart.isOpened,
  products: state.cart.products,
});

const mapDispatchToProps = (dispatch) => ({
  setIsOpened: () => {
    dispatch(setIsOpened());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(FlyingCart);
