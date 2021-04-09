// Import npm
import { connect } from 'react-redux';

// Import local
import {
  loadLocations,
  setAmount,
  removeFromCart,
  setSelectedLocation,
  sendCart,
  showPopUp,
} from 'src/store/actions';
import FlyingCart from 'src/components/FlyingCart';

const mapStateToProps = (state) => ({
  isOpened: state.cart.flyingCart.isOpened,
  token: state.product.token,
  items: state.cart.items,
  locations: state.cart.flyingCart.locations,
  selectedLocation: state.cart.flyingCart.selectedLocation,
  amount: state.cart.flyingCart.amount,
  haveFound: state.cart.flyingCart.haveFound,
  statusCode: state.cart.flyingCart.statusCode,
});

const mapDispatchToProps = (dispatch) => ({
  loadLocations: () => {
    dispatch(loadLocations());
  },
  setAmount: (amount) => {
    dispatch(setAmount(amount));
  },
  removeFromCart: (event) => {
    dispatch(removeFromCart(event.target.value));
  },
  setSelectedLocation: (event) => {
    dispatch(setSelectedLocation(event.target.value));
  },
  sendCart: () => {
    dispatch(sendCart());
  },
  showPopUp: (messages) => {
    dispatch(showPopUp(messages));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(FlyingCart);
