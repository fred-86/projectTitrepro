// Import npm
import { connect } from 'react-redux';

// Import local
import { loadLocations, showPopUp } from 'src/store/actions/appActions';
import {
  removeFromCart,
  setSelectedLocation,
  setAmount,
  sendCart,
} from 'src/store/actions/cartActions';
import FlyingCart from 'src/components/FlyingCart';

const mapStateToProps = (state) => ({
  token: state.app.token,
  isOpened: state.cart.flyingCart.isOpened,
  items: state.cart.items,
  locations: state.app.locations,
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
